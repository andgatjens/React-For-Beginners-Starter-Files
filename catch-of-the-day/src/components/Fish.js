// React Core
import React from 'react';

// Helper
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {

		const { details, index } = this.props,
					isAvailable 			 = details.status === 'available',
					buttonText 				 = isAvailable ? 'Add To Order' : 'Sold Out!';

		return (
			<li className="menu-fish">
				<img src={ details.image ? details.image : 'https://placehold.it/235x234/D32F2F/FFFFFF' } alt={ details.name } />
				<h3 className="fish-name">
					{ details.name }
					<span className="price">{ formatPrice( details.price ) }</span>
				</h3>
				<p>{ details.desc }</p>
				<button disabled={ !isAvailable } onClick={ () => this.props.addToOrder( index ) }>{ buttonText }</button>
			</li>
		);
	}
}

export default Fish;