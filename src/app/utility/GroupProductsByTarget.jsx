import { productData } from "../data/productData";
export function groupProductsByTarget() {
  const groupedByTarget = {};

  productData.forEach((category) => {
    category.products.forEach((product) => {
      const targets = Array.isArray(product.target)
        ? product.target
        : [product.target];

      targets.forEach((target) => {
        if (!groupedByTarget[target]) {
          groupedByTarget[target] = [];
        }
        groupedByTarget[target].push(product);
      });
    });
  });

  return groupedByTarget;
}
