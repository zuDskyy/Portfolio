"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/Badge"

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-muted-foreground text-center max-w-3xl mx-auto"
      >
        I’m an experienced Full-Stack Developer with a passion for building performant, scalable, and elegant web
        applications. My work focuses on delivering high-quality code, solving complex problems, and optimizing
        applications for the best possible user experience.
      </motion.p>

      {/* Skills */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Next.js",
            "React.js",
            "TypeScript",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Tailwind CSS",
            "Shadcn UI",
            "AWS S3",
            "Cloudflare",
            "Swagger"
          ].map((skill) => (
            <Badge key={skill} variant="outline" className="text-sm border-muted-foreground">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Languages</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline">English — Fluent</Badge>
          <Badge variant="outline">Georgian — Native</Badge>
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Experience</h2>

        <div className="border rounded-lg p-5 space-y-2">
          <h3 className="text-xl font-semibold">Full Stack Developer — Auchistory Inc (2023-2025)</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Built performant Next.js apps with SSR, SEO optimization, VIN decoders, Cloudflare Turnstile protection, PostgreSQL optimizations, and Shadcn UI-based dashboards.
          </p>
        </div>

        <div className="border rounded-lg p-5 space-y-2">
          <h3 className="text-xl font-semibold">Backend Developer Intern — Tulix (2024)</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Focused on database performance optimization, Node.js backend structure, indexing strategies, caching, and efficient TypeORM queries.
          </p>
        </div>
      </div>
    </div>
  )
}
