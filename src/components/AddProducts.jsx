import { useState } from "react"

export default function AddProducts({ setProducts }) {
  const [category, setCategory] = useState("Fruits")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("$1")
  const [stocked, setStocked] = useState(true)

  const handleAdd = (e) => {
    e.preventDefault()

    if (!name.trim()) {
      alert("상품명을 입력해주세요!")
      return
    }

    const newProduct = {
      category,
      price,
      stocked,
      name,
    }

    setProducts((prev) => {
      const prevProducts = [...prev]

      let lastIndex = -1
      for (let i = 0; i < prevProducts.length; i++) {
        if (prevProducts[i].category === category) {
          lastIndex = i
        }
      }

      if (lastIndex >= 0) {
        prevProducts.splice(lastIndex + 1, 0, newProduct)
      } else {
        if (category === "Fruits") {
          prevProducts.unshift(newProduct)
        } else {
          prevProducts.push(newProduct)
        }
      }

      return prevProducts
    })
  }

  return (
    <form onSubmit={handleAdd}>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
      </select>

      <input
        value={name}
        type="text"
        placeholder="상품명"
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
        <input
          checked={stocked}
          type="checkbox"
          onChange={(e) => setStocked(e.target.checked)}
        />{" "}
        Stock Status
      </label>

      <button type="submit">Add</button>
    </form>
  )
}
