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
  // let audio = new Audio("./bg-sound.mp3");
  const startPlay = () => {
    // audio.play();
  };

  const stopPlay = () => {
    // audio.pause();
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
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#00FFF3"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg)`}
                ></Box>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#00FFF3"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg)`}
                ></Box>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#00FFF3"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg)`}
                ></Box>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#00FFF3"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg)`}
                ></Box>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#00FFF3"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg)`}
                ></Box>
              </Marquee>
            </HStack>
            <HStack h={"full"} w={"full"} zIndex={0}>
              <Marquee speed={15} direction={"right"}>
                <Box
                  h={"400px"}
                  mx={1}
                  bg={"#00D1FF"}
                  w={"280px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg)`}
                ></Box>
                <Box
                  h={"400px"}
                  mx={1}
                  bg={"#00D1FF"}
                  w={"280px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg)`}
                ></Box>
                <Box
                  h={"400px"}
                  mx={1}
                  bg={"#00D1FF"}
                  w={"280px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg)`}
                ></Box>
                <Box
                  h={"400px"}
                  mx={1}
                  bg={"#00D1FF"}
                  w={"280px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg)`}
                ></Box>
                <Box
                  h={"400px"}
                  mx={1}
                  bg={"#00D1FF"}
                  w={"280px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg)`}
                ></Box>
                <Box
                  h={"400px"}
                  mx={1}
                  bg={"#00D1FF"}
                  w={"280px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg)`}
                ></Box>
                <Box
                  h={"400px"}
                  mx={1}
                  bg={"#00D1FF"}
                  w={"280px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg)`}
                ></Box>
              </Marquee>
            </HStack>
            <HStack h={"full"} w={"full"} zIndex={0}>
              <Marquee speed={15} direction={"left"}>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#0087FF"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg)`}
                ></Box>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#0087FF"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg)`}
                ></Box>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#0087FF"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg)`}
                ></Box>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#0087FF"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg)`}
                ></Box>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#0087FF"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg)`}
                ></Box>
              </Marquee>
            </HStack>
            <HStack h={"full"} w={"full"} zIndex={0}>
              <Marquee speed={15} direction={"right"}>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#0027FF"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg)`}
                ></Box>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#0027FF"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg)`}
                ></Box>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#0027FF"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg)`}
                ></Box>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#0027FF"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg)`}
                ></Box>
                <Box
                  h={"200px"}
                  mx={1}
                  bg={"#0027FF"}
                  w={"400px"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg)`}
                ></Box>
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
