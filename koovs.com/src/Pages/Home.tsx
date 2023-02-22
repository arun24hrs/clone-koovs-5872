import {
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
//import MensCard from '../HomeComponent/MensCard';
import Navbar from "../HomeComponent/Navbar";
import Navbar1 from "../HomeComponent/Navbar1";

export default function Home() {
  return (
    // <Box><MensCard /></Box>
    <>
      <Navbar />
      <Divider />
      <Navbar1 />

      {/* Featured Brands */}
      <Heading as="h3" size="lg" textAlign={"center"} mt={"20px"} mb={"30px"}>
        Featured Brands
      </Heading>
      <SimpleGrid columns={2} spacing={"20px"} px={"20px"}>
        <Box>
          <Image
            src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-1007.jpg?v=1667990812&width=720"
            alt="essentails"
          />
          <Text>Essentials by Koovs</Text>
        </Box>
        <Box>
          <Image
            src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-3213-141.jpg?v=1667995128&width=720 "
            alt=" koovs"
          />
          <Text> Koovs</Text>
        </Box>
      </SimpleGrid>
    </>
  );
}
