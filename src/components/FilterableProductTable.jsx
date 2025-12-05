import { useState } from "react"
import ProductTable from "./ProductTable"
import Searchbar from "./Searchbar"

export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("")
  const [isStockOnly, setIsStockOnly] = useState(false)

  return (
    <div>
      <Searchbar
        filterText={filterText}
        isStockOnly={isStockOnly}
        onFilterTextChange={setFilterText}
        onIsStockOnlyChange={setIsStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        isStockOnly={isStockOnly}
        onFilterTextChange={setFilterText}
        onIsStockOnlyChange={setIsStockOnly}
      />
    </div>
  )
}
