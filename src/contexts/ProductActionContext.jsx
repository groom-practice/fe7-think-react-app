import {createContext} from 'react';

export const ProductActionContext = createContext({
  onEditProduct: () => {},
  onDeleteProduct: () => {},
});