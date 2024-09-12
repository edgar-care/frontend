const Input = {
	baseStyle: {
		field: {
			border: '2px solid',
			borderColor: 'blue.500',
			borderRadius: '12px',

			height: '38px',
			px: '16px',
			fontSize: '16px',

			_placeholder: {
				color: 'gray.400',
			},
			_hover: {
				borderColor: 'blue.500',
			},
		},
	},
	variants: {
		noStyle: {
			field: {
				border: '0px',
				borderColor: 'transparent',
				borderRadius: '0px',

				minHeight: '21px',
				p: '0px',
				pl: '4px',
				bg: 'transparent',

				_hover: {
					borderColor: 'transparent',
				},
			},
		},
	},
	defaultProps: {
		variant: null,
		size: null,
	},
};

export default Input;
