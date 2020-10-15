import React, { Component } from "react";
import Robe from "../assets/model.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className='home'>
        <div className='category'>
          <h1>Clothing</h1>
          <div className='container products-container'>
            <div className='product'>
              <img src={Robe} alt='' className='product-image' />
              <h4 className='product-name'>Robe mi-longue</h4>
              <div className='product-Details'>
                <div className='product-size'>Tailles: S, M, L, XL</div>
                <div className="product-price">Prix: 80 DT</div>
              </div>
            </div>
            <div className='product'>
              <img src={Robe} alt='' className='product-image' />
              <h4 className='product-name'>Robe mi-longue</h4>
              <div className='product-Details'>
                <div className='product-size'>Tailles: S, M, L, XL</div>
                <div className="product-price">Prix: 80 DT</div>
              </div>
            </div>
            <div className='product'>
              <img src={Robe} alt='' className='product-image' />
              <h4 className='product-name'>Robe mi-longue</h4>
              <div className='product-Details'>
                <div className='product-size'>Tailles: S, M, L, XL</div>
                <div className="product-price">Prix: 80 DT</div>
              </div>
            </div>
            <div className='product'>
              <img src={Robe} alt='' className='product-image' />
              <h4 className='product-name'>Robe mi-longue</h4>
              <div className='product-Details'>
                <div className='product-size'>Tailles: S, M, L, XL</div>
                <div className="product-price">Prix: 80 DT</div>
              </div>
            </div>
            <div className='product'>
              <img src={Robe} alt='' className='product-image' />
              <h4 className='product-name'>Robe mi-longue</h4>
              <div className='product-Details'>
                <div className='product-size'>Tailles: S, M, L, XL</div>
                <div className="product-price">Prix: 80 DT</div>
              </div>
            </div>
            <div className='product'>
              <img src={Robe} alt='' className='product-image' />
              <h4 className='product-name'>Robe mi-longue</h4>
              <div className='product-Details'>
                <div className='product-size'>Tailles: S, M, L, XL</div>
                <div className="product-price">Prix: 80 DT</div>
              </div>
            </div>
            <div className='product'>
              <img src={Robe} alt='' className='product-image' />
              <h4 className='product-name'>Robe mi-longue</h4>
              <div className='product-Details'>
                <div className='product-size'>Tailles: S, M, L, XL</div>
                <div className="product-price">Prix: 80 DT</div>
              </div>
            </div>
            <div className='product'>
              <img src={Robe} alt='' className='product-image' />
              <h4 className='product-name'>Robe mi-longue</h4>
              <div className='product-Details'>
                <div className='product-size'>Tailles: S, M, L, XL</div>
                <div className="product-price">Prix: 80 DT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
