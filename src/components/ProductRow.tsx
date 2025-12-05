interface Product {
  category: string;
  price: string;
  name: string;
  quantity: number;
}

interface ProductRowProps {
  product: Product;
  onQuantityChange: (productName: string, change: number) => void;
}

export default function ProductRow({
  product,
  onQuantityChange,
}: ProductRowProps) {
  const quantity = product.quantity ?? 0;
  const isInStock = quantity > 0;

  const productName = isInStock ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{productName}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={() => onQuantityChange(product.name, -1)}>-</button>
        <span style={{ margin: "0 10px" }}>{quantity}</span>
        <button onClick={() => onQuantityChange(product.name, 1)}>+</button>
      </td>
    </tr>
  );
}
