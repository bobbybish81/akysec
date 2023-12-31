import React from 'react'
import { motion } from 'framer-motion';
import '../styles/TransitionEffect.css';

const TransitionEffect = () => {
  return (
    <>
    <motion.div className='motion-div1'
    initial={{x:'100%', width:'100%'}}
    animate={{x:'0%', width:'0%'}}
    exit={{x:['0%', '100%'], width:['0%', '100%']}}
    transition={{duration:0.8, ease:'easeInOut'}}
    />
    <motion.div className='motion-div2' 
    initial={{x:'100%', width:'100%'}}
    animate={{x:'0%', width:'0%'}}
    transition={{delay:0.2, duration:0.8, ease:'easeInOut'}}
    />
    <motion.div className='motion-div3' 
    initial={{x:'100%', width:'100%'}}
    animate={{x:'0%', width:'0%'}}
    transition={{delay:0.4, duration:0.8, ease:'easeInOut'}}
    />
    </>
  )
}

export default TransitionEffect