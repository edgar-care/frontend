import colors from 'theme/foundations/colors';

const Button = {
	baseStyle: {
		padding: '6px 16px',
		height: 'auto',
		fontSize: '16px',
		fontWeight: 600,
		borderRadius: '12px',
	},
	sizes: {
		sm: {
			padding: '6px 12px',
			height: 'auto',
			fontSize: '12px',
			fontWeight: 600,
			borderRadius: '12px',
		},
		md: {
			padding: '6px 16px',
			height: 'auto',
			fontSize: '16px',
			fontWeight: 600,
			borderRadius: '12px',
		},
		lg: {
			padding: '6px 16px',
			height: 'auto',
			fontSize: '20px',
			fontWeight: 600,
			borderRadius: '12px',
		},
		xl: {
			padding: '8px 16px',
			height: 'auto',
			fontSize: '24px',
			fontWeight: 600,
			borderRadius: '14px',
		},
		'2xl': {
			padding: '12px 20px',
			height: 'auto',
			fontSize: '28px',
			fontWeight: 600,
			borderRadius: '16px',
		},
		'3xl': {
			padding: '12px 24px',
			height: 'auto',
			fontSize: '32px',
			fontWeight: 600,
			borderRadius: '16px',
		},
	},
	variants: {
		primary: {
			bg: 'blue.400',
			color: 'white',

			mozTransition: 'all .6s ease-in-out',
			oTransition: 'all .6s ease-in-out',
			webkitTransition: 'all .6s ease-in-out',
			transition: 'all .6s ease-in-out',
			_hover: {
				_disabled: {
					color: 'white',
					bg: 'blue.400',
				},
				color: 'white',
				background: 'blue.700',

				mozTransition: 'all .6s ease-in-out',
				oTransition: 'all .6s ease-in-out',
				webkitTransition: 'all .6s ease-in-out',
				transition: 'all .6s ease-in-out',
			},
		},
		secondary: {
			bg: 'white',
			color: 'purple.600',
			border: `2px solid ${colors.blue['200']}`,

			mozTransition: 'all .6s ease-in-out',
			oTransition: 'all .6s ease-in-out',
			webkitTransition: 'all .6s ease-in-out',
			transition: 'all .6s ease-in-out',
			_hover: {
				_disabled: {
					color: 'purple.600',
					bg: 'white',
					border: `2px solid ${colors.blue['200']}`,
				},
				color: 'purple.800',
				background: 'grey.200',
				border: '2px solid transparent',

				mozTransition: 'all .6s ease-in-out',
				oTransition: 'all .6s ease-in-out',
				webkitTransition: 'all .6s ease-in-out',
				transition: 'all .6s ease-in-out',
			},
		},
		tertiary: {
			bg: 'grey.500',
			color: 'white',

			mozTransition: 'all .6s ease-in-out',
			oTransition: 'all .6s ease-in-out',
			webkitTransition: 'all .6s ease-in-out',
			transition: 'all .6s ease-in-out',
			_hover: {
				_disabled: {
					color: 'white',
					bg: 'grey.500',
					border: `2px solid ${colors.blue['200']}`,
				},
				color: 'white',
				background: 'grey.900',

				mozTransition: 'all .6s ease-in-out',
				oTransition: 'all .6s ease-in-out',
				webkitTransition: 'all .6s ease-in-out',
				transition: 'all .6s ease-in-out',
			},
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'primary',
	},
};

export default Button;
