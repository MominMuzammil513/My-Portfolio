
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

const Avatar = () => {
  return (
    <>
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 flex justify-end items-end"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-full max-w-md"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full opacity-75 blur-lg"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative rounded-full overflow-hidden shadow-2xl border-2 border-blue-300"
              style={{ width: '100%', paddingBottom: '100%' }}
            >
              <Image
                src="/m1r.png"
                alt="profile"
                fill
                objectFit="contain"
                className="rounded-full"
              />
              {/* <motion.div 
              animate={{ 
                background: [
                  "linear-gradient(0deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(60deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(20deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(80deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(40deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(100deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(160deg, #3b82f6, #8b5cf6)",
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-0.5 rounded-full blur opacity-75"
            ></motion.div> */}
            </motion.div>
          </motion.div>
        </motion.div>
    </>
  )
}

export default Avatar