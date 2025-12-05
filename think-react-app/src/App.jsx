import {useState} from 'react';
import AddProductForm from './components/AddProductForm';
import FilterableProductTable from './components/FilterableProductTable';

const PRODUCTS = [
  {category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
  {category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'},
  {category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
  {category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
  {category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
  {category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'},
];

export default function App() {
  const [products, setProducts] = useState([...PRODUCTS]);

  const handleAddProduct = product => {
    const selectedCategoryProductList = products.filter(
      p => p.category === product.category,
    );

    const unSelectedCategoryProductList = products.filter(
      p => p.category !== product.category,
    );

    selectedCategoryProductList.push(product);
    
    if(product.category === 'Fruits') {
      setProducts([...selectedCategoryProductList, ...unSelectedCategoryProductList]);
    } else {
      setProducts([...unSelectedCategoryProductList, ...selectedCategoryProductList]);
    }
  };

  return (
    <>
      <AddProductForm onAddProduct={handleAddProduct} />
      <FilterableProductTable products={products} />;
    </>
  );
}




