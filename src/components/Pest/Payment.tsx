import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Grid,
  Checkbox,
  Image,
  Heading,
  Flex,
  Radio,
  RadioGroup,
  Link,
  Text,
} from "@chakra-ui/react";

interface CardInfo {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  acceptTerms: boolean;
  paymentType: string;
}

export const PaymentForm = () => {
  const totalJobPrice = 300;
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    acceptTerms: false,
    paymentType: "deposit",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCardInfo({
      ...cardInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCardInfo({
      ...cardInfo,
      acceptTerms: event.target.checked,
    });
  };

  const handleRadioChange = (value: string) => {
    setCardInfo({
      ...cardInfo,
      paymentType: value,
    });
  };

  const calculatePaymentToday = () => {
    return cardInfo.paymentType === "deposit"
      ? totalJobPrice * 0.1
      : totalJobPrice * 0.85;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!cardInfo.acceptTerms) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    // Process the payment here
    console.log(cardInfo);
  };

  return (
    <Flex p="0px" pt="20px" flexDirection="column" alignItems="center">
      <Box>
        <Heading>Payment</Heading>
        <Text>Booking Deposit £{totalJobPrice.toFixed(2)}</Text>
        <Link href="https://buy.stripe.com/cN2eXgePP4Q0dvq5kl">Pay</Link>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl as="fieldset">
              <FormLabel as="legend">Choose Payment Type</FormLabel>
              <RadioGroup
                onChange={handleRadioChange}
                value={cardInfo.paymentType}
              >
                <Stack spacing={5} direction="row">
                  <Radio value="deposit">Pay Deposit</Radio>
                  <Radio value="full">Pay Full (15% discount)</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl id="name">
              <FormLabel>Name on Card</FormLabel>
              <Input
                type="text"
                name="name"
                value={cardInfo.name}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl id="cardNumber">
              <FormLabel>Card Number</FormLabel>
              <Input
                type="text"
                name="cardNumber"
                value={cardInfo.cardNumber}
                onChange={handleChange}
                required
              />
            </FormControl>

            <Grid templateColumns="1fr 1fr" gap={6}>
              <FormControl id="expiryDate">
                <FormLabel>Expiry Date</FormLabel>
                <Input
                  type="text"
                  name="expiryDate"
                  value={cardInfo.expiryDate}
                  onChange={handleChange}
                  required
                />
              </FormControl>

              <FormControl id="cvv">
                <FormLabel>CVV</FormLabel>
                <Input
                  type="text"
                  name="cvv"
                  value={cardInfo.cvv}
                  onChange={handleChange}
                  required
                />
              </FormControl>
            </Grid>
            <Checkbox
              name="acceptTerms"
              isChecked={cardInfo.acceptTerms}
              onChange={handleCheckboxChange}
            >
              I accept the terms and conditions
            </Checkbox>

            <Button type="submit" colorScheme="blue">
              Submit Payment
            </Button>
            <Text>Payment today: £{calculatePaymentToday().toFixed(2)}</Text>
            <Image
              w="200px"
              src="https://www.uk-cheapest.co.uk/support/wp-content/uploads/2022/09/payments-bg-white.png"
              alt="Payment methods"
            />
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default PaymentForm;
