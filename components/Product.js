import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
	render() {
		return (
			<h1>{this.props.name}</h1>
		);
	}
}

Product.defaultProps = {
	hasWatermark: false
};

Product.propTypes = {
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool,
	color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: function(props, propName) {
		const weight = props[propName]

		if (weight === undefined) {
			return new Error('weight is required')
		}

		if (isNaN(weight)) {
			return new Error('weight must be a number')
		}

		if (weight < 80 || weight > 300) {
			return new Error('weight must be between 80 and 300')
		}
	}
};

export default Product;



// weight: a number — required, ranges between 80 and 300

// Note: for the weight prop, we'll need custom logic. Remember that it's possible to write your own prop validator function!