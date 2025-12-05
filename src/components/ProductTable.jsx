import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

export default function ProductTable({
  products,
  filterText,
  isStockOnly,
  onFilterTextChange,
  onIsStockOnlyChange,
}) {
  const rows = []
  let lastCategory = null

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category + product.price}
        />
      )
      lastCategory = product.category
    }

    rows.push(
      <ProductRow product={product} key={product.name + product.price} />
    )
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  )
}
