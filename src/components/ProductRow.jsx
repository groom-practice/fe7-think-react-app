import {useState, useContext} from 'react';
import {ProductActionContext} from '../contexts/ProductActionContext';


export default function ProductRow({product}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);
  
  const {onEditProduct, onDeleteProduct} = useContext(ProductActionContext);

  const productName = product.stocked ? (
    product.name
  ) : (
    <span style={{color: 'red'}}>{product.name}</span>
  );

  const handleEditProductClick = () => {
    if(isEditing) {
      onEditProduct(editedProduct);
      setIsEditing(false);
      return;
    }

    setIsEditing(true);
    setEditedProduct(product);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input type="text" value={editedProduct.name} onChange={e => setEditedProduct({...editedProduct, name: e.target.value})} />
        ) : (
          <span>{productName}</span>
        )}
        </td>
      <td>{product.price}</td>
      <td className='action-buttons'>
        <button onClick={handleEditProductClick}>Edit</button>
        <button onClick={() => onDeleteProduct(product)}>Delete</button>
      </td>
    </tr>
  );
}