import React from 'react'
import img1 from '../covers/portfolio/1.jpeg'
import img2 from '../covers/portfolio/2.jpeg'
import img3 from '../covers/portfolio/3.jpeg'
import img4 from '../covers/portfolio/4.jpeg'
import img5 from '../covers/portfolio/5.jpeg'
import img6 from '../covers/portfolio/6.jpeg'
import { AiFillHdd } from "react-icons/ai";
import { IoTimer } from 'react-icons/io5'
import { BiSolidLike } from "react-icons/bi";


export default function Portfolio() {

    const data = [img1, img2, img3, img4, img5, img6]

    return (
        <div className='w-full h-full pb-10'>
            <h1 className='text-center mt-10 mb-10 text-2xl'>Наши работы</h1>
            <div className='flex flex-wrap gap-5 justify-center items-center'>
                {
                    data.map(item => <img className='w-80 border border-[#FF7A50]' src={item} />)
                }
            </div>
            <h1 className='text-center mt-10 mb-10 text-2xl'>Наши  преимущества!</h1>
            <div className='flex flex-wrap justify-around items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <AiFillHdd size={60} />
                    <h1>производственная база</h1>
                    <p className='text-center'>Собственное производство <br /> У нас Вы не переплачиваете <br />за услуги посредников</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <IoTimer size={60} />
                    <h1>производственная база</h1>
                    <p className='text-center'>Собственное производство <br /> У нас Вы не переплачиваете <br />за услуги посредников</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <BiSolidLike size={60} />
                    <h1>производственная база</h1>
                    <p className='text-center'>Собственное производство <br /> У нас Вы не переплачиваете <br />за услуги посредников</p>
                </div>
            </div>
        </div>
    )
}
