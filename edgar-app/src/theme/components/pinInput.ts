const PinInput = {
	baseStyle: {
		border: '2px solid',
		borderColor: 'blue.300',
		borderRadius: '8px',

		height: '55px',
		width: '50px',
		fontSize: '20px',

		_placeholder: {
			color: 'gray.400',
		},
		_hover: {
			borderColor: 'blue.500',
		},
	},
	defaultProps: {
		variant: null,
		size: null,
	},
};

export default PinInput;
