import {motion} from "framer-motion";
import {useState} from "react";

export default function Text() {
    const [open, setOpen] = useState(false)


    const variants = {
        visible: {opacity: 1, y: 300, transition: {type: 'spring'}},
        hidden: {opacity: 0}
    }
    return (
        <div className={'course'}>
            <motion.div
                variants={variants}
                animate={open ? 'visible' : 'hidden'}
                className={'box'}></motion.div>
            <button onClick={() => setOpen((prevState) => !prevState)}>Click</button>
        </div>
    )
}