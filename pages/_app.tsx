import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useRef, useState } from 'react'
import { start } from "@/animations/transition"
import { useRouter } from 'next/router'
import Layout from '@/components/layout/Layout'
import pages from "@/data/pages.json"
import { motion, AnimatePresence, animate } from 'framer-motion';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageName, setPageName] = useState<string>("Home");
  useEffect(() => {
    start()
    document.addEventListener("mousemove", (e) => {
      const cursor = document.getElementById("custom-cursor");
      //@ts-ignore
      cursor.style.left = e.clientX + "px";
      //@ts-ignore
      cursor.style.top = e.clientY + "px";

      const target = e.target;
      //@ts-ignore
      if (target.classList.contains("pointer-element")) {
        //@ts-ignore
        cursor?.classList.add("animate")
      } else {
        cursor?.classList.remove("animate")
      }
    });
  }, [])

  useEffect(() => {
    window.addEventListener("click", (e) => {
      //@ts-ignore
      if (e.target.tagName.toLowerCase() === "a") {
        //@ts-ignore
        const href = e.target.getAttribute("href")
        setPageName(pages.find(item => item.url === href)?.name!)
      } else {
        setPageName(null!)
      }
    })
  }, [])



  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Layout>
          <div className="noise"></div>
          <div id='custom-cursor'></div>
          <Component {...pageProps} />
          <motion.div
            className='slide-in'
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}

          >
            <p className='text-6xl md:text-8xl text-black font-bold'>{pageName}</p>
          </motion.div>
          <motion.div
            className='slide-out'
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}

          >
          </motion.div>
        </Layout>
      </motion.div>
    </AnimatePresence>
  )
}
