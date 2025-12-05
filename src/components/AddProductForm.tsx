import { useState } from "react";

interface Product {
  category: string;
  price: string;
  name: string;
  quantity: number;
}

interface AddProductFormProps {
  onAddProduct: (product: Product) => void;
}

export default function AddProductForm({ onAddProduct }: AddProductFormProps) {
  const [category, setCategory] = useState("Fruits");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("$1");
  const [initialQuantity, setInitialQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddProduct({
      category,
      name: name.trim(),
      price,
      quantity: initialQuantity,
    });

    // 폼 초기화
    setName("");
    setPrice("$1");
    setInitialQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
        </select>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="$1">$1</option>
          <option value="$2">$2</option>
          <option value="$3">$3</option>
          <option value="$4">$4</option>
          <option value="$5">$5</option>
        </select>
        <label>
          Initial Quantity:
          <input
            type="number"
            min="0"
            value={initialQuantity}
            onChange={(e) => setInitialQuantity(Number(e.target.value))}
            style={{ width: "60px", marginLeft: "5px" }}
          />
        </label>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
