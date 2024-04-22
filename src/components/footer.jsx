import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='w-full lg:h-50 bg-[#FF7A50]'>
            <div className='flex justify-center flex-col lg:flex-row items-center gap-20 lg:h-40 text-white'>
                <h1>Типография</h1>
                <ul>
                    <li><NavLink>главная</NavLink></li>
                    <li><NavLink>портфолио</NavLink></li>
                    <li><NavLink>калькулятор</NavLink></li>
                    <li><NavLink>контакты</NavLink></li>
                </ul>
                <ul>
                    <li>Контакты</li>
                    <li>Watsapp: 0500-500-500</li>
                    <li>telegram: 0500-500-500</li>
                </ul>
            </div>
            <h1 className='text-center text-sm'>город Бишкек, кыргызстан</h1>
        </div>
    )
}
