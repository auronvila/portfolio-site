import './navbar.scss'
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar.jsx";

export default function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <Sidebar/>
        <div className='wrapper'>
          <motion.span
            transition={{duration: 0.5}}
            animate={{opacity: 1, scale: 1}}
            initial={{opacity: 0, scale: 0.5}}>
            {/*Auron Vila*/}
          </motion.span>
          <div className={'social'}>
            <motion.a
              initial={{opacity: 0, x: 100}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.2}}
              href={'https://www.linkedin.com/in/auron-vila/'}>
              <img alt={'linkedin'} src={'linkedin.webp'}/>
            </motion.a>
            <motion.a
              initial={{opacity: 0, x: 150}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.3, duration: 0.3}}
              href={'https://github.com/auronvila'}>
              <img alt={'instagram'} src={'github.png'}/>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}