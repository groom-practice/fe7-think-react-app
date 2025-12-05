import { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import AddProductForm from "./AddProductForm";

interface Product {
  category: string;
  price: string;
  name: string;
  quantity: number;
}

interface FilterableProductTableProps {
  products: Product[];
  onAddProduct: (product: Product) => void;
  onQuantityChange: (productName: string, change: number) => void;
}

export default function FilterableProductTable({
  products,
  onAddProduct,
  onQuantityChange,
}: FilterableProductTableProps) {
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 검색어 필터링
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const isInStock = (product.quantity ?? 0) > 0;
      const matchesStock = !inStockOnly || isInStock;

      return matchesSearch && matchesStock;
    });
  }, [products, searchText, inStockOnly]);

  return (
    <div>
      <AddProductForm onAddProduct={onAddProduct} />
      <SearchBar
        searchText={searchText}
        inStockOnly={inStockOnly}
        onSearchTextChange={setSearchText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={filteredProducts}
        onQuantityChange={onQuantityChange}
      />
    </div>
  );
}
