import {useState} from 'react';

export default function AddProductForm({onAddProduct}) {
  const [state, setState] = useState({
    category: 'Fruits',
    name: '',
    price: '$3',
    stocked: false,
  });

  const handleOnChange = e => {
    setState({
      ...state,
      [e.target.name]:
        e.target.type === 'checkbox'
          ? e.target.checked
          : e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddProduct(state);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{display: 'flex', gap: 12, alignItems: 'center'}}
    >
      <select value={state.category} onChange={handleOnChange} name="category">
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
      </select>

      <input
        type="text"
        placeholder="name"
        name="name"
        value={state.name}
        onChange={handleOnChange}
      />

      <select value={state.price} onChange={handleOnChange} name="price">
        {
          Array.from({length: 5}, (_, index) => (
            <option key={index} value={`$${index + 1}`}>${index + 1}</option>
          ))
        }
      </select>

      <div>
        <input
          id="stocked"
          type="checkbox"
          checked={state.stocked}
          onChange={handleOnChange}
          name="stocked"
        />
        <label htmlFor="stocked">Stock Status</label>
      </div>

      <button type="submit">Add </button>
    </form>
  );
}
