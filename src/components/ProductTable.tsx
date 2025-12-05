import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface Product {
  category: string;
  price: string;
  name: string;
  quantity: number;
}

interface ProductTableProps {
  products: Product[];
  onQuantityChange: (productName: string, change: number) => void;
}

export default function ProductTable({
  products,
  onQuantityChange,
}: ProductTableProps) {
  const rows: React.ReactElement[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
        onQuantityChange={onQuantityChange}
      />
    );
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
