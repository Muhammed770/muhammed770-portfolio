
import Greeting from "@/components/greeting";
import { ProjectShowcase } from "@/components/project-showcase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import ProfileUI from "@/components/profile-ui";
import { BackgroundBeams } from "@/components/ui/background-beams";


export default function Home() {

  return (
    <div className="p-4 ">
      <div className="sm:flex items-center justify-around z-10">

        <Greeting />
        <div className="h-[100vh] justify-center items-center content-center mx-2">
          <ProfileUI />
        </div>
      </div>
      <ProjectShowcase />

      <BackgroundBeams className="z-[-10] "/>
    </div>
  );
}
