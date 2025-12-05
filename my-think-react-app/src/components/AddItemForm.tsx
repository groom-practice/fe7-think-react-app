import type { ProductType } from "../App";
export default function AddItemForm({
  onAddProduct,
}: {
  onAddProduct: (product: ProductType) => void;
}) {
  const coast = Array.from({ length: 5 }, (_item, i) => `${i + 1}$`);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // e.target은 기본적으로 EventTarget 타입이라 HTMLFormElement로 타입 단언이 필요함
    const form = e.currentTarget;

    const category = (form[0] as HTMLSelectElement).value;
    const name = (form[1] as HTMLInputElement).value;
    const price = (form[2] as HTMLSelectElement).value;
    const stocked = (form[3] as HTMLInputElement).checked;

    onAddProduct({
      category: category,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      price: price,
      stocked: stocked,
    });
  }
  return (
    <form
      style={{ display: "flex", alignItems: "center", alignSelf: "center" }}
      onSubmit={handleSubmit}
    >
      <select>
        <option value={"Fruits"}>Fruits</option>
        <option value={"Vegetables"}>Vegetables</option>
      </select>
      <input type="text" placeholder="Add Item..." />
      <select>
        {coast.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <label>
        <input type="checkBox" /> Stock Status
      </label>

      <button type="submit">Add</button>
    </form>
  );
}
