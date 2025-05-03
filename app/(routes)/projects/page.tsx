"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const projects = [
    {
        title: "UiKit Template ",
        description: "This is a UI kit template where you see the different components that you can use in your projects.",
        techStack: ["React", "Tailwindcss", "Redux",],
        image: "/uikit.png",
        liveUrl: "https://uikit-template.netlify.app",
        githubUrl: "https://github.com/zuDskyy/Portfolio/tree/uikit-templates"
    },
    {
        title: "Ziptv player ",
        description: "first m3u player with live tv streaming.",
        techStack: ["React", "Tailwindcss", "Redux", "MongoDB", "Node.js"],
        image: "/ziptv1.png",
        liveUrl: "https://ziptv.onrender.com/",
        githubUrl: "https://github.com/zuDskyy/m3u-server/tree/ziptv"
    },
    {
        title: "Ecommerce Brand Website ",
        description: "This is a commercial site where you can create and place your products in the store.",
        techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Node.js", "Tailwind CSS"],
        image: "/ecommerce_project.png",
        liveUrl: "https://zudskyy-brand.onrender.com/",
        githubUrl: "https://github.com/zuDskyy/nextjs-ecommerce-store"
    },
    {
        title: "Discord Clone Website",
        description: "This is a Discord clone website where you can create and place your products in the store.",
        techStack: ["Next.js", "Prisma", "React", "TypeScript", "Node.js", "PostgreSQL"],
        image: "/discord_project.png",
        liveUrl: "https://next-discord-psi.vercel.app/",
        githubUrl: "https://github.com/zuDskyy/next-discord"
    }
    ,
    {
        title: "CS2 Skin Website ",
        description: "This is a CS2 skin website where you can create custom skins and shows your collection.",
        techStack: ["React", "Tailwindcss"],
        image: "/cs2.png",
        liveUrl: "https://cs2-skin.netlify.app/",
        githubUrl: "https://github.com/zuDskyy/cs2-skin"
    },

]


export default function Projects() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center"
            >
                My Projects
            </motion.h1>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="border  rounded-lg overflow-hidden shadow-sm"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={400}
                            className="object-cover h-48 w-full"
                        />
                        <div className="p-5 space-y-3 ">
                            <h3 className="text-2xl font-semibold">{project.title}</h3>
                            <p className="text-muted-foreground">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="text-xs px-2 py-1 border rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex space-x-3 pt-2">
                                <Link href={project.liveUrl} target="_blank">
                                    <Button size="sm" className="bg-blue-500 text-white">Live Demo</Button>
                                </Link>
                                <Link href={project.githubUrl} target="_blank">
                                    <Button variant="outline" className="bottom-0" size="sm">Source Code</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}