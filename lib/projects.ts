
type ProjectType = {
    title: string
    description: string
    techStack: string[]
    image: string
    liveUrl: string
    githubUrl: string
}


export const projects: ProjectType[] = [
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
