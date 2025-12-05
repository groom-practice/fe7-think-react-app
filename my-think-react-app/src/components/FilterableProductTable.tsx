import type { ProductType } from "../App";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function FilterableProductTable({
  products,
  searchKeyword,
  isStocked,
  onDeleteProduct,
}: {
  products: ProductType[];
  searchKeyword: string;
  isStocked: boolean;
  onDeleteProduct: (name: string) => void;
}) {
  let lastCategory = "";
  const rows: React.ReactNode[] = [];

  products.forEach((product) => {
    // 검색
    if (product.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) === -1)
      return;
    // stock 옵션 체크 확인
    if (isStocked && !product.stocked) return;

    // 커테고리 row
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
      lastCategory = product.category;
    }
    // 일반 row
    rows.push(
      <ProductRow
        key={product.name}
        product={product}
        onDeleteProduct={onDeleteProduct}
      />
    );
  });
  return (
    <table style={{ alignSelf: "center", marginTop: 20 }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
