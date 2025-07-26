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
        description: "Automated the process of job application tracking using ai.",
        imgPath: "/project-images/pokedex.png",
        techs: ["ReactJS", "NextJS","ExpressJS" , "Shadcn UI", "TailwindCSS", "Python", "MongoDB", "Oauth2"],
        githubLink: "",
        liveLink: "",
        status: 'building'
    },
    {
        title: "Martian Snaps",
        description: "A platform curating 1000+ leetcode problems with video and text solutions.",
        imgPath: "/project-images/MartianSnaps.png",
        techs: ["ReactJS", "NextJS","Shadcn UI", "MagicUI" , "TailwindCSS", "Web Scraping"],
        githubLink: "",
        liveLink: "",
        status: 'online'
    },
   
]