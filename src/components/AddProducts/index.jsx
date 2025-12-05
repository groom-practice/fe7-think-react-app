export default function AddProducts({ onAddProduct }) {
  function handleSubmit(e) {
    e.preventDefault();
    const category = e.target[0].value;
    const name = e.target[1].value;
    const price = e.target[2].value;
    const stocked = e.target[3].checked;

    onAddProduct(category, name, price, stocked);

    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <select>
        <option value={"Fruits"}>Fruits</option>
        <option value={"Vegetables"}>Vegetables</option>
      </select>
      <input type="text" placeholder="상품명을 입력해주세요" />
      <select name="" id="">
        <option value={"$1"}>$1</option>
        <option value={"$2"}>$2</option>
        <option value={"$3"}>$3</option>
        <option value={"$4"}>$4</option>
        <option value={"$5"}>$5</option>
      </select>
      <label htmlFor="">
        <input type="checkbox" />
        Stock Status
      </label>
      <button type="submit" id="btn-add">
        Add
      </button>
    </form>
  );
}
