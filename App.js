import "./styles.css";
import { useState } from "react";
import Pizza from "./pizza.jpg";

export default function App() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("small Pizza(s)");
  const [pepperoni, setPepperoni] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let orderDetails = `Order for ${quantity} ${size} that are`;
    if (pepperoni) {
      orderDetails += " have pepperoni and";
    } else {
      orderDetails += " not have pepperoni and";
    }
    if (glutenFree) {
      orderDetails += " have Gluten free";
    } else {
      orderDetails += " not Gluten free";
    }
    orderDetails += ` for ${name}`;

    if (instructions) {
      orderDetails += `   And you Want ${instructions}`;
    } else {
      orderDetails += "  additional instrauction is None";
    }
    document.getElementById("status").innerHTML = orderDetails;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handlePepperoniChange = (e) => {
    setPepperoni(e.target.checked);
  };

  const handleGlutenFreeChange = (e) => {
    setGlutenFree(e.target.checked);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
  };

  return (
    <div id="order">
      <div>
        <h1 className="h1">YUMMY TUMMY PIZZA CENTER</h1>
        <div className="image">
          <img src={Pizza} alt="Pizza" height="200" />
        </div>
        <div>
          <h2>ORDER Your Pizza</h2>
        </div>
        <div>
          <form>
            <div>
              <label type="name">Name:</label>

              <input
                type="text"
                id="name"
                placeholder="Type..."
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <br />
          </form>
        </div>
        <label type="size">Size:</label>
        <select name="size" id="size" value={size} onChange={handleSizeChange}>
          <option value="small Pizza(s)">Small</option>
          <option value="medium Pizza(s)">Medium </option>
          <option value="large Pizza(s)">Large</option>
          <option value="Extra large Pizza(s)">Extra large</option>
        </select>
        <br />
        <form>
          <br />
          <label type="pepperoni">Pepperoni</label>
          <input
            type="checkbox"
            id="pepperoni"
            name="pepperoni"
            value="pizza"
            checked={pepperoni}
            onChange={handlePepperoniChange}
          />
          <br />
          <label type="gluten">Gluten Free</label>
          <input
            type="checkbox"
            id="gluten"
            name="gluten"
            value="pizza"
            checked={glutenFree}
            onChange={handleGlutenFreeChange}
          />
          <br />
        </form>
        <br />
        <label type="quantity">Quantity:</label>
        <input
          type="text"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <br />

        <label type="instructions">Additional instructions:</label>
        <br />
        <textarea
          id="instructions"
          value={instructions}
          onChange={handleInstructionsChange}
        ></textarea>
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <div id="status"></div>
      </div>
    </div>
  );
}
