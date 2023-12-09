import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Textarea,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
} from "@chakra-ui/react";

const API_ENDPOINT =
  "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const API_KEY = "AIzaSyC5bYYhaliOXUpuiOtpbVyYsqkbq5i87iY"; // Replace with your API key

type ResultType = {
  domain: string;
  mobileScore: number;
  desktopScore: number;
};

const PageSpeedApp: React.FC = () => {
  const [domains, setDomains] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [results, setResults] = useState<ResultType[]>([]);
  const [loadingDomains, setLoadingDomains] = useState<string[]>([]);

  const handleRun = async () => {
    setLoadingDomains(domains);
    const promises = domains.map(async (domain) => {
      try {
        const mobileResponse = await fetch(
          `${API_ENDPOINT}?url=${encodeURIComponent(
            domain
          )}&key=${API_KEY}&strategy=mobile`
        );
        const desktopResponse = await fetch(
          `${API_ENDPOINT}?url=${encodeURIComponent(
            domain
          )}&key=${API_KEY}&strategy=desktop`
        );

        if (!mobileResponse.ok || !desktopResponse.ok) {
          throw new Error(
            `Failed to fetch data for ${domain}. Mobile Status: ${mobileResponse.status}, Desktop Status: ${desktopResponse.status}`
          );
        }

        const mobileJson = await mobileResponse.json();
        const desktopJson = await desktopResponse.json();

        return {
          domain,
          mobileScore:
            mobileJson.lighthouseResult.categories.performance.score * 100,
          desktopScore:
            desktopJson.lighthouseResult.categories.performance.score * 100,
        };
      } catch (error) {
        console.error("Error fetching PageSpeed Insights:", error);
        return {
          domain,
          mobileScore: null,
          desktopScore: null,
        };
      }
    });

    const newResults = await Promise.all(promises);
    setResults(newResults);
    setLoadingDomains([]);
  };

  return (
    <Box p={5}>
      <Textarea
        placeholder="Enter up to 50 domains, separated by new lines."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button mt={3} onClick={() => setDomains(inputValue.split("\n"))}>
        Add Domains
      </Button>
      <Button mt={3} colorScheme="blue" onClick={handleRun}>
        Run PageSpeed Insights
      </Button>

      <Table mt={5}>
        <Thead>
          <Tr>
            <Th>Domain</Th>
            <Th>Mobile Performance Score</Th>
            <Th>Desktop Performance Score</Th>
          </Tr>
        </Thead>
        <Tbody>
          {domains.map((domain) => (
            <Tr key={domain}>
              <Td>{domain}</Td>
              <Td>
                {loadingDomains.includes(domain) ? (
                  <Spinner />
                ) : (
                  results.find((result) => result.domain === domain)
                    ?.mobileScore || "N/A"
                )}
              </Td>
              <Td>
                {loadingDomains.includes(domain) ? (
                  <Spinner />
                ) : (
                  results.find((result) => result.domain === domain)
                    ?.desktopScore || "N/A"
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default PageSpeedApp;
