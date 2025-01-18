import React, { type FC } from 'react'
import Image from '../assets/projects/ab.jpg'

type CardProps = {}

interface CardData {
  id: number;
  image: string;
  title: string;
  techstack: string;
  url?: string;
}

const Card: FC<CardData>= ({ image, title, techstack, url}) => {
  return (
    <div className='border-2 border-blue-500 p-4 rounded-md'>
        <img src={image} alt="image-err" />
        <div className="flex justify-between items-center">
          <p className='capitalize font-semibold text-[18px] text-gray-700'>{title}</p>
          <a href="" className='underline text-blue-500 text-[14px] font-bold'>{url}</a>
        </div>
        <p className='text-[14px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo voluptatem molestiae rem consectetur itaque possimus at pariatur in facilis odit ullam quaerat enim voluptate saepe, praesentium nam sit animi.</p>
    </div>
  )
}

export default Card