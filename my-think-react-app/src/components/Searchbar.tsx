export default function Searchbar({
  searchKeyword,
  onSearchKeyword,
  isStocked,
  onCheckStock,
}: {
  searchKeyword: string;
  onSearchKeyword: (keyword: string) => void;
  isStocked: boolean;
  onCheckStock: (keyword: boolean) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 10,
      }}
    >
      <input
        type="search"
        placeholder="Search..."
        value={searchKeyword}
        onChange={(e) => onSearchKeyword(e.target.value)}
      />
      <button>검색</button>
      <label>
        <input
          type="checkbox"
          checked={isStocked}
          onChange={(e) => onCheckStock(e.target.checked)}
        />
        Only show products in stock
      </label>
    </div>
  );
}
