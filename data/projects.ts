export type Project = {
    title: string,
    description: string,
    imgPath: string
    techs: string[],
    githubLink?: string,
    liveLink?: string,
    status: 'online' | 'building'
}

export const projects: Project[] = [
    {
        title: "Pokedex",
        description: "Pokedex.",
        imgPath: "/project-images/pokedex.png",
        techs: ["ReactJS", "NextJS","ExpressJS" , "Shadcn UI", "TailwindCSS", "MongoDB", ],
        githubLink: "",
        liveLink: "",
        status: 'online'
    },
    {
        title: "Martian Snaps",
        description: "Mars rover images.",
        imgPath: "/project-images/MartianSnaps.png",
        techs: ["ReactJS", ,"Shadcn UI",   "TailwindCSS", "Nasa API"],
        githubLink: "",
        liveLink: "",
        status: 'online'
    },
    {
        title: "Drowa",
        description: "excalidraw Clone.",
        imgPath: "/project-images/drowa.png",
        techs: ["Websocket", "NextJS","TypeScript" ,  "Supabase", ],
        githubLink: "",
        liveLink: "",
        status: 'building'
    }
   
]