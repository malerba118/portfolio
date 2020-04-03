import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Fullscreen from '../Fullscreen'
import styles from './GridList.module.css'

const spring = {
  type: "spring",
  damping: 40,
  stiffness: 750
};

const GridList = ({ children }) => {
  return (
    <div className={styles.grid}>
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  );
};

const GridListItem = ({ children, style, className, itemId }) => {
  const [count, setCount] = React.useState(0)
  return (
    <motion.div
      style={{height: 350, ...style}}
      className={className}
      key={itemId}
      layoutTransition={spring}
      initial={{
        opacity: 0
      }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0
      }}
      onAnimationComplete={() => setCount(p => p+1)}
    >
      <Fullscreen className={styles.fullscreen} key={count}>
        {children}
      </Fullscreen>
    </motion.div>
  );
};

GridList.Item = GridListItem

export default GridList
