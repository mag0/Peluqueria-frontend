import { Button } from "./Button"

interface ProductProps {
    name: string
    description: string
    price: number
    time: number
    image: string
}

export const Product = ({ name, description, price, time, image }: ProductProps) => {
    return (
        <div className="bg-(--color-card) text-white rounded-xl shadow-md overflow-hidden 
      hover:shadow-xl transition-shadow duration-300 flex flex-col">

            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-56 sm:h-64 lg:h-72 object-cover"
                />
                <div className="absolute top-3 right-3 bg-(--color-primary) 
          text-white px-3 py-1 rounded-full text-xs font-bold">
                    {time} min
                </div>
            </div>

            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between mb-3">
                    <div>
                        <h3 className="text-lg font-bold">{name}</h3>
                        <p className="text-lg font-bold text-(--color-text)">${price}</p>
                    </div>
                    <i className="fas fa-cut text-xl text-(--color-text) bg-(--color-text-opacity) rounded p-2 h-fit"></i>
                </div>

                <p className="text-gray-400 mb-4 text-sm flex-1">{description}</p>

                <div className="flex justify-end mt-auto pt-4">
                    <Button title="Reservar" />
                </div>


            </div>
        </div>
    )
}
