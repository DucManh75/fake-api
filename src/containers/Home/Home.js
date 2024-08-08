import "./Home.scss";
import Header from "./Header/Header";
import ProductCard from "../../component/ProductCard/ProductCard";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <h1>List product</h1>
        <ProductCard />
      </div>
    </>
  );
};

export default Home;
