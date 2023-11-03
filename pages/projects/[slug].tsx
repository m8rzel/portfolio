import React from 'react'
import projects from "@/data/projects.js"
import { GetStaticProps } from 'next'
import { ProjectStructure } from '@/interfaces/Project'
import Image from 'next/image'

interface ProjectProps {
  project: ProjectStructure
}
export default function Project({ project }: ProjectProps) {
  console.log(project)
  
  return (
    <>
      <section className='w-screen h-[800px] justify-center flex flex-col gap-6 items-start relative -z-1'>
        <Image className='w-full h-full object-cover opacity-20 absolute -z-1' alt={project?.name} src={project.thumbnail} width={2000} height={1500} />
      </section>
      <section className='max-w-6xl xl:max-w-7xl px-8 mx-auto z-8'>
        <div data-scroll data-scroll-speed="0.2" data-scroll-position="top" className='-mt-[500px] md:-mt-48 mb-20'>
          <p className='px-2 py-1 bg-white/20 backdrop-blur-xl text-white w-max rounded-full text-sm lg:text-lg font-thin'>{project.type}</p>
          <h1 className='max-w-4xl text-white text-left font-extrabold text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'><span className='font-display font-bold text-primary-main italic'>{project.name.split(" ")[0]}</span>{project.name.replace(project.name.split(" ")[0], "")}</h1>
        </div>
        <div className="h-screen">
          <div data-scroll data-scroll-speed="0.1" className='flex flex-wrap gap-3 max-w-3xl'>
            {
              project?.technologies?.map((technology, index) => (
                <div className='uppercase rounded-full px-10 py-2 border-2 border-neutral-500 text-neutral-300 justify-center align-center flex text-xs md:text-sm'>{technology}</div>
              ))
            }
          </div>
        </div>

      </section>
    </>
  )
}


export const getStaticProps: GetStaticProps = async ({ params, previewData }) => {

  const project = projects.find((item) => item.slug === params?.slug)
  console.log("PROJECT: ", project)

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => `/projects/${project.slug}`),
    fallback: false,
  };
}