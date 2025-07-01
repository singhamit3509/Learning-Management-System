import React from 'react';
import { cn } from "@/lib/utils";
import { CheckCheck } from "lucide-react";
import { Presentation } from "lucide-react";
import { UsersRound } from "lucide-react";
import { Star } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { BookCheck } from "lucide-react";
import { Clock10 } from "lucide-react";
import { Radio } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Video } from "lucide-react";
import { NotepadText } from "lucide-react";
import { FileQuestion } from "lucide-react";
import { PlayCircle } from "lucide-react";
import { SquarePlay } from "lucide-react";
import { Tv } from "lucide-react";
import { StickyNote } from "lucide-react";
import { BookOpen } from "lucide-react"; 
import { ArrowRight } from "lucide-react";
import CourseModuleList from './module/CourseModuleList';

const CourseCurriculam = ({course}) => {

     const totalDuration = course?.modules.reduce(function (acc, obj)
     { return  acc + obj.duration;}, 0); 

    return (
        <>
           <div className="flex gap-x-5 items-center justify-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
                  <span className="flex items-center gap-1.5">
                    <BookCheck className="w-4 h-4" />
                    {course?.modules?.length} Chapters
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock10 className="w-4 h-4" />
                    {(totalDuration/60).toPrecision()}+ Hours
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Radio className="w-4 h-4" />4 Live Class
                  </span>
                </div>

                
                <Accordion
                  defaultValue={["item-1", "item-2", "item-3"]}
                  type="multiple"
                  collapsible="true"
                  className="w-full"
                >
                 
                 {/*Course Module List in implemented here*/}

                 {
                  course?.modules && course.modules.map((module,index) => (
                   <CourseModuleList key={module.id || index} module={module}/> 
                  ))
                 }
                
                  
                </Accordion>
        </>
    );
};

export default CourseCurriculam;