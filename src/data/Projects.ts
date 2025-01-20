import { TypeProject } from "../types/projects/type";

import { Properly, SunrisePay, MoviesApp, BMICalculator, AYOBantu } from "../assets/projects";

export const DataProjects:TypeProject[]  = [
    {
        id: 1,
        projectName: 'Sunrise Pay',
        description: '-',
        images: SunrisePay,
        link: 'https://sunrisepay.vercel.app'
    },
    {
        id: 2,
        projectName: 'Properly',
        description: '-',
        images: Properly,
        link: '#'
    },
    {
        id: 3,
        projectName: 'Movie App',
        description: '-',
        images: MoviesApp,
        link: 'https://react-movie-tmdb.vercel.app'
    },
    {
        id: 4,
        projectName: 'BMI Calculator',
        description: '-',
        images: BMICalculator,
        link: 'https://bmi-calc-project.netlify.app'
    },
    {
        id: 5,
        projectName: 'Ayo Bantu Web',
        description: '-',
        images: AYOBantu,
        link: 'https://ayobantu-webs.vercel.app'
    },
]