import { ProjectStructure } from '@/interfaces/Project'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'


interface ProjectCardProps {
    project: ProjectStructure;
    isFeature?: boolean;
    className?: string;
}
export default function ProjectCard({ project, isFeature, className }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${project?.slug}`}
            key={project.name}
            className={`${className} ${isFeature ? "h-[338px] lg:h-[700px]" : "h-[338px]"} relative isolate flex flex-col justify-between rounded-sm bg-gray-900 py-10 px-7 overflow-hidden pointer-element`}
        >
            <div>
                {project.thumbnail?.startsWith("http") ?
                    <img src={project.thumbnail} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover pointer-element" />
                    :
                    <Image width={800} height={800} src={project.thumbnail} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover pointer-element" />
                }
                <div className="absolute inset-0 -z-10 bg-neutral-900/70 pointer-element" />
                <div className='pointer-element'>
                    <p className='px-2 py-1 bg-white/30 backdrop-blur-xl text-white w-max rounded-full text-sm font-thin pointer-element'>{project.type}</p>
                    <h3 className="mt-3 text-xl font-semibold leading-6 text-white pointer-element">
                        <a href={project.link!} className='pointer-element'>
                            {project.name}
                        </a>
                    </h3>
                </div>
                <p className='pointer-element text-sm text-white opacity-80 line-clamp-3 truncate]'>After the avalanche, it took us a week to climb out. and i will strike down upon thee with great vengeance and furious anger those who too much shit this morning over this case to hand it over to your dumb ass. </p>
            </div>
        </Link>
    )
}
