import React, { ReactNode, useEffect } from 'react'
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import Navigation from './Navigation';
import Image from 'next/image';

interface LayoutProps{
    children: ReactNode
}
export default function Layout({children}: LayoutProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.7
        }
      });
    })();
  }, []);
  return (
    <>
    {/* <Navigation/> */}
    <Link href="/" className="flex justify-center items-center absolute top-5 left-5 gap-3 pointer-element z-[999]">
        <div className='bg-white/10 rounded-full p-3'>
          <Image alt="jksdjs" src="/images/logo_wiskow.svg" width={30} height={30}/>
          {/* <Bars3CenterLeftIcon width={20} height={20} className='text-gray-200' /> */}
        </div>
        <p className='text-white font-display text-lg font-thin m-0 leading-[22px]'>Marcel<br />Wiskow.</p>
      </Link>
    <main>{children}</main>
    <motion.div className="progress" style={{ scaleX }} />
    </>
  )
}
