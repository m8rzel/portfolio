import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { CubeIcon, CommandLineIcon, CodeBracketSquareIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { start } from "@/animations/index.js";
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import Head from 'next/head';
import projects from "@/data/projects.js"
import { motion } from 'framer-motion';
import useDeviceType from "@/hooks/useDeviceType"
const categories = [
  {
    title: "Product<br/>Design",
    projects: 20,
    icon: CubeIcon
  },
  {
    title: "Front-End<br/>Development",
    projects: 5,
    icon: CodeBracketSquareIcon
  },
  {
    title: "Back-End<br/>Development",
    projects: 10,
    icon: CommandLineIcon
  }
]


const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    thumbnail:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      thumbnail:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    thumbnail:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      thumbnail:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    thumbnail:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      thumbnail:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    thumbnail:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      thumbnail:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    thumbnail:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      thumbnail:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

  },
  // More posts...
]
export default function Home() {
  const deviceType = useDeviceType();
  useEffect(() => {
    // if(typeof window !== 'undefined'){
    start();
    // }
  }, []);
  return (
    <>
      <Head>
        <title>Marcel Wiskow | Portfolio</title>
      </Head>
      <>
        {/* Hero */}
        <section className='relative isolate overflow-hidde flex justify-center items-center h-max pt-32 pb-16 '>
          <div className="hero-content mx-auto flex justify-center flex-col w-max items-center gap-4">
            <div className='rounded-t-[50%] overflow-hidden border-b-0 border-4 border-white'>
              <Image src="/images/marcel1-1.jpg" alt="Avatar" width={250} height={300} />
            </div>
            <h1 className="font-body pt-4 text-4xl font-normal text-white sm:text-6xl text-center -mt-12 shadow-2xl bg-gradient-to-t from-black to-black/0 from-80%">
              Hey, I'ts <span className='font-display italic text-primary-main '>Marcel Wiskow.</span><br />Fullstack Developer
            </h1>
            <p className='m-0 font-body text-white font-thin text-center'>I've been working as a full stack <span className='font-medium'>web developer</span> for 6 years.<br /> I am based on <span className='font-medium'>Germany.</span></p>
            <Link className='bg-primary-main px-16 py-4 text-xs hover:scale-[1.05] transition-all pointer-element' href={"#contact"}>Contact me</Link>
          </div>
        </section>
        <section data-scroll data-scroll-speed="0.1" className="relative grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-6 items-center mx-auto sm:py-12 lg:py-24 px-8 max-w-3xl">
          <svg data-scroll data-scroll-speed="-0.04" className='absolute top-0 bottom-0 m-auto w-[120%] -left-[10%] right-0 lg:bottom-20' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400"><path className="hidden" id="hero-line" d="M0.8968609571456909,351.56951904296875C38.39760791023572,326.81316426595055,150.21823401411376,199.26756703694662,230.49327087402344,200C310.7683077339331,200.73243296305338,400.5291407775879,363.08519332885743,492.3766784667969,356.0538024902344C584.2242161560058,349.0224116516113,743.7518864949544,189.4708469136556,792.8251342773438,156.95066833496094" fill="none" stroke-width="14" stroke="#D2DE32" stroke-linecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1000"><stop stopColor="hsl(37, 99%, 67%)" offset="0"></stop><stop stopColor="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
          {
            categories.map((item, index) => (
              <div className='w-full hover:scale-105 transition-all h-[296px] relative flex justify-end items-start flex-col gap-3 backdrop-blur-xl bg-white/10 p-6 cursor-pointer rounded-sm pointer-element'>
                <item.icon width={28} height={28} className='text-gray-200 absolute top-6 left-6' />
                <div className='m-0 text-white text-3xl text-left' dangerouslySetInnerHTML={{ __html: item.title }} />
                <span className='text-gray-200 text-xs font-thin text-left'>{item.projects} Projects</span>
              </div>
            ))
          }
        </section>
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div data-scroll data-scroll-speed="0.08" className="flex flex-col gap-6 sm:flex-row justify-between">
              <div className='flex flex-col gap-2 sm:gap-6 sm:flex-row'>
                <p  className="relative z-1 mt-2 text-3xl leading-8 text-primary-main font-display font-thin italic">
                  Works
                </p>
                <h2 className="text-4xl font-medium text-white sm:text-6xl">My beautiful<br />Projects</h2>
              </div>
              <Link href={"/projects"} className='border-[1px] border-white text-white px-8 py-4 text-sm hover:scale-[1.05] hover:text-primary-main hover:border-primary-main transition-all h-max flex flex-row gap-2 group pointer-element'>See All <ArrowLongRightIcon className="group-hover:translate-x-2 transition-all" width={20} /></Link>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-[24px] sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* special card */}
              <ProjectCard project={projects[0]} isFeature />
              <div className='grid col-span-1 lg:col-span-2 grid-cols-1 gap-[24px] lg:grid-cols-2'>
                {/* normal cards */}
                {projects.slice(1, 5).map((project, index) => (
                  <ProjectCard project={project} />
                ))
                }
              </div>
            </div>
          </div>
        </section>
        {/* <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row">
            <p className="relative z-1 mt-2 text-3xl leading-8 text-white font-display font-thin italic">
              Works
            </p>
            <h2 className="text-4xl font-medium text-white sm:text-6xl">My beautiful<br />Projects</h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-16 sm:mt-20 lg:mx-0 lg:max-w-3xl lg:grid-cols-2">
            {projects.map((post, index) => (
              <article
                key={index}
                className="relative flex flex-col justify-end overflow-hidden group rounded-sm gap-5 hover:scale-105 transition-all"
              >
                <div className='h-[420px] relative'>
                  <img src={post.thumbnail} alt="" className="inset-0 -z-10 h-full w-full object-cover grayscale opacity-30 transition-all group-hover:grayscale-0 group-hover:opacity-70" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-900 via-slate-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-slate-900/10" />

                </div>
                <div className='text-center text-white'>
                  <time dateTime={post.type} className='text-center font-display font-thin'>
                    {post.type}
                  </time>
                  <h3 className="text-lg font-medium leading-6 text-white">
                    <a href={post.name}>
                      <span className="absolute inset-0" />
                      {post.name}
                    </a>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}
        {/* contact section */}
        <section className="relative" id="contact">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <div className='flex flex-col gap-2'>
                  <p className="relative z-1 mt-2 text-3xl leading-8 text-primary-main font-display font-thin italic">
                    Contact
                  </p>
                  <h2 className="text-4xl font-medium text-white sm:text-6xl">Got a Project?</h2>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
                  integer elementum id sem. Arcu sed malesuada et magna.
                </p>
              </div>
            </div>
            <form action="https://submit-form.com/vZOLaOBn" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 relative">
              <svg className='absolute rotate-[-20deg] bottom-0 top-0 m-auto w-[150%] -left-20' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400"><path id="contact-line" d="M0.8968609571456909,351.56951904296875C38.39760791023572,326.81316426595055,150.21823401411376,199.26756703694662,230.49327087402344,200C310.7683077339331,200.73243296305338,400.5291407775879,363.08519332885743,492.3766784667969,356.0538024902344C584.2242161560058,349.0224116516113,743.7518864949544,189.4708469136556,792.8251342773438,156.95066833496094" fill="none" stroke-width="20" stroke="#D2DE32" stroke-linecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1000"><stop stopColor="hsl(37, 99%, 67%)" offset="0"></stop><stop stopColor="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg backdrop-blur-xl bg-white/10 p-10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white rounded-sm">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        required
                        className="outline-none block w-full rounded-sm border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-main sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        required
                        className="outline-none block w-full rounded-sm border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-main sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        className="outline-none block w-full rounded-sm border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-main sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-white">
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        required
                        className="outline-none block w-full rounded-sm border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-main sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        className="outline-none block w-full rounded-sm border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-main sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className='bg-primary-main px-16 py-4 text-xs hover:scale-[1.05] transition-all pointer-element'
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </>
    </>
  )
}
