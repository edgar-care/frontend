import Text from './text';

const FormLabel = {
	...Text,
	baseStyle: {
		...Text.baseStyle,
		marginBottom: '0px',
		marginInlineEnd: '0px',
		WebkitMarginEnd: '0px',
	},
};

export default FormLabel;
