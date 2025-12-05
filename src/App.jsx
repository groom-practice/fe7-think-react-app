import "./App.css"
import products from "./assets/mock.json"
import FilterableProductTable from "./components/FilterableProductTable"

export default function App() {
  return (
    <>
      <FilterableProductTable products={products} />
    </>
  )
}
