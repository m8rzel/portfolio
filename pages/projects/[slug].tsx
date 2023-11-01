import React from 'react'
import projects from "@/data/projects.json"
import { GetStaticProps } from 'next'
import { ProjectStructure } from '@/interfaces/Project'
import Image from 'next/image'

interface ProjectProps {
    project: ProjectStructure
}
export default function Project({project}: ProjectProps) {
    console.log(project)
  return (
    <>
    <section className='w-screen h-[800px] justify-center flex flex-col gap-6 items-center relative p-6'>
        <Image className='w-full h-full object-cover opacity-20 absolute -z-1' alt={project?.name} src={project.thumbnail} width={2000} height={1500}/>
        <p className='px-2 py-1 bg-white/20 backdrop-blur-xl text-white w-max rounded-full text-sm lg:text-lg font-thin'>{project.type}</p>
        <h1 className='max-w-4xl text-white text-center font-normal text-3xl md:text-4xl lg:text-5xl xl:text-6xl'><span className='font-display font-thin text-primary-main italic'>{project.name.split(" ")[0]}</span>{project.name.replace(project.name.split(" ")[0], "")}</h1>
    </section>
    </>
  )
}


export const getStaticProps: GetStaticProps = async({ params, previewData }) => {
  
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