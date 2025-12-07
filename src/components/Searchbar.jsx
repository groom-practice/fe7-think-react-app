export default function Searchbar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
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
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        &nbsp;Only show products in stock
      </label>
    </form>
  )
}
