"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center"
      >
        My CV
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-muted-foreground text-center max-w-2xl mx-auto"
      >
        View and download my updated CV to check out my work experience, skills, and tech stack.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex justify-center"
      >
        <a href="/zurab-dalakishvili-cv.pdf" download="zurab-dalakishvili-cv.pdf">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:brightness-110">
            <Download className="mr-2" /> Download CV
          </Button>
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex justify-center space-x-4 pt-4"
      >
        <Link href="https://github.com/zuDskyy" target="_blank">
          <Button variant="outline">
            <Github className="mr-2 h-5 w-5" /> GitHub
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/zurab-dalakishvili-a7b996220/" target="_blank">
          <Button variant="outline">
            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
          </Button>
        </Link>
        <Link href="mailto:zudskyy@gmail.com">
          <Button variant="outline">
            <Mail className="mr-2 h-5 w-5" /> Email
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
