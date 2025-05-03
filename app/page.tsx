"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Code, User, BookOpen } from "lucide-react"
import { motion } from "framer-motion"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Navbar */}
     

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-6 py-16 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          {"Hi, I'm Zurab 🚀"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Full Stack Developer passionate about crafting clean, scalable, high-performance web applications using{" "}
          <span className="font-semibold text-foreground">Next.js</span>,{" "}
          <span className="font-semibold text-foreground">React</span>, and{" "}
          <span className="font-semibold text-foreground">Node.js</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <Link href="https://github.com/zuDskyy" target="_blank">
            <Button variant="outline" className="hover:bg-accent/30">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/zurab-dalakishvili-a7b996220/" target="_blank">
            <Button variant="outline" className="hover:bg-accent/30">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Button>
          </Link>
          <Link href="mailto:zudskyy@gmail.com">
            <Button variant="outline" className="hover:bg-accent/30">
              <Mail className="mr-2 h-5 w-5" /> Email
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <Link href="/projects">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:brightness-110">
              <Code className="mr-2" /> See My Projects
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline">
              <User className="mr-2" /> About Me
            </Button>
          </Link>
          <Link href="/cv">
            <Button size="lg" variant="outline">
              <BookOpen className="mr-2" /> View CV
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}

    </div>
  )
}

