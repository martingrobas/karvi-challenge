import classNames from 'classnames'
import React, { useState } from 'react'
import cardStyles from './ProductCard.module.scss'
import Button from '../Button/Button'
import { LikeIcon, CalculatorIcon } from '../Icons'
import Badge from '../Badge/Badge'

interface ProductCardProps extends React.ComponentPropsWithoutRef<'article'> {
  productId?: number
  image?: string
  year?: string
  mileage?: number
  brand?: string
  model?: string
  version?: string
  price?: number
  city?: string
  state?: string
  financing?: boolean
  heart?: boolean
}
export const ProductCard = ({ className, heart = true, productId, image, year, mileage, brand, model, version, price, city, state, financing, ...r }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const classes = classNames(cardStyles['product-card'], className)
  const Wrapper = productId ? 'a' : 'div'

  const handleLikeClick = () => {
    if (isLiked) {
      localStorage.removeItem(`liked_${productId}`);
    } else {
      const likedCar = {
        image,
        year,
        mileage,
        brand,
        model,
        version,
        price,
        city,
        state,
      };
      localStorage.setItem(`liked_${productId}`, JSON.stringify(likedCar));
    }

    setIsLiked(!isLiked);
  };

  function isSaved(productId) {
    const likedCarData = localStorage.getItem(`liked_${productId}`);
    return likedCarData !== null; // Devuelve true si el auto está guardado, de lo contrario, devuelve false.
  }

  return (
    <Wrapper title={`${brand} ${model}`} className={cardStyles.product}>
      <article className={classes} {...r}>
        <div className={cardStyles['product-card-header']}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {image && <img src={image} alt={`${brand} ${model}`} loading='lazy' width={200} height={140} className={cardStyles['product-card-image']} />}
          {heart && (
            <Button buttonType='secondary' onClick={handleLikeClick} iconOnly className={cardStyles['button-like']}>
              <LikeIcon width={20} height={20} isLiked={isLiked || isSaved(productId)} />
            </Button>
          )}
        </div>
        <div className={cardStyles['product-card-body']}>
            <div className={cardStyles['badges']}>
              <Badge>{year}</Badge>
              <Badge>{mileage?.toLocaleString('es-Ar', { style: 'unit', unit: 'kilometer' })}</Badge>
            </div>
          <div className={cardStyles['product-info']}>
            <div className={cardStyles['product-info-header']}>
              <h4>
                {brand} {model}
              </h4>
              <p>{version}</p>
            </div>
            <div className={cardStyles['product-info-footer']}>
              <p className={cardStyles['price']}>{price?.toLocaleString('es-Ar', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}</p>
              <p className={cardStyles['location']}>
                {city}, {state}
              </p>
            </div>
          </div>
        </div>
        <div className={cardStyles['product-card-footer']}>
          <Button buttonType='primary'>
            <CalculatorIcon width={20} height={20} />
            Simular parcelas
          </Button>
        </div>
      </article>
    </Wrapper>
  )
}

export default ProductCard

