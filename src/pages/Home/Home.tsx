import { Flex } from "@chakra-ui/react";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import Posts from "./Sections/Posts";
import Footer from "./Sections/Footer";
import FeatureCards from "./Sections/FeatureCards";
import CTA from "./Sections/CTA";
import FAQs from "./Sections/FAQs";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <Flex flexDirection="column">
      <Helmet>
        <title>
          All-Access Pass to Exclusive DJ Content, Perks & Communities
        </title>
        <meta
          name="description"
          content="Want to get closer to your favourite DJs? Access tracks, playlists, videos + unlock exclusive releases, VIP invites, pre-release tickets, discounts, community chat & more."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://djfan.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="All-Access Pass to Exclusive DJ Content, Perks & Communities"
        />
        <meta
          property="og:description"
          content="Want to get closer to your favourite DJs? Access tracks, playlists, videos + unlock exclusive releases, VIP invites, pre-release tickets, discounts, community chat & more."
        />
        <meta
          property="og:image"
          content="https://media.djfan.app/images/djfan-share.jpg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="djfan.app" />
        <meta property="twitter:url" content="https://djfan.app" />
        <meta
          name="twitter:title"
          content="All-Access Pass to Exclusive DJ Content, Perks & Communities"
        />
        <meta
          name="twitter:description"
          content="Want to get closer to your favourite DJs? Access tracks, playlists, videos + unlock exclusive releases, VIP invites, pre-release tickets, discounts, community chat & more."
        />
        <meta
          name="twitter:image"
          content="https://media.djfan.app/images/djfan-share.jpg"
        />
      </Helmet>
      <Header />
      <Hero />
      <FeatureCards />
      <CTA />
      <Posts />
      <FAQs />
      <Features />
      <Footer />
    </Flex>
  );
}
