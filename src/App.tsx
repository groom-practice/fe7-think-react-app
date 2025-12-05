import { useState } from "react";
import FilterableProductTable from "./components/FilterableProductTable";

interface Product {
  category: string;
  price: string;
  name: string;
  quantity: number;
}

const INITIAL_PRODUCTS: Product[] = [
  {
    category: "Fruits",
    price: "$1",
    name: "Apple",
    quantity: 1,
  },
  {
    category: "Fruits",
    price: "$1",
    name: "Dragonfruit",
    quantity: 1,
  },
  {
    category: "Fruits",
    price: "$2",
    name: "Passionfruit",
    quantity: 0,
  },
  {
    category: "Vegetables",
    price: "$2",
    name: "Spinach",
    quantity: 1,
  },
  {
    category: "Vegetables",
    price: "$4",
    name: "Pumpkin",
    quantity: 0,
  },
  {
    category: "Vegetables",
    price: "$1",
    name: "Peas",
    quantity: 1,
  },
];

export default function App() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);

  const handleAddProduct = (newProduct: Product) => {
    setProducts((prevProducts) => {
      const fruits = prevProducts.filter((p) => p.category === "Fruits");
      const vegetables = prevProducts.filter(
        (p) => p.category === "Vegetables"
      );

      if (newProduct.category === "Fruits") {
        return [...fruits, newProduct, ...vegetables];
      } else {
        return [...fruits, ...vegetables, newProduct];
      }
    });
  };

  const handleQuantityChange = (productName: string, change: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.name === productName) {
          const currentQuantity = product.quantity ?? 0;
          const newQuantity = Math.max(0, currentQuantity + change);
          return { ...product, quantity: newQuantity };
        }
        return product;
      })
    );
  };

  return (
    <FilterableProductTable
      products={products}
      onAddProduct={handleAddProduct}
      onQuantityChange={handleQuantityChange}
    />
  );
}
