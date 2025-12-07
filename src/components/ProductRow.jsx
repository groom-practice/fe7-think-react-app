export default function ProductRow({ product, onDelete }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  )

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
      <td>
        <button
          onClick={() => {
            onDelete(product)
          }}>
          X
        </button>
      </td>
    </tr>
  )
}
