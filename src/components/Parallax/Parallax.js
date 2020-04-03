import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const ParallaxContext = React.createContext()

const Parallax = ({children}) => {
  const obj = useViewportScroll()

  return (
    <ParallaxContext.Provider value={obj}>
      {children}
    </ParallaxContext.Provider>
  )
}

const ParallaxLayer = ({rate = 1, children, className}) => {
  const { scrollYProgress } = React.useContext(ParallaxContext)
  const y = useTransform(scrollYProgress, value => value * rate * 500)
  return (
    <motion.div className={className} style={{y}}>
      {children}
    </motion.div>
  )
}

Parallax.Layer = ParallaxLayer

export default Parallax