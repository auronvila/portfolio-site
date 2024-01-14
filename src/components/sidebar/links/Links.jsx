import {motion} from "framer-motion";

export default function Links() {
  const items = [
    'HomePage',
    "Services",
    "Portfolio",
    "About",
    "Contact",
  ]

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    }
  }

  return (
    <motion.div variants={variants} className={'links'}>{items.map((i, index) => (
      <motion.a whileTap={{scale: 0.9}} whileHover={{scale: 1.2}} variants={itemVariants} key={index}
                href={`#${i}`}>{i}</motion.a>
    ))}</motion.div>
  )
}