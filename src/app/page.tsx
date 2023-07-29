"use client"
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';
import '@fontsource/zen-tokyo-zoo';

export default function Home() {
  return (
    // <main className="max-w-2xl mx-auto p-4">
    //   <h1 className="text-4xl font-bold mb-4">Hi, I'm Muhammed</h1>
    //   <p className="mb-4">
    //     I'm a software engineer and a full-stack web developer.
    //   </p>
    //   <p className="mb-4">
    //     I'm interested in web technologies, especially in React, Next.js, and Node.js. I'm also interested in mobile technologies, especially in React Native.
    //   </p>
    //   <p className="mb-4">
    //     I'm currently learning Rust, GraphQL, and Docker. I'm also interested in DevOps and CI/CD.
    //   </p>
    //   <p className="mb-4">
    //     I'm a big fan of open source. I'm also a big fan of Linux and open source software.
    //   </p>
    //   <p className="mb-4">
    //     You can find me on{' '}
    //     <a href="https://twitter.com/muhammed_770" target="_blank" className="text-blue-600">
    //       Twitter
    //     </a>
    //     ,{' '}
    //     <a href="https://www.linkedin.com/in/muhammed770/" target="_blank" className="text-blue-600">
    //       LinkedIn
    //     </a>
    //     ,{' '}
    //     <a href="http://github.com/muhammed-770" target="_blank" className="text-blue-600">
    //       GitHub
    //     </a>
    //     ,{' '}
    //     <a href="https://www.instagram.com/muhammed_770/" target="_blank" className="text-blue-600">
    //       Instagram
    //     </a>
    //     .
    //   </p>
    //   <p className="mb-4">
    //     You can also send me an email at{' '}
    //     <a href="mailto:mail.muhammed2002@gmail.com" target="_blank" className="text-blue-600">
    //       mail
    //     </a>
    //     .
    //   </p>
    //   <a href="https://www.buymeacoffee.com/muhammed770" target="_blank">
    //     <Image
    //       src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
    //       alt="Buy Me A Coffee"
    //       width={217}
    //       height={60}
    //     />
    //   </a>
    // </main>
    <>
      <Flex height={`calc(100dvh - 59px)`} padding={"20px 0 20px 0px"} position={"relative"} flexDir={"column"} overflow={"hidden"} bgColor={"black"}>
        <Flex flexDir={{ base: "column", md: "column", lg: "row" }} justifyContent={"space-around"}>
          <Flex flexDir={"column"} alignContent={"center"} maxW={"857px"} padding={"0px 20px"}>

            <Heading fontSize={{ base: "60px", md: "85px", lg: "98px" }} fontWeight={"bold"} color={"white"} >
              Hi, I'm Muhammed
            </Heading>
            <Text fontSize={{ base: "24px", md: "36px", lg: "48px" }} color={"#A5A5A5"}>
              I'm a software engineer and a full-stack web developer.
            </Text>
          </Flex>
          <Box width={{ base: "100vw", lg: "800px" }} height={{ base: "500px" }}>

            <Spline scene="https://prod.spline.design/F7ieufFriYnqDEPf/scene.splinecode" />
          </Box>
        </Flex>
        <Flex padding={"50px"} display={{ base: "none", md: "flex" }} color={"white"} flexDir={"row-reverse"}>
         <Image src="/stars.png" width={70} height={70} alt={''} />

          <Text fontSize={{ base: "24px", md: "36px", lg: "48px" }} >
            see my latest projects
          </Text>
        </Flex>
        <Flex padding={"0px 20px"} display={{ base: "none", md: "flex" }} justifyContent={"space-between"} position={"absolute"} bottom={"5vh"} color={"#A5A5A5"}>
          <Text fontSize={{ base: "12px", md: "18px", lg: "24px" }} >
            You can find me on{' '}
            <a href="https://twitter.com/0xmuhammed770" target="_blank" className="text-blue-600">
              Twitter
            </a>
            ,{' '}
            <a href="https://www.linkedin.com/in/muhammed770/" target="_blank" className="text-blue-600">

              LinkedIn
            </a>
            ,{' '}
            You can also send me an email at{' '}
            <a href="mailto:mail.muhammed2002@gmail.com" target="_blank" className="text-blue-600">
              mail
            </a>
            .
          </Text>



        </Flex>
        {/* <Text userSelect={"none"} fontFamily={"Zen Tokyo Zoo"} height={{base:"400px",md:"550px"}} fontSize={{base:"400px",md:"550px"}} fontWeight={"light"} opacity={"40%"} color={"orange.500"} position={"absolute"} right={"-50px"} bottom={"0px"}>
          770
        </Text> */}

      </Flex>
    </>
  );
}
