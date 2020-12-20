import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProductById } from 'store'

const imageLink =
  'https://images.squarespace-cdn.com/content/v1/5d232fa5e7d5420001360f67/1562666893294-JZ7KDTHIB3B0K0JF9DQ4/ke17ZwdGBToddI8pDm48kFZ_sTh7YZIW3_Zoc3kUgdd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mxU0godxi02JM9uVemPLqxvp3k9CMucNgIyRfM2X-vpGvw0vBO35lrZFq-ENh0UJQ/Koala+Cosmetics+Product+shoot+-+4.jpg'

const instgramIcon = (
  <svg
    height='30'
    viewBox='0 0 511 511.9'
    width='30'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fill='white'
      d='m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0'
    />
    <path
      fill='white'
      d='m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0'
    />
    <path
      fill='white'
      d='m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0'
    />
  </svg>
)

const ProductDetails = props => {
  const [product, setProduct] = useState([])
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [selectedImg, setSelectedImg] = useState('IMG1')

  useEffect(() => {
    const { id } = props.match.params
    const product = getProductById(id)
    console.log(product)
    setProduct(product)
    const img1 = require('../' + product.img1)
    setImg1(img1)
    const img2 = require('../' + product.img2)
    setImg2(img2)
  })

  return (
    <div className='container product-page'>
      <div className='row '>
        <div className='col-sm-6'>
          <img
            className='product-page__picture'
            src={selectedImg === 'IMG1' ? img1 : img2}
            alt='product'
          />
          <div className='product-viewer-container'>
            <div className='selected-img-container' >
              <div className={selectedImg === 'IMG1' && 'selected-img'}></div>
              <img
                className='img-viewer'
                src={img1}
                alt='product view 1'
                onClick={() => setSelectedImg('IMG1')}
              />
            </div>
            <div className='selected-img-container' >
              <div className={selectedImg === 'IMG2' && 'selected-img'}></div>
              <img
                className='img-viewer'
                src={img2}
                alt='product view 2'
                onClick={() => setSelectedImg('IMG2')}
              />
            </div>
          </div>
        </div>
        {/* <div className='col-sm-1 my-2'></div> */}
        <div className='col-sm-6 mb-3 product-info'>
          <h1>{product.name}</h1>
          <div className='hr' />
          <h5>Brand:</h5>
          <p>{product.brand}</p>
          <h5>Description:</h5>
          <p>{product.description}</p>
          {product.application && (
            <div>
              <h5>Application:</h5>
              <p>{product.application}</p>
            </div>
          )}
          .
          <div className='commande'>
            <h3 className='mb-3'>53,500 DT</h3>
            <Link to='/' className='btn-commande mb-3'>
              Commander sur {instgramIcon}{' '}
            </Link>
          </div>
        </div>
      </div>

      <footer className='footer'>
        Copyright &copy; {new Date().getFullYear()}. Developed by AzizBouchrit
      </footer>
    </div>
  )
}

export default ProductDetails
