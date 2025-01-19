import { useState } from 'react'
import Card from './components/Card'
import Image from './assets/pict.png'

import './index.css'
import { DataExperience } from './data/Experience'
import { TypeExperience } from './types/experience/type'
import { TypeSkills } from './types/skills/type'
import { DataSkills } from './data/Skills'
import Zig from './assets/zig.svg'
import { DataProjects } from './data/Projects'
import { TypeProject } from './types/projects/type'
import { motion } from 'motion/react'

function App() {
  const [dataExperience, setDataExperience] = useState<TypeExperience[] | null>(DataExperience)
  const [dataSkills, setDataSkills] = useState<TypeSkills[] | null>(DataSkills)
  const [dataProject, setDataProject] = useState<TypeProject[] | null>(DataProjects)

  return (
    <main className='bg-neutral-800'>
      <div className="container lg:mx-auto px-10">
        <section className='min-h-screen py-10 relative'>
          <div className="bg-gradient-to-r from-emerald-900 to-transparent to-70% w-fit p-4 rounded-md">
            <h1 className='text-5xl font-bold text-neutral-200'>HEL<br />LO.</h1>
          </div>

          <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:mt-20 mt-10">
            <div className="flex flex-col lg:gap-0 gap-0">
              <div className="flex items-center bg-emerald-300 w-fit px-3 py-1 gap-2 mb-5 rounded-md">
                <div className="rounded-full w-2 h-2 bg-emerald-800 border-none animate-ping"></div>
                <div className="text-emerald-800 font-medium text-sm">Open to works</div>
              </div>
              <div className="flex flex-col gap-5">
              <h1 className='text-6xl font-bold text-white'>Hello,</h1>
              <h1 className='text-6xl font-bold text-white'>I'm <span className='text-emerald-700'>Aditya Widyatmoko</span></h1>

              </div>
              <p className='text-neutral-500 text-xl pt-6'>A FrontEnd Developer based in Magelang, Indonesia</p>
              <motion.button whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} whileTap={{ scale: 0.9 }}  className='bg-neutral-700 w-40 rounded-lg text-neutral-400 hover:bg-emerald-700 hover:text-neutral-200 lg:text-sm uppercase py-4 mt-8 font-bold'>download cv</motion.button>
            </div>

            <div className='relative select-none overflow-hidden'>
              <img src={Image} alt="image-err" width={600} height={600} />
              <div className="absolute bg-gradient-to-r from-transparent to-emerald-900 text-white text-sm font-medium opacity-100 top-20 lg:top-32 right-1 lg:right-14 skew-x-12 skew-y-6 px-4 py-2 rounded-lg select-none">ReactJS Developer</div>
              <div className="absolute bg-gradient-to-l from-transparent to-emerald-900 text-white text-sm font-medium opacity-100 top-36 lg:top-56 left-2 lg:left-5 skew-x-12 skew-y-6 px-6 py-2 rounded-lg select-none">Web Developer</div>
              <div className="absolute h-56 bg-gradient-to-t from-neutral-800 from-20% to-transparent w-full bottom-0"></div>
            </div>
          </div>

        </section>
      </div>

      <section className='py-20'>
        <div className="container lg:mx-auto px-10">
          <div className="">
            <h1 className='text-neutral-300 lg:text-2xl font-bold uppercase'>Experience</h1>
          </div>
          
          <div className="mt-5 grid lg:grid-cols-2 gap-5">
            {dataExperience !== null && dataExperience.map((data, index) => { 

              return (
                <div className="border border-neutral-700 py-4 px-8 rounded-md shadow-md" key={index}>
                  <p className='text-neutral-400 bg-neutral-700 w-fit px-4 py-1 rounded-full mb-3 font-semibold text-sm'>{data.date}</p>
                  <h2 className='text-white lg:text-xl font-semibold'>{data.name}</h2>
                  <h2 className='text-emerald-500 font-medium text-[14px] pt-1'>{data.position}</h2>

                  <ul className='pt-2'>
                    { data.desc?.split('. ').map((arr) => (
                      <li className="flex gap-1">
                        <div className="text-neutral-400">-</div>
                        <div className='text-neutral-400 text-sm'>{arr}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      
      <section className='py-20'>
        <div className="container lg:mx-auto px-10">
          <div className="">
            <h1 className='text-neutral-300 lg:text-2xl font-bold uppercase'>Skills</h1>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="flex gap-4 flex-wrap lg:flex-row">
              {dataSkills !== null && dataSkills.map((data, index) => (
                <div className="p-2 flex items-center" key={index}>
                  <img src={data.image} alt="image-err"className='grayscale w-24 h-24 hover:grayscale-0 transition duration-700 hover:cursor-pointer'/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className='py-20'>
        <div className="container lg:mx-auto px-10">
          <div className="">
            <h1 className='text-neutral-300 lg:text-2xl font-bold uppercase'>Projects</h1>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 mt-5">
            {/* { dataExperience !== null && dataExperience.map((data, index) => (
              <div className="p-10 bg-neutral-900 shadow-lg rounded-lg" key={index}>
                <img src={data.image === undefined ? Bantu : data.image} alt="" className='rounded-lg' />
                <div className="mt-5">
                  <h2 className='text-neutral-100 text-xl font-semibold'>{data.name}</h2>
                  <p className='text-neutral-500 lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt possimus doloribus libero deleniti minima atque. At ab illo, pariatur distinctio maxime accusamus reiciendis eum ut accusantium rerum assumenda neque?</p>
                </div>
              </div>
            ))} */}

            { dataProject !== null && dataProject.map((data, index) => (
              <div className="p-10 border border-neutral-700 shadow-lg rounded-lg">
                <img src={data.images} alt="error-image" className='rounded-lg' />
                <div className="my-5 flex justify-between items-center">
                  <h2 className='text-neutral-100 text-xl font-semibold'>{data.projectName}</h2>
                  <a href='#' className="bg-blue-700 hover:bg-blue-800 hover:cursor-pointer rounded-md px-3 py-1.5">
                    <p className='text-white text-[14px]'>view project</p>
                  </a>
                </div>
                <p className='text-neutral-500 lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt possimus doloribus libero deleniti minima atque. At ab illo, pariatur distinctio maxime accusamus reiciendis eum ut accusantium rerum assumenda neque?</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <footer className='bg-neutral-900 py-4 flex items-center justify-center'>
        <p className='text-neutral-500'>Copyrights &copy; 2024 by <span className='text-violet-700 font-semibold'>Aditya Widyatmoko</span> All rights reserved</p>
      </footer>
    </main>
  )
}

export default App

