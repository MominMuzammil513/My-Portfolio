import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Experience() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="w-full mt-4">
          <p className="font-normal mb-8">
            <span className="pr-2 text-purple-400">Software Developer</span> | <span className="pl-2 text-muted-foreground"> April 01 - Present</span>
          </p>
          <div className="w-full">
            <ol className="list-disc pl-5 flex flex-wrap gap-y-2">
              <li>Designed and developed a Labor Planner web application using Nextjs, Threejs, React Three Fiber</li>
              <li>Integrated PostgreSQL database for efficient data management</li>
              <li>Enhanced editor performance for faster user experience</li>
              <li>Created user-friendly interface to improve usability</li>
              <li>Managed user dashboard with robust authentication and validation</li>
              <li>Added physics-based simulations to ensure lab models avoid collisions</li>
              <li>Enabled lab user contributions management and data synchronization</li>
              <li>Developed feature for sharing editable and non-editable lab links</li>
              <li>Implemented functionality for exporting labs to detailed PDF files</li>
              <li>Collaborated effectively with the team to deliver a well-optimized application</li>
            </ol>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
