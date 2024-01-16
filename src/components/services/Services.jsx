import './services.scss'
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

export default function Services() {
  const ref = useRef()
  const inView = useInView(ref, {
    margin: '-100px'
  })

  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div animate={inView && 'animate'} ref={ref} className={'services'} variants={variants} initial={'initial'}>
      <motion.div variants={variants} className={'textContainer'}><p>I focus test testes test</p>
        <hr/>
      </motion.div>
      <motion.div className={'titleContainer'} variants={variants}>
        <div className={'title'}>
          <img src={'people.webp'}/>
          <h1><motion.b whileHover={{color:'orange'}}>Unique</motion.b> Ideas</h1>
        </div>
        <div className={'title'}>
          <h1><motion.b whileHover={{color:'orange'}}>For Your</motion.b>
            Business.
          </h1>
          <button>WHAT I DO</button>
        </div>
      </motion.div>
      <motion.div className={'listContainer'} variants={variants}>
        <motion.div whileHover={{backgroundColor: 'lightgray', color: 'black', y: -10}} className={'box'}>
          <h2>Branding</h2>
          <p>awfhslkjafhlaushfsukahfkuwahsufkhakluwhawdawsdwasdwasdwadsafdlsuahfuwhalshfuwahusfhjkwa</p>
          <button>Go</button>
        </motion.div>
        <motion.div whileHover={{backgroundColor: 'lightgray', color: 'black', y: -10}} className={'box'}>
          <h2>Branding</h2>
          <p>awfhslkjafhlaushfsukahfkuwahsufkhakluwhfdlsuahfuwhalshfuwahusfhjkwa</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}