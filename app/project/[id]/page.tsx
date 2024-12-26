
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MagicButton from "@/components/ui/magic-button";

const page = ({ params: { id } }: { params: { id: string } }) => {
  const projectItem = projects.find((project) => project.id === id); // Use find instead of filter

  // Handle case where project is not found
  if (!projectItem) {
    return (
      <main className="w-screen border-2 border-red-300 min-h-screen mt-16">
        <h1>Project not found</h1>
      </main>
    );
  }

  // Determine status color and text dynamically
  const statusStyles = {
    Ready: "bg-green-400",
    Archived: "bg-red-400",
    Working: "bg-blue-400",
  };

  return (
    <main className="w-screen border-2 border-red-300 min-h-screen pt-16">
      <div className="rounded-md max-w-6xl w-full mx-auto flex justify-start items-start flex-col lg:flex-row pt-5">
        <Link href={"#project"}>
          <FaArrowLeftLong size={25} />
        </Link>
      </div>
      <div className="rounded-md max-w-6xl w-full mx-auto flex justify-between items-start flex-col lg:flex-row py-5">
        <h1 className="text-3xl font-bold">{projectItem.title}</h1>
        <div className="flex justify-center items-center gap-x-4">
          <Link href={projectItem.gitHub}>
            <MagicButton
              title="Repository"
              icon={<LuSend className="h-4 w-4" />}
              position="right"
              otherClasses="bg-blue-500 text-white font-bold py-2 px-3 hover:bg-purple-950/20 rounded-[7px]"
              mainClassName="p-[1px] rounded-[7px]"
            />
          </Link>
          <Link href={projectItem.link}>
            <MagicButton
              title="Live link"
              icon={<LuSend className="h-4 w-4" />}
              position="right"
              otherClasses="bg-blue-500 text-white font-bold py-2 px-3 hover:bg-purple-950/20 rounded-[7px]"
              mainClassName="p-[1px] rounded-[7px]"
            />
          </Link>
        </div>
      </div>

      <div className="rounded-md max-w-6xl w-full mx-auto border-2 flex justify-between items-start flex-col lg:flex-row lg:gap-x-10 p-4 gap-y-3">
        <div className="max-w-sm h-full">
          <Card className="h-full w-full rounded-md">
            <Image
              src={projectItem.image}
              alt={projectItem.title}
              width={500}
              height={200}
              className="aspect-video"
            />
            <CardTitle className="w-full flex justify-start items-center px-3 py-4 border-t text-muted-foreground">
              Technologies Used
            </CardTitle>
            <CardContent className="flex w-full px-3 pb-4 justify-start items-center gap-x-1">
              {projectItem.technologies.map((item) => (
                <div className="relative group" key={item.name}>
                  <Image
                    height={100}
                    width={100}
                    src={item.image}
                    alt={item.name}
                    className="object-cover !m-0 !p-0 object-top rounded-md h-9 w-9 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="w-full h-full flex justify-center items-start gap-4 flex-col">
          <Badge className="px-2 py-1 bg-purple-900 text-sm text-white font-medium">
            {projectItem.category}
          </Badge>
          <p className="w-full font-medium text-muted-foreground">
            {projectItem.description} Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quaerat repellat mollitia laudantium quia!
            Quisquam possimus earum temporibu
          </p>
          <div className="w-full h-full pt-2 flex flex-col justify-center items-start gap-y-2">
            <h1 className="text-sm text-muted-foreground font-bold">Status</h1>
            <div className="flex justify-start items-center gap-x-4 w-full">
              <div
                className={`h-3 w-3 rounded-full ${
                  statusStyles[projectItem.status]
                }`}
              />
              <h1 className="font-semibold ml-2">{projectItem.status}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md border-2 max-w-6xl w-full mx-auto flex justify-start items-start flex-col lg:flex-row p-4 mt-4">
        <div className="w-full h-full flex flex-col justify-center items-start gap-y-2">
          <h1 className="text-muted-foreground font-bold">Features</h1>
          <p>Wipe</p>
        </div>
      </div>
    </main>
  );
};

export default page;
