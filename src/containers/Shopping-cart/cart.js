import "./cart.scss";

const Cart = () => {
  return (
    <>
      <div class="shopping-cart">
        <div class="title">Shopping Bag</div>

        <div class="item">
          <div class="buttons">
            <span class="delete-btn"></span>
            <span class="like-btn"></span>
          </div>

          <div class="image">
            <img src="item-1.png" alt="" />
          </div>

          <div class="description">
            <span>Common Projects</span>
            <span>Bball High</span>
            <span>White</span>
          </div>

          <div class="quantity">
            <button class="plus-btn" type="button" name="button">
              <img src="plus.svg" alt="" />
            </button>
            <input type="text" name="name" value="1" />
            <button class="minus-btn" type="button" name="button">
              <img src="minus.svg" alt="" />
            </button>
          </div>

          <div class="total-price">$549</div>
        </div>
      </div>
    </>
  );
};
export default Cart;
