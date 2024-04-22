import React, { useState } from 'react'
import { Modal } from './modal1'

export default function Modal2({ closeModal }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Оформить заказ</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1">Ваше имя:</label>
                        <input type="text" id="name" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block mb-1">Номер телефона:</label>
                        <input type="text" id="phone" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    </div>
                    <button className="bg-[#FF7A50] text-white px-4 py-2 rounded-md hover:bg-[#a84527]" onClick={openModal}>Отправить</button>
                    <button className="ml-2 text-gray-600 hover:text-gray-800" onClick={closeModal}>Отмена</button>
                    {isModalOpen && <Modal closeModal={closeModal} />}
                </div>
            </div>
        </div>
    )
}
