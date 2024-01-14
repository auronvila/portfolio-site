import ToggleButton from "./toggleButton/ToggleButton.jsx";
import Links from "./links/Links.jsx";
import './sidebar.scss'
import {useState} from "react";
import {motion} from "framer-motion";

export default function Sidebar() {
    const [open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: 'circle(1500px at 50px 50px)',
            transition: {
                type: 'spring',
                stiffness: 30
            }
        },
        closed: {
            clipPath: 'circle(30px at 50px 50px)',
            transition: {
                delay: 0.1,
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    }

    return (
        <motion.div className={'sidebar'} animate={open ? 'open' : 'closed'}>
            <motion.div className={'bg'} variants={variants}>
                <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    )
}