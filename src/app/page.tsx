
import Greeting from "@/components/greeting";
import { ProjectShowcase } from "@/components/project-showcase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import ProfileUI from "@/components/profile-ui";


export default function Home() {

  return (
    <div className="p-4 ">
      <div className="md:flex items-center justify-around">

        <Greeting />
        <div className="sm:h-[100vh] justify-center items-center content-center mx-2">
          <ProfileUI />
        </div>
      </div>
      <ProjectShowcase />
    </div>
  );
}
