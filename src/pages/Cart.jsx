import { useMyContext } from "../context/context";

import "./Cart.css";

const Cart = () => {
  const { state, dispatch } = useMyContext()

  return (
    <section>
      <div className="cart_wrapper">
          {state.map(item => {
            const { id, name, price, image} = item;

            return (
              <div key={id}>
                <img src={image} alt={name} style={{width: "100px"}}/>
                <div>
                  <p>{name}</p>
                  <h2>$ {price}</h2>
                </div>
                <button
                  className="remove_button"
                  onClick={() => dispatch({type: "REMOVE_ITEM", payload: id})}
                >
                Remove
                </button>
              </div>
            )
          })}
      </div>
    </section>
  )
}
export default Cart