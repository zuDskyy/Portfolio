"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center text-muted-foreground max-w-xl mx-auto"
      >
        Feel free to reach out for collaborations, questions, or just to connect!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault()
          alert("Message sent!")
        }}
      >
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" rows={5} required />

        <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          Send Message
        </Button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
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
