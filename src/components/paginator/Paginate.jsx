import { useState, useEffect } from "react";
import ProductPage from "./ProductPage";
import Pagination from "./Pagination";
import "./Paginate.css";

export default function Paginate() {
  const [currentPage, setCurrentPage] = useState(1);
  const [product, setProduct] = useState([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(product.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = currentPage * itemsPerPage;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("https://dummyjson.com/products?limit=200");
    const json = await res.json();
    setProduct(json.products);
  }

  return (
    <>
      <h3>Pagination</h3>

      <div className="product-container">
        {product.slice(start, end).map((p) => (
          <ProductPage
            key={p.id}
            img={p.thumbnail}
            title={p.title}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
