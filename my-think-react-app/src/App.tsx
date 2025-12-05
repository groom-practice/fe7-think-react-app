import { useState } from "react";
import "./App.css";
import AddItemForm from "./components/AddItemForm";
import FilterableProductTable from "./components/FilterableProductTable";
import Searchbar from "./components/SearchBar";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export interface ProductType {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isStocked, setIsStocked] = useState(false);

  // 상품 추가 함수
  function handleAddProduct(newProduct: ProductType) {
    const selectedProduct = products.filter(
      (product) => product.category === newProduct.category
    );
    const unSelectedProduct = products.filter(
      (product) => product.category !== newProduct.category
    );
    selectedProduct.push(newProduct);
    setProducts([...selectedProduct, ...unSelectedProduct]);
  }

  // 상품 제거 함수
  function handleDelteProduct(name: string) {
    setProducts((prevProduct) =>
      prevProduct.filter((product) => product.name !== name)
    );
  }
  return (
    <>
      <AddItemForm onAddProduct={handleAddProduct} />
      <Searchbar
        searchKeyword={searchKeyword}
        onSearchKeyword={setSearchKeyword}
        isStocked={isStocked}
        onCheckStock={setIsStocked}
      />
      <FilterableProductTable
        products={products}
        onDeleteProduct={handleDelteProduct}
        searchKeyword={searchKeyword}
        isStocked={isStocked}
      />
    </>
  );
}

export default App;
