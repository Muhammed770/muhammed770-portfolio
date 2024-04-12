export type projectType = {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: tagsType[];
}

type tagsType = "vercel" | "Next.js" | "Solidity" | "Typescript" | "React.js" | "Ether.js" | "IPFS" | "Firebase" | "Lens Protocol" | "WeaveDB" | "tailwindCSS" | "MongoDB" | "ChakraUI" | "NextAuth" | "Django";