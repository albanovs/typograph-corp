import React from 'react'

export default function Coontact() {
    return (
        <div className='p-10'>
            <h1>Контакты:</h1>
            <p>Адресс: Бишкек , манаса 64/4</p>
            <p>телефон: 996500-500-500</p>
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
    )
}