import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import projects from "@/data/projects.json"
import { ProjectStructure } from '@/interfaces/Project'

export default function Projects() {
  const [groupedProjects, setGroupedProjects] = useState<ProjectStructure[][]>(null!)

  useEffect(() => {
    const chunkSize = 5;

    let result = [];

    for (let i = 0; i < projects.length; i += chunkSize) {
      const chunk = projects.slice(i, i + chunkSize);
      result.push(chunk);
    }
    setGroupedProjects(result)
  }, [])
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row justify-between">
            <div className='flex flex-col gap-2 sm:gap-6 sm:flex-row'>
              <p className="relative z-1 mt-2 text-3xl leading-8 text-primary-main font-display font-thin italic">
                Works
              </p>
              <h2 className="text-4xl font-medium text-white sm:text-6xl">My beautiful<br />Projects</h2>
            </div>
          </div>
          {
            groupedProjects?.map((projects, index) => {
              return (
                <div className={`mx-auto ${index === 0 ? "mt-16 sm:mt-20" : "mt-6"} grid max-w-2xl grid-cols-1 gap-[24px] lg:mx-0 lg:max-w-none lg:grid-cols-3`}>
                  {/* special card */}
                  <ProjectCard className={index % 2 !== 0 ? "order-2" : ""} project={projects[0]} isFeature />
                  <div className='grid col-span-1 lg:col-span-2 grid-cols-1 gap-[24px] lg:grid-cols-2'>
                    {/* normal cards */}
                    {projects?.slice(1, 5).map((project, index) => (
                      <ProjectCard project={project} />
                    ))
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
