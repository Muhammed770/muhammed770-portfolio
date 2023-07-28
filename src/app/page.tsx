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
      <Flex height={"100dvh"} padding={"20px 0 20px 20px"} position={"relative"} overflow={"hidden"} bgColor={"black"}>

        <Flex flexDir={"column"} alignContent={"center"} width={{ lg: "857px" }} maxW={"90wv"} >

          <Heading fontSize={{ base: "68px", md: "85px", lg: "98px" }} fontWeight={"bold"} color={"white"} >
            Hi, I'm Muhammed
          </Heading>
          <Text fontSize={{ base: "24px", md: "36px", lg: "48px" }} color={"#A5A5A5"}>
            I'm a software engineer and a full-stack web developer.
          </Text>
        </Flex>
        <Box width={"800px"} display={{md:"none",lg:"flex"}}>

          <Spline scene="https://prod.spline.design/F7ieufFriYnqDEPf/scene.splinecode" />
        </Box>

        {/* <Text userSelect={"none"} fontFamily={"Zen Tokyo Zoo"} height={{base:"400px",md:"550px"}} fontSize={{base:"400px",md:"550px"}} fontWeight={"light"} opacity={"40%"} color={"orange.500"} position={"absolute"} right={"-50px"} bottom={"0px"}>
          770
        </Text> */}

      </Flex>
    </>
  );
}
