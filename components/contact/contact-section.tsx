'use client'

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <motion.section 
      id="contact" 
      className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-8 relative overflow-hidden"
      initial="initial"
      animate="animate"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.div
            className="space-y-6"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
          >
            <p className="text-lg text-gray-300">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-emerald-400" />
              <span>ankit.raj@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-emerald-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-emerald-400" />
              <span>San Francisco, CA</span>
            </div>
          </motion.div>
          
          <motion.form
            className="space-y-4"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 bg-white/5 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 bg-white/5 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-2 bg-white/5 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors duration-200"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  )
}

