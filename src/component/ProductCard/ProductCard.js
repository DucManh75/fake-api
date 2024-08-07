import { useEffect, useState } from "react";
import { GetAllProduct } from "../../service/product";
import "./ProductCard.scss";
import Button from "@mui/material/Button";

const ProductCard = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    GetProduct();
  }, []);

  const GetProduct = async () => {
    let res = await GetAllProduct();
    if (res && res.data) {
      setProduct(res.data);
    }
  };

  return (
    <>
      <section className="product-card">
        {product.map((it, idx) => {
          return (
            <div className="wrapper " key={`productcard-${idx}`}>
              <div className="badge">Hot</div>
              <div className="product-tumb">
                <img src={it.image} alt="" />
              </div>
              <div className="product-details">
                <span className="product-catagory">{it.category}</span>
                <h4>
                  <a href="/">{it.title}</a>
                </h4>
                <p>{it.description}</p>
                <div className="product-bottom-details">
                  <div className="product-price">{it.price}$</div>
                  <div class="product-links">
                    <Button className="button" variant="contained">
                      Buy
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductCard;
