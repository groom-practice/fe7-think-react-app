export default function Searchbar({
  filterText,
  isStockOnly,
  onFilterTextChange,
  onIsStockOnlyChange,
}) {
  return (
    <form action="">
      <input
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      <br></br>
      <label htmlFor="">
        <input type="checkbox" />
        &nbsp;Only show products in stock
      </label>
    </form>
  )
}
