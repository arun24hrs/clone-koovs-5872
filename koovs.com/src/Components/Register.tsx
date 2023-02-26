import React from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import {Link} from "react-router-dom"
>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9

const Register = () => {
  return (
    <VStack
      gap={3}
      width={{ base: "100%", md: "35%" }}
      alignItems={"left"}
      padding={"10px"}
    >
      <Heading size={"md"}>New Customer</Heading>
<<<<<<< HEAD
=======
        <Heading size={"md"}>New Customer</Heading>
      <Text pt={"5px"} fontSize={"15px"}>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</Text>
      <Link to="/signup"><Button
        variant={"solid"}
        bgColor={"black"}
        color={"white"}
        width={"150px"}

        _hover={{ transform: "scale(1.03)" }}
        _active={{
          border: "1px solid black",
          bgColor: "white",
          color: "black",
        }}
      >
        Register
      </Button></Link>
>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9

      <Text pt={"5px"} fontSize={"15px"}>
        Sign up for early Sale access plus tailored new arrivals, trends and
        promotions. To opt out, click unsubscribe in our emails.
      </Text>
      <Link to="/signup">
        <Button
          variant={"solid"}
          bgColor={"black"}
          color={"white"}
          width={"150px"}
          _hover={{ transform: "scale(1.03)" }}
          _active={{
            border: "1px solid black",
            bgColor: "white",
            color: "black",
          }}
        >
          Register
        </Button>
      </Link>
    </VStack>
  );
};

export default Register;
