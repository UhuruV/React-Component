import React from "react";
import apple from "./../Assets/apple1.jpg";
import dried from "./../Assets/apple-dried.jpg";
import apple2 from "./../Assets/apple2.jpg";
import apple3 from "./../Assets/apple1.jpg";
import cucumber from "./../Assets/cucumbers.jpg";
import apricot from "./../Assets/apricots.jpg";
import onion from "./../Assets/bulb-onion-veg.jpg";
import garlic from "./../Assets/garlic-veg.jpg";
import plum from "./../Assets/plum.jpg";
import tangerine from "./../Assets/tangerine.jpg";
import lemon from "./../Assets/lemons.jpg";
import grape from "./../Assets/grapes.jpg";
import peach from "./../Assets/peach.jpg";
import coconut from "./../Assets/coconut.jpg";

import NavBar from "./NavBar";
import "./HomePage.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {
        fruits: [
          {
            name: "Apple",
            price: "KES 100",
            quantity: 4,
            image: apple,
          },
          {
            name: "Apple2",
            price: "KES 90",
            quantity: 4,
            image: apple2,
          },
          {
            name: "Apple",
            price: "KES 100",
            quantity: 4,
            image: apple3,
          },
          {
            name: "Coconut",
            price: "KES 200",
            quantity: 3,
            image: coconut,
          },
          {
            name: "Peach",
            price: "KES 250",
            quantity: 3,
            image: peach,
          },
          {
            name: "Lemon",
            price: "KES 100",
            quantity: 3,
            image: lemon,
          },
          {
            name: "Tangerine",
            price: "KES 270",
            quantity: 3,
            image: tangerine,
          },
          {
            name: "Tangerine",
            price: "KES 270",
            quantity: 3,
            image: tangerine,
          },
          {
            name: "Tangerine",
            price: "KES 270",
            quantity: 3,
            image: tangerine,
          },
          {
            name: "Grape",
            price: "KES 200",
            quantity: 3,
            image: grape,
          },
          {
            name: "Apricot",
            price: "KES 150",
            quantity: 3,
            image: apricot,
          },
        ],
        vegetables: [
          {
            name: "Dried Apple",
            price: "KES 70",
            quantity: "1 KG",
            image: dried,
          },
          {
            name: "Cucumber",
            price: "KES 120",
            quantity: "0.5 KG",
            image: cucumber,
          },
          ,
          {
            name: "Cucus",
            price: "KES 120",
            quantity: "0.5 KG",
            image: cucumber,
          },
          ,
          {
            name: "Cucuz",
            price: "KES 120",
            quantity: "0.5 KG",
            image: cucumber,
          },
          {
            name: "Onion",
            price: "KES 200",
            quantity: 3,
            image: onion,
          },
          {
            name: "Garlic",
            price: "KES 300",
            quantity: 3,
            image: garlic,
          },
          {
            name: "Plum",
            price: "KES 100",
            quantity: 3,
            image: plum,
          },
        ],
      },
    };
  }
  render() {
    return (
      <div>
      <div className="container">
        <div className="navbar">
          <NavBar />
          </div>
          
          <div className="containerx">
          <h1>Fruits</h1>
          <div className="fruits">
            {this.state.products.fruits.map((fruit) => {
              return (
                <div key={fruit.name} className="fruit">
                  <img src={fruit.image} alt="fruit" />
                  <p>{fruit.name}</p>
                  <p>{fruit.price}</p>
                  <p>{fruit.quantity}</p>
                </div>
              );
            })}
          </div>
        </div>
    

       <div className='container3'>
          <h1>Vegetables</h1>
         <div className="veges">
             {this.state.products.vegetables.map((veges) => {
              return (
                <div key={veges.name} className="vegetables">
                  <img src={veges.image} alt="veges" />
                  <p> {veges.name}</p>
                  <p> {veges.price}</p>
                  <p> {veges.quantity}</p>
                </div>
              );
            })}
          </div>
        </div>
        </div>
        </div>
    );
  }
}

export default HomePage;
