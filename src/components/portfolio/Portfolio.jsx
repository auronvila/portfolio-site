import './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

export default function Portfolio() {
  const ref = useRef()
  const {scrollYProgress} = useScroll({target: ref, offset: ['end end', 'start start']});
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100
  })
  const items = [
    {
      id: 1,
      title: 'React Native Booking App',
      img: 'https://images.pexels.com/photos/19571065/pexels-photo-19571065/free-photo-of-palm-trees-against-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'hello world'
    },
    {
      id: 2,
      title: 'React Native Booking App',
      img: 'https://images.pexels.com/photos/19571065/pexels-photo-19571065/free-photo-of-palm-trees-against-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'hello world'
    },
    {
      id: 3,
      title: 'React Native Booking App',
      img: '',
      description: 'hello world'
    },
    {
      id: 4,
      title: 'React Native Booking App',
      img: '',
      description: 'hello world'
    }
  ]

  function Single({item}) {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target: ref, /*offset: ['start start', 'end start']*/});
    const y = useTransform(scrollYProgress, [0, 1], [-900, 300])

    return (
      <section >
        <div className={'container'}>
          <div className={'wrapper'}>
            <div ref={ref} className={'imageContainer'}>
              <img alt={''} src={item.img}/>
            </div>
            <motion.div style={{y}} className={'textContainer'}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button>Github Repo</button>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className={'portfolio'} ref={ref}>
      <div className={'progress'}>
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className={'progressBar'}></motion.div>
      </div>
      {items.map(item => (
        <Single key={item.id} item={item}/>
      ))}
    </div>
  )
}
