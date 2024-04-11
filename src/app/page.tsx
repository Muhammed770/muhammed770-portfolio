
import Greeting from "@/components/greeting";
import { ProjectShowcase } from "@/components/project-showcase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";


export default function Home() {

  return (
    <div className="p-8 ">
      <Greeting />
      <ProjectShowcase/>
    </div>
  );
}
