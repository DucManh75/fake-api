import "./ProductCard.scss";
import Button from "@mui/material/Button";
import { useGetAllProductsQuery } from "../../features/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartsSlice";
import { useNavigate } from "react-router-dom";
const ProductCard = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCard = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        <>
          <div className="product-card">
            {data?.map((product) => {
              return (
                <div className="wrapper " key={product.id}>
                  <div className="badge">Hot</div>
                  <div className="product-tumb">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-details">
                    <span className="product-catagory">{product.category}</span>
                    <h4>
                      <a href="/">{product.title}</a>
                    </h4>
                    <p>{product.description}</p>
                    <div className="product-bottom-details">
                      <div className="product-price">{product.price}$</div>
                      <div className="product-links">
                        <Button
                          onClick={() => handleAddToCard(product)}
                          className="button"
                          variant="contained"
                        >
                          ADD TO CARD
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default ProductCard;
