import { useState, useCallback, useMemo } from 'react';
import AddProductForm from './components/AddProductForm';
import FilterableProductTable from './components/FilterableProductTable';
import { ProductActionContext } from './contexts/ProductActionContext';
import './App.css';

const PRODUCTS = [
  {id: 1, category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
  {id: 2, category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'},
  {id: 3, category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
  {id: 4, category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
  {id: 5, category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
  {id: 6, category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'},
];

export default function App() {
  const [products, setProducts] = useState([...PRODUCTS]);

  const handleAddProduct = product => {
    if(products.some(p => p.name === product.name)) {
      alert('Product already exists');
      return;
    }

    const selectedCategoryProductList = products.filter(
      p => p.category === product.category,
    );

    const unSelectedCategoryProductList = products.filter(
      p => p.category !== product.category,
    );

    const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
    selectedCategoryProductList.push({...product, id: maxId + 1});
    
    if(product.category === 'Fruits') {
      setProducts([...selectedCategoryProductList, ...unSelectedCategoryProductList]);
    } else {
      setProducts([...unSelectedCategoryProductList, ...selectedCategoryProductList]);
    }
  };


  const onEditProduct = useCallback(product => {
    setProducts(prevProducts => {
      const index = prevProducts.findIndex(p => p.id === product.id);
      if(index === -1) {
        alert('Product not found');
        return prevProducts;
      }

      // 같은 이름이 있는지 확인 (자기 자신 제외)
      if(prevProducts.some(p => p.name === product.name && p.id !== product.id)) {
        alert('Product with the same name already exists');
        return prevProducts;
      }

      const newProducts = [...prevProducts];
      newProducts[index] = product;
      return newProducts;
    });
  }, []);
  
  const onDeleteProduct = useCallback(product => {
    setProducts(prevProducts => {
      const index = prevProducts.findIndex(p => p.id === product.id);
      if(index === -1) {
        alert('Product not found');
        return prevProducts;
      }

      const newProducts = [...prevProducts];
      newProducts.splice(index, 1);
      return newProducts;
    });
  }, []);

  const contextValue = useMemo(() => ({
    onEditProduct,
    onDeleteProduct
  }), [onEditProduct, onDeleteProduct]);


  return (
    <>
      <AddProductForm onAddProduct={handleAddProduct} />
      <ProductActionContext.Provider value={contextValue}>
        <FilterableProductTable products={products} />;
      </ProductActionContext.Provider>
    </>
  );
}