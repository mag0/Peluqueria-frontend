import { Product } from "./Product"
import { useEffect, useState } from "react"
import type { Product as ProductType } from "../interfaces/Product"

export const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    fetch('/json/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <section className="px-4 md:px-8 pb-20">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 mt-10 gap-2">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Cortes de Pelo</h2>
        <p className="text-gray-400 text-sm md:text-base">Seleccioná tu estilo</p>
      </div>

      <hr className="border-gray-600 mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </section>
  )
}
