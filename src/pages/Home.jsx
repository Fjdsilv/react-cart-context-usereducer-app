import { data } from "../data"

import "./Home.css"

const Home = () => {
  return (
    <section>
      <div className="items_wrapper">
      {data.map(item => {
        const { id, name, price, image} = item;
        
        return (
          <div key={id}>
            <img src={image} alt={name} />
            <p>{name}</p>
            <h2>${price}</h2>
            <button className="add_button">Add to Cart</button>
          </div>
        )
      })}
      </div>
    </section>
  )
}
export default Home