import './hero.scss'
import {motion} from "framer-motion";

export default function Hero() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    },

    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  }

  const sliderVariants = {
    initial: {
      x: 0
    },
    animate: {
      x: '-202%',
      transition: {
        repeat: Infinity,
        repeatType:'mirror',
        duration: 20,
      }
    }
  }


  return (
    <div className={'hero'}>
      <div className={'wrapper'}>
        <motion.div initial={'initial'} animate={'animate'} variants={textVariants} className={'textContainer'}>
          <motion.h2 variants={textVariants}>Auron Vila</motion.h2>
          <motion.h1 variants={textVariants}> Web Developer and UI designer</motion.h1>
          <motion.div variants={textVariants} className={'buttons'}>
            <motion.button variants={textVariants}>See the latest works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img animate={'scrollButton'} variants={textVariants} src={'scroll.png'}/>
        </motion.div>
      </div>
      <motion.div initial={'initial'} animate={'animate'} variants={sliderVariants} className={'slidingTextContainer'}>
        Writer Content Creator Influencer
      </motion.div>
      <div className={'imageContainer'}>
        <img src={'auron.png'} alt={'hero image'}/>
      </div>
    </div>
  )
}