// React Core
import React from 'react';

class AddFishForm extends React.Component {

	constructor() {
		super();

		this.createFist = this.createFist.bind(this);
	}

	createFist(event) {
		event.preventDefault();
		const fish = {
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value
		}
		this.props.addFish(fish);
		this.fishForm.reset();
	}

	render() {
		return (
			<form ref={ (input) => this.fishForm = input } className="fish-edit" onSubmit={ this.createFist }>
				<div>
					<input ref={ (input) => this.name = input } type="text" placeholder="Fish Name" />
					<input ref={ (input) => this.price = input } type="text" placeholder="Fish Price" />
					<select ref={ (input) => this.status = input }>
						<option value="available">Fresh!</option>
						<option value="unavailable">Sold Out!</option>
					</select>
					<textarea ref={ (input) => this.desc = input } placeholder="Fish Desc"></textarea>
					<input ref={ (input) => this.image = input } type="text" placeholder="Fish Image" />
					<button type="submit">+ Add Item</button>
				</div>
			</form>
		);
	}

}

AddFishForm.propTypes = {
  addFish: React.PropTypes.func.isRequired
};

export default AddFishForm;
