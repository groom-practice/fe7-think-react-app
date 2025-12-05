import type { ProductType } from "../App";

export default function ProductRow({
  product,
  onDeleteProduct,
}: {
  product: ProductType;
  onDeleteProduct: (name: string) => void;
}) {
  const { name, price, stocked } = product;
  return (
    <tr>
      <td>
        <span style={{ color: stocked ? "red" : "balck" }}>{name}</span>
      </td>
      <td>{price}</td>
      <td>
        <button onClick={() => onDeleteProduct(name)}>X</button>
      </td>
    </tr>
  );
}
