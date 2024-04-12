import { HoverEffect } from "./ui/card-hover-effect";
import { projectType } from "@/types/type";
export function ProjectShowcase() {
    return (
        <div className="mt-8">
            <h1 className="text-4xl font-mono">Projects</h1>
            <HoverEffect items={projects} />
        </div>
    )
}


export const projects:projectType[] =
    [
        {
            title: "FLEET MANAGEMENT SYSTEM",
            description: `Fleet tracking and management system
            ● Commercial project for WELKIN EMBEDDED SOLUTIONS PRIVATE LIMITED.`,
            link: "",
            image: "/projects/welkin.png",
            tags: ["Next.js", "Typescript", "Django", "ChakraUI","MongoDB","NextAuth"]
        },
        {
            title: "JUSTICE PROTOCOL ",
            description: `Justice Protocol for Network ( & Nation) States `,
            link: "https://justice-protocol-prototype.vercel.app/",
            image:"/projects/justice-protocol.png",
            tags: ["Next.js", "Firebase","Typescript","tailwindCSS"]
        },
        {
            title: "TICKGATE EVENT TICKET MANAGEMENT SYSTEM",
            description: `TickGate | University project
            ● Decentralized NFT Token Gating System.`,
            link: "https://tickgate-weavedb.vercel.app/",
            image:"/projects/tickgate-app.png",
            tags: ["Solidity", "Typescript", "vercel","Next.js","WeaveDB"]
        },
        {
            title: "IPFY COPYRIGHT AND PATENT LICENSING PLATFORM",
            description: `IPFY | Devfolio
            Won Protocol labs TOP 5 ETHIndia, Bengaluru Dec 2022 
            ● Intellectual Property Licensing Platform: Advancing Innovation without Compromising Commerce.`,
            link: "https://devfolio.co/projects/ipfy-091a",
            image:"/projects/ipfy.png",
            tags: ["React.js", "Solidity", "Ether.js", "IPFS"]
        },
    ];

