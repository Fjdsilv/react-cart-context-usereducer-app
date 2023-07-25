import { useMyContext } from "../context/context";

import "./Home.css";

const Home = () => {
  const { shopItems, dispatch } = useMyContext()

  return (
    <section>
      <div className="items_wrapper">
      {shopItems.map(item => {
        const { id, name, price, image} = item;
        
        return (
          <div key={id}>
            <img src={image} alt={name} />
            <p>{name}</p>
            <h2>$ {price}</h2>
            <button 
              className="add_button"
              onClick={() => dispatch({type: "ADD_CART", payload: id})}
            >
            Add to Cart</button>
          </div>
        )
      })}
      </div>
    </section>
  )
}
export default Home