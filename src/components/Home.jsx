import React, { Component } from 'react'
import { getProducts } from 'store'
import { Link } from 'react-router-dom'
class Home extends Component {
  state = {
    products: []
  }
  componentDidMount () {
    const products = getProducts()
    this.setState({ products })
    console.log(products)
  }

  render () {
    return (
      <div className='home'>
        <div className='category'>
          <h1>Clean Skin Products</h1>
          <div className='container products-container'>
            {this.state.products.map(product => (
              <div className='product'>
                <Link to={`product/${product.id}`}>
                  <img
                    src={require(`../${product.img1}`)}
                    className='product-image'
                    alt='product'
                  />
                  <h4 className='product-name green'>{product.name}</h4>
                  <div className='product-Details'>
                    <div className='product-price'>
                      Prix: {product.price} DT
                    </div>
                  </div>
              </Link>
                </div>
            ))}
          </div>
        </div>

        <footer>
          Copyright &copy; {new Date().getFullYear()}. Developed by AzizBouchrit
        </footer>
      </div>
    )
  }
}

export default Home
