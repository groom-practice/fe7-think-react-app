import { useState } from "react"
import ProductTable from "./ProductTable"
import Searchbar from "./Searchbar"
import AddProducts from "./AddProducts"
import productsData from "../assets/mock.json"

export default function FilterableProductTable() {
  const [products, setProducts] = useState(productsData)
  const [filterText, setFilterText] = useState("")
  const [inStockOnly, setinStockOnly] = useState(false)

  const handleDelete = (productToDelete) => {
    setProducts((prev) =>
      prev.filter(
        (product) =>
          !(
            product.name === productToDelete.name &&
            product.price === productToDelete.price
          )
      )
    )
  }

  return (
    <div>
      <AddProducts setProducts={setProducts} />
      <Searchbar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setinStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setinStockOnly}
        onDelete={handleDelete}
      />
    </div>
  )
}
