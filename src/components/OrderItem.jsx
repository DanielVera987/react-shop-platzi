import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
import iconClose from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
	const { removeToCart } = useContext(AppContext);

	const handleRemove = (product) => {
		removeToCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={iconClose} onClick={() => handleRemove(product)} alt="close" />
		</div>
	);
}

export default OrderItem;