export const Modal = ({ closeModal }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none bg-black bg-opacity-50">
            <div className="relative w-96 bg-white rounded-lg shadow-lg">
                <div className="p-8">
                    <h2 className="text-xl font-bold text-center">Ваш заказ оформлен</h2>
                    <button
                        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={closeModal}
                    >
                        &times;
                    </button>
                </div>
            </div>
        </div>
    );
};