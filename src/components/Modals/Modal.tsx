import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Modal({
    children,
    show = false,
    setShow,
}: {
    children: React.ReactNode;
    show: boolean;
    setShow: (show: boolean) => void;
}) {
    if (!show) {
        return null;
    }

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity z-40"></div>

            {/* Contenedor del Modal */}
            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        {/* Botón para cerrar el Modal */}
                        <div className="absolute top-0 right-0 pt-4 pr-4">
                            <button
                                type="button"
                                className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                                onClick={() => setShow(false)}
                            >
                                <span className="sr-only">Cerrar</span>
                                <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>

                        {/* Contenido del Modal */}
                        <div className="bg-white p-4 sm:p-6 mt-5">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}