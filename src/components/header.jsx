import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { BsFillBackspaceFill } from "react-icons/bs";

export default function Header() {

    const [res, setRes] = useState("translate-x-[-100%]")
    return (
        <div className="flex shadow-md font-semibold w-full fixed bg-[#fafafa] z-50 justify-between items-center h-[80px] lg:px-20 px-5">
            <div className="text-[18px]">Типография</div>
            <div className={`
            transition duration-500 lg:translate-x-0
            ${res}
         pl-5 pr-[200px] py-5 pt-10 lg:pl-0 lg:pr-0 lg:py-0 lg:h-20 h-[100vh]
            lg:static fixed top-0 left-0 z-50 lg:bg-[#fafafa] bg-white lg:shadow-none shadow-2xl flex lg:flex-row flex-col gap-10 lg:justify-evenly lg:items-center`}
            >
                <BsFillBackspaceFill color="#FF7A50" className="lg:hidden absolute right-5" size={30} onClick={() => setRes("translate-x-[-100%]")} />
                <NavLink className='hover:text-[#FF7A50] transition-all'>Главная</NavLink>
                <NavLink className='hover:text-[#FF7A50] transition-all'>О нас</NavLink>
                <NavLink className='hover:text-[#FF7A50] transition-all'>Портфолио</NavLink>
                <NavLink className='hover:text-[#FF7A50] transition-all'>Калькулятор</NavLink>
                <NavLink className='hover:text-[#FF7A50] transition-all'>Контакты</NavLink>
                <button className="bg-[#FF7A50] px-10 py-2 hover:bg-[#a84527] text-sm transition-all text-white rounded-md">Заказать</button>
            </div>
            <div className="lg:hidden bg-[#FF7A50] p-2 rounded-sm text-white">
                <GiHamburgerMenu onClick={() => setRes("translate-x-none")} />
            </div>
        </div>
    )
}
