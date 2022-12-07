import { Box } from '@chakra-ui/react';
import colors from 'theme/foundations/colors';

type IsType = {
	children: string;
};

const ColorText = ({ children }: IsType): JSX.Element => (
	<Box
		as="span"
		backgroundImage={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
		bgClip="text"
	>
		{children}
	</Box>
);

export default ColorText;
