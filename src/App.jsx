import { useState } from "react";
import "./App.css";
import { PRODUCTS } from "./data/products";
import AddProducts from "./components/AddProducts";
import FilterableProductTable from "./components/FilterableProductTable";

export default function App() {
  const [product, setProduct] = useState(PRODUCTS);
  const handleAddProduct = (category, name, price, stocked) => {
    const selectCategroryProdocuts = product.filter(
      (product) => product.category === category
    );
    const unSelectCategoryProducts = product.filter(
      (product) => product.category !== category
    );

    selectCategroryProdocuts.push({ category, name, price, stocked });
    const joinProducts = [
      ...selectCategroryProdocuts,
      ...unSelectCategoryProducts,
    ];

    const newProduct = [
      ...joinProducts.filter((p) => p.category === "Fruits"),
      ...joinProducts.filter((p) => p.category !== "Fruits"),
    ];

    setProduct(joinProducts);
  };

  // 다크모드
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme" === "dark")
  );
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <button onClick={toggleTheme}>
        {isDark ? "☀️ 라이트모드" : "🌙 다크모드"}
      </button>
      <AddProducts onAddProduct={handleAddProduct} />
      <FilterableProductTable products={product} />
    </div>
  );
}
