import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

export default function ProductTable({
  products,
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
  onDelete,
}) {
  const rows = []
  let lastCategory = null

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return
    }

    if (inStockOnly && !product.stocked) return

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category + product.price}
        />
      )
    }

    rows.push(
      <ProductRow
        product={product}
        key={product.name + product.price}
        onDelete={onDelete}
      />
    )
    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  )
}
