import React from 'react'
import { GoBook } from "react-icons/go";
import { IoBookSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { TiBookmark } from "react-icons/ti"
import { PiNoteBlank } from "react-icons/pi";

export default function Calculate() {
    return (
        <div>
            <h1 className='text-xl font-bold text-center py-5'>Тип переплета</h1>
            <div className='flex w-full px-10 justify-center lg:flex-row flex-col gap-20 border p-10'>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <GoBook size={40} />
                    <h1>Мягкий переплет</h1>
                    <input type="radio" />
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <IoBookSharp size={40} />
                    <h1>Твердый переплет</h1>
                    <input type="radio" />
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <TiBookmark size={40} />
                    <h1>скобка</h1>
                    <input type="radio" />
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <MdMenuBook size={40} />
                    <h1>Твердый клеевый</h1>
                    <input type="radio" />
                </div>
            </div>
            <h1 className='text-xl font-bold text-center py-5'>Форма изделия</h1>
            <div className='flex w-full px-10 justify-center gap-20 border lg:flex-row flex-col p-10'>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <PiNoteBlank size={40} />
                    <h1>A4</h1>
                    <input type="radio" />
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <PiNoteBlank size={40} />
                    <h1>A5</h1>
                    <input type="radio" />
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <PiNoteBlank size={40} />
                    <h1>A6</h1>
                    <input type="radio" />
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <PiNoteBlank size={40} />
                    <h1>свой размер</h1>
                    <input type="radio" />
                </div>
            </div>
            <h1 className='text-xl font-bold text-center py-5'>Отправить заказ</h1>
            <div className='flex justify-start w-[500px] mx-auto gap-5 flex-col items-center mb-20'>
                <div className='flex items-center justify-between w-full gap-5'>
                    <span>Введите имя</span>
                    <input type="text" className='px-6 py-1 border border-[#FF7A50]' />
                </div>
                <div className='flex items-center justify-between w-full gap-5'>
                    <span>Контакты (телефон, эл.почта)</span>
                    <input type="text" className='px-6 py-1 border border-[#FF7A50]' />
                </div>
                <button className='text-center bg-[#FF7A50] w-full py-3 text-white'>Отправить</button>
            </div>
        </div>
    )
}
