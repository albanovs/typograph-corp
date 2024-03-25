import React from 'react'
import Header from '../components/header'
import section from '../covers/banner7.jpg'
import vizitka from '../covers/vizitka.png'
import menu from '../covers/menu.jpg'
import listovki from '../covers/listovki.jpg'
import blocknot from '../covers/blocknot.png'
import kalendar from '../covers/kalendar.png'
import biri from '../covers/biri.png'
import otkrytki from '../covers/otkrytki.png'
import sertificat from '../covers/sertificat.jpg'
import section2 from '../covers/delivery.png'

export default function HomePage() {
    return (
        <div>
            <Header />
            <div className='h-[100px] w-full'>

            </div>
            <div className='w-[100%] h-[600px] lg:px-20 mx-auto px-4 pt-0 lg:pt-0 flex lg:flex-row flex-col-reverse justify-between items-center'>
                <div>
                    <h1> <span className='lg:text-[50px] text-[30px] font-semibold'>Приветствуем <span className='text-[#FF7A50]'>вас</span>
                    </span> <br /> <span className='text-[30px] font-semibold'>в мире <span className='text-[#FF7A50]'>высококачественной</span> типографии</span> <br />
                        где каждая буква, каждый образ и каждая
                        идея превращаются в живое произведение искусства.</h1>
                    <div className='flex gap-5 mt-5'>
                        <button className='lg:px-6 lg:py-5 px-4 py-3 transition-all rounded-md lg:text-sm text-[10px]  bg-[#FF7A50] hover:bg-[#a84527] text-white'>Получить бесплатную консультацию</button>
                        <button className='lg:px-6 lg:py-5 px-4 py-3 transition-all rounded-md lg:text-sm text-[10px]  bg-[#FF7A50] hover:bg-[#a84527] text-white'>Заказать</button>
                    </div>
                </div>
                <div>
                    <img className='w-[1000px] rounded-md radi' src={section} alt="" />
                </div>
            </div>
            <div className='bg-[#FF7A50] w-full lg:h-[650px] h-[850px] px-5 mt-20  text-white'>
                <h1 className='lg:text-[50px] text-[30px] text-center mt-10'><span>Наши     </span>преимущества</h1>
                <div className='flex justify-between items-center lg:flex-row-reverse flex-col-reverse lg:px-20'>
                    <div>
                        <h1> <span className='lg:text-[50px] text-[30px] font-semibold'>Довольные <span className='text-[#873a23]'>клиенты</span>
                        </span> <br /> <span className='text-[30px] font-semibold'>и их восторженные  <span className='text-[#FF7A50]'>отзывы.</span> <br /></span> <br />
                            Мы воплощаем ваши идеи в реальность <br /> с любовью и профессионализмом.
                            Надежность и прозрачность в сотрудничестве.</h1>
                        <div>Высокое качество и внимание к деталям. <br />
                            Гибкость в выполнении заказов и быстрые сроки. <br />
                            Персональный подход к каждому клиенту.</div>
                    </div>
                    <div><img className='w-[500px]' src={section2} alt="" /></div>
                </div>
            </div>
            <div>
                <h1 className='text-[50px] text-[#FF7A50] text-center mt-20'><span className='text-black'>Наши   </span>услуги</h1>
                <div className='flex gap-10 mt-10 mb-10 flex-wrap justify-center items-center'>
                    <div className='cursor-pointer hover:scale-90 transition-all relative w-[300px] h-[250px] rounded-sm bg-white flex flex-col items-center justify-center'>
                        <img className='w-[150px] h-[150px]' src={vizitka} alt="" />
                        <h1 className="font-bold text-[18px] pt-1">Визитки</h1>
                        <span className="text-[#a1a1a1]">от 20 сом шт</span>
                        <button className='lg:px-6 absolute bottom-[-20px] lg:py-2 px-4 py-3 transition-all rounded-md lg:text-sm text-[10px]  bg-[#FF7A50] hover:bg-[#a84527] text-white'>Заказать</button>
                    </div>
                    <div className='cursor-pointer hover:scale-90 transition-all relative w-[300px] h-[250px] rounded-sm bg-white flex flex-col items-center justify-center'>
                        <img className='w-[150px] h-[150px]' src={blocknot} alt="" />
                        <h1 className="font-bold text-[18px] pt-1">Блокноты</h1>
                        <span className="text-[#a1a1a1]">от 20 сом шт</span>
                        <button className='lg:px-6 absolute bottom-[-20px] lg:py-2 px-4 py-3 transition-all rounded-md lg:text-sm text-[10px]  bg-[#FF7A50] hover:bg-[#a84527] text-white'>Заказать</button>
                    </div>
                    <div className='cursor-pointer hover:scale-90 transition-all relative w-[300px] h-[250px] rounded-sm bg-white flex flex-col items-center justify-center'>
                        <img className='w-[150px] h-[150px]' src={listovki} alt="" />
                        <h1 className="font-bold text-[18px] pt-1">Листовки</h1>
                        <span className="text-[#a1a1a1]">от 20 сом шт</span>
                        <button className='lg:px-6 absolute bottom-[-20px] lg:py-2 px-4 py-3 transition-all rounded-md lg:text-sm text-[10px]  bg-[#FF7A50] hover:bg-[#a84527] text-white'>Заказать</button>
                    </div>
                    <div className='cursor-pointer hover:scale-90 transition-all relative w-[300px] h-[250px] rounded-sm bg-white flex flex-col items-center justify-center'>
                        <img className='w-[150px] h-[150px]' src={kalendar} alt="" />
                        <h1 className="font-bold text-[18px] pt-1">Календари</h1>
                        <span className="text-[#a1a1a1]">от 20 сом шт</span>
                        <button className='lg:px-6 absolute bottom-[-20px] lg:py-2 px-4 py-3 transition-all rounded-md lg:text-sm text-[10px]  bg-[#FF7A50] hover:bg-[#a84527] text-white'>Заказать</button>
                    </div>
                    <div className='cursor-pointer hover:scale-90 transition-all relative w-[300px] h-[250px] rounded-sm bg-white flex flex-col items-center justify-center'>
                        <img className='w-[150px] h-[150px]' src={menu} alt="" />
                        <h1 className="font-bold text-[18px] pt-1">Меню</h1>
                        <span className="text-[#a1a1a1]">от 20 сом шт</span>
                        <button className='lg:px-6 absolute bottom-[-20px] lg:py-2 px-4 py-3 transition-all rounded-md lg:text-sm text-[10px]  bg-[#FF7A50] hover:bg-[#a84527] text-white'>Заказать</button>
                    </div>
                    <div className='cursor-pointer hover:scale-90 transition-all relative w-[300px] h-[250px] rounded-sm bg-white flex flex-col items-center justify-center'>
                        <img className='w-[150px] h-[150px]' src={otkrytki} alt="" />
                        <h1 className="font-bold text-[18px] pt-1">Открытки</h1>
                        <span className="text-[#a1a1a1]">от 20 сом шт</span>
                        <button className='lg:px-6 absolute bottom-[-20px] lg:py-2 px-4 py-3 transition-all rounded-md lg:text-sm text-[10px]  bg-[#FF7A50] hover:bg-[#a84527] text-white'>Заказать</button>
                    </div>
                    <div className='cursor-pointer hover:scale-90 transition-all relative w-[300px] h-[250px] rounded-sm bg-white flex flex-col items-center justify-center'>
                        <img className='w-[150px] h-[150px]' src={biri} alt="" />
                        <h1 className="font-bold text-[18px] pt-1">Бирки и этикетки</h1>
                        <span className="text-[#a1a1a1]">от 20 сом шт</span>
                        <button className='lg:px-6 absolute bottom-[-20px] lg:py-2 px-4 py-3 transition-all rounded-md lg:text-sm text-[10px]  bg-[#FF7A50] hover:bg-[#a84527] text-white'>Заказать</button>
                    </div>
                    <div className='cursor-pointer hover:scale-90 transition-all relative w-[300px] h-[250px] rounded-sm bg-white flex flex-col items-center justify-center'>
                        <img className='w-[150px] h-[150px]' src={sertificat} alt="" />
                        <h1 className="font-bold text-[18px] pt-1">Сертификаты</h1>
                        <span className="text-[#a1a1a1]">от 20 сом шт</span>
                        <button className='lg:px-6 absolute bottom-[-20px] lg:py-2 px-4 py-3 transition-all rounded-md lg:text-sm text-[10px]  bg-[#FF7A50] hover:bg-[#a84527] text-white'>Заказать</button>
                    </div>
                </div>
                <div className='flex w-ful flex-col items-center justify-center  mt-20 mb-20 bg-[#f0f0f0]'>
                    <h1 className='text-[50px] text-[#FF7A50] text-center mt-10 mb-10'><span className='text-black'>Наш  </span>адрес</h1>
                    <iframe
                        className='lg:w-[1400px] w-full'
                        height="450"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=74.60336460630072,42.87763852042498,74.60336460630072,42.87763852042498&amp;layer=mapnik&amp;marker=42.87763852042498,74.60336460630072"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div >
    )
}