import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className=" bg-transparent sticky  w-[100dvw] p-2">
            <div className="flex items-end justify-end">

                {/* <Button variant={"link"}>Home</Button> */}
                {/* <Button variant={"link"}>About</Button>
                <Button variant={"link"}>Contact</Button> */}
                {/* <ModeToggle /> */}
            </div>
        </nav>
    )
}