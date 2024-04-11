import { HoverEffect } from "./ui/card-hover-effect";

export function ProjectShowcase() {
    return (
        <div className="mt-8">
            <h1 className="text-4xl font-mono">Projects</h1>
            <HoverEffect items={projects} />
        </div>
    )
}


export const projects =
    [
        {
            title: "TICKGATE EVENT TICKET MANAGEMENT SYSTEM (Mini project)",
            description: "Kerala, India Jan 2023 – current May 2023 ● Developed TickGate, an innovative event ticket management system as a university project in a team of 4 members. ● Leveraged blockchain technology and non-fungible tokens (NFTs) to create a secure and transparent ticketing solution. ● Streamlined the ticketing process by automating ticket creation, distribution, and management. ● Implemented QR code scanning functionality for easy and efficient entry verification at event venues.",
            link: ""
        },
        {
            title: "IPFY COPYRIGHT AND PATENT LICENSING PLATFORM",
            description: "IPFY | Devfolio Won Protocol labs TOP 5 ETHIndia, Bengaluru Dec 2022 ● Developed IPfy, a platform to list and license copyrighted and patented work. ● Provided a blockchain-based solution for recording IP on the platform, ensuring transparency and security. ● Allowed creators to register their work on IPfy for reliable evidence, serving as an alternative to government recognition.",
            link: ""
        },
        {
            title: "MESS MASTER, Food mess management",
            description: "MessMaster Dec 2022 Won Product-a-thon First prize ● Developed a mess marking and managing app with a team of 3. ● A complete web app for Food Mess managers saving tons of paperwork. ● It handles everything from registering new users to monthl",
            link: ""
        }
    ];

