// app/page.tsx
"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ReactAudioPlayer from "react-audio-player";
import { setTimeout } from "timers";

export default function Page() {
  // const [PlayToggle, setPlayToggle] = useState(false);
  let audio = new Audio("./bg-sound.mp3");
  const startPlay = () => {
    audio.play();
  };

  const stopPlay = () => {
    audio.pause();
  };

  useEffect(() => {
    // setTimeout(() => {
    //   startPlay();
    // }, 3000);
  }, []);

  const [Step1Display, setStep1Display] = useState<"none" | "block">("block");
  const [Step2Display, setStep2Display] = useState<"none" | "grid">("none");

  const navToStep1 = () => {
    console.log(Step1Display);
    console.log(Step2Display);
    setStep1Display("block");
    setStep2Display("none");
  };

  const navToStep2 = () => {
    console.log(Step1Display);
    console.log(Step2Display);
    setStep1Display("none");
    setStep2Display("grid");
  };

  return (
    <Flex bg={"#FFF6F2"} h={"100vh"} w={"full"} p={{ base: 0, md: 5 }}>
      <Flex
        w={"full"}
        h={"full"}
        rounded={{ base: "node", md: "2xl" }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        // backgroundImage={`url(./bg1.png)`}
        pos={"relative"}
        zIndex={0}
      >
        <Flex h={"full"} w={"full"} rounded={{ base: "node", md: "2xl" }}>
          <VStack
            rounded={{ base: "node", md: "2xl" }}
            spacing={2}
            overflowY="auto"
            // h={"full"}
            // w={"full"}
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none", // IE and Edge
              "scrollbar-width": "none", // Firefox
            }}
          >
            <HStack h={"full"} w={"full"} zIndex={0}>
              <Marquee speed={15} direction={"left"}>
                <Box h={"200px"} mx={1} bg={"#00FFF3"} w={"400px"}></Box>
                <Box h={"200px"} mx={1} bg={"#00FFF3"} w={"400px"}></Box>
                <Box h={"200px"} mx={1} bg={"#00FFF3"} w={"400px"}></Box>
                <Box h={"200px"} mx={1} bg={"#00FFF3"} w={"400px"}></Box>
                {/* <Box h={"200px"} bg={"#00FFF3"} w={"400px"}></Box> */}
              </Marquee>
            </HStack>
            <HStack h={"full"} w={"full"} zIndex={0}>
              <Marquee speed={15} direction={"right"}>
                <Box h={"400px"} mx={1} bg={"#00D1FF"} w={"280px"}></Box>
                <Box h={"400px"} mx={1} bg={"#00D1FF"} w={"280px"}></Box>
                <Box h={"400px"} mx={1} bg={"#00D1FF"} w={"280px"}></Box>
                <Box h={"400px"} mx={1} bg={"#00D1FF"} w={"280px"}></Box>
                <Box h={"400px"} mx={1} bg={"#00D1FF"} w={"280px"}></Box>
                <Box h={"400px"} mx={1} bg={"#00D1FF"} w={"280px"}></Box>
              </Marquee>
            </HStack>
            <HStack h={"full"} w={"full"} zIndex={0}>
              <Marquee speed={15} direction={"left"}>
                <Box h={"200px"} mx={1} bg={"#0087FF"} w={"400px"}></Box>
                <Box h={"200px"} mx={1} bg={"#0087FF"} w={"400px"}></Box>
                <Box h={"200px"} mx={1} bg={"#0087FF"} w={"400px"}></Box>
                <Box h={"200px"} mx={1} bg={"#0087FF"} w={"400px"}></Box>
                <Box h={"200px"} mx={1} bg={"#0087FF"} w={"400px"}></Box>
              </Marquee>
            </HStack>
            <HStack h={"full"} w={"full"} zIndex={0}>
              <Marquee speed={15} direction={"right"}>
                <Box h={"200px"} mx={1} bg={"#0027FF"} w={"400px"}></Box>
                <Box h={"200px"} mx={1} bg={"#0027FF"} w={"400px"}></Box>
                <Box h={"200px"} mx={1} bg={"#0027FF"} w={"400px"}></Box>
                <Box h={"200px"} mx={1} bg={"#0027FF"} w={"400px"}></Box>
              </Marquee>
            </HStack>
          </VStack>
        </Flex>
        <Box
          pos={"absolute"}
          top="0"
          left="0"
          w={"full"}
          h={"full"}
          rounded={{ base: "node", md: "2xl" }}
          // bgGradient="linear(to-b, rgba(255, 221, 207, 0) 0%, rgba(255, 160, 122, 0.5) 100%)"
          bgGradient="linear(to-b, rgba(108,176,242, 0.3) 0%, rgba(108,176,242, 1) 100%)"
          // bg={"red"}
        >
          {/* <Button onClick={() => startPlay()}>Play</Button>
          <Button onClick={() => stopPlay()}>Stop</Button> */}
          <Flex
            w={"full"}
            h={"full"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* STEP 1 */}
            <Box display={Step1Display}>
              <VStack spacing={5} px={{ base: 2, md: 10 }}>
                <Heading
                  as="h2"
                  size="2xl"
                  // bgGradient="linear(to-r, #00D8FF, #0078FF)"
                  // bgGradient="linear(to-b, gray.50, gray.300)"
                  color={"white"}
                  textAlign={"center"}
                  // bgClip="text"
                >
                  (2xl) In love with React & Next
                </Heading>
                <Button
                  colorScheme={"blue"}
                  variant={"solid"}
                  size={"lg"}
                  px={10}
                  rounded={"3xl"}
                  onClick={() => navToStep2()}
                >
                  Mulai
                </Button>
              </VStack>
            </Box>
            {/* STEP 2 */}
            <Grid
              templateColumns="repeat(12, 1fr)"
              gap={2}
              w={"full"}
              display={Step2Display}
            >
              <GridItem
                colStart={{ base: 2, md: 4 }}
                colEnd={{ base: 12, md: 10 }}
              >
                <Box
                  w={"full"}
                  // w={"600px"}
                  h={"600px"}
                  bg={"red"}
                  rounded={"3xl"}
                  bgGradient={"linear(to-b, #275A8B, #0C365E)"}
                  p={8}
                  overflowY={"auto"}
                >
                  <VStack spacing={5} w={"full"}>
                    <Button
                      colorScheme={"blue"}
                      variant={"solid"}
                      size={"md"}
                      px={10}
                      rounded={"3xl"}
                      onClick={() => navToStep1()}
                    >
                      Kembali
                    </Button>
                    <Heading
                      as="h2"
                      size="xl"
                      // bgGradient="linear(to-r, #00D8FF, #0078FF)"
                      // bgGradient="linear(to-b, gray.50, gray.300)"
                      color={"white"}
                      textAlign={"center"}
                      // bgClip="text"
                    >
                      (2xl) In love with React & Next
                    </Heading>
                    <Box width={"full"}>
                      <Flex width={"560"} height={"315"} bg={"black"}></Flex>
                      {/* <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/feMDhjDAlzU?si=ynka-WmOZGw0z3EH"
                        title="YouTube video player"
                        // frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        // referrerpolicy="strict-origin-when-cross-origin"
                        // allowfullscreen
                      ></iframe> */}
                    </Box>
                    <Box w={"full"} p={5}>
                      <Text color={"white"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Itaque cum deleniti et incidunt commodi
                        voluptatibus! Repudiandae sit harum molestiae tempore
                        atque, facere amet dolorum excepturi, commodi dolorem
                        ipsa asperiores deserunt.
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              </GridItem>
            </Grid>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
