interface SearchBarProps {
  searchText: string;
  inStockOnly: boolean;
  onSearchTextChange: (text: string) => void;
  onInStockOnlyChange: (checked: boolean) => void;
}

export default function SearchBar({
  searchText,
  inStockOnly,
  onSearchTextChange,
  onInStockOnlyChange,
}: SearchBarProps) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        &nbsp;Only show products in stock
      </label>
    </form>
  );
}

