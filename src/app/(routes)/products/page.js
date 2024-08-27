import React, { Suspense } from "react";
import Product from "./product";

export default function page() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Product />
    </Suspense>
  );
}
