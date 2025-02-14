import { skills } from "@/constants"
import { useMediaQuery } from "@/hooks"
import React from "react"

interface Props {}

export const Skills: React.FC<Props> = () => {
  const isDesktop = useMediaQuery("(min-width: 1025px)")
  return (
    <section className="flex  my-2 mx-[var(--grid-margins)] h-[350px] uppercase items-center ">
      <div className="lg:span-w-8 span-w-2 sm:span-w-4 flex  min-h-24 flex-wrap gap-base-2">
        <div className="flex span-w-1  lg:span-w-4  items-top justify-end text">
          <h3 className="text-[#AFAFB6]"> My skills</h3>
        </div>
        <div className="span-w-1 md:span-w-3 lg:span-w-4 flex gap-base-2 flex-col sm:flex-row sm:span-w-2 ">
          {isDesktop && <div className="lg:span-w-1  " />}
          {skills.map((section, index) => (
            <div key={index} className="span-w-1 flex flex-col gap-2">
              <h3 className="text-[#AFAFB6] text-end">{section.title}</h3>
              <ul>
                {section.skills.map((skill, idx) => (
                  <li key={idx} className="text-end">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
