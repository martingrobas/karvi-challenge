import Modal from 'react-modal';
import classNames from 'classnames';
import ProductCard from '../ProductCard/ProductCard';
import favoritesModalStyles from './FavoritesModal.module.scss';

export interface FavoritesModalProps {
  modalIsOpen?: boolean,
  setIsOpen?: (boolean) => void,
}

export const FavoritesModal = ({ modalIsOpen, setIsOpen }: FavoritesModalProps) => {
  const classes = classNames(favoritesModalStyles['modal'], 'modal')

  function getLikedCars() {
    if (typeof window === 'undefined') return [];
    const likedCars = [];
    for (let key in localStorage) {
      if (key.startsWith('liked_')) {
        try {
          const carData = JSON.parse(localStorage.getItem(key));
          likedCars.push(carData);
        } catch (error) {
          console.error('Error al parsear los datos del auto', error);
        }
      }
    }
    return likedCars;
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      /* style={customStyles} */
    >
      <div className={classes}>
        {getLikedCars().map((car, i) => {
          const { id, city, state, year, brand, model, version, price, mileage, image } = car;
          return <ProductCard heart={false} key={i} productId={id} {...{ city, state, year, brand, model, version, price, mileage, image }} />
        })}
      </div>
    </Modal>
  )
}

export default FavoritesModal;
