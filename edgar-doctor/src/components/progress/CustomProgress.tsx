import { Box } from '@chakra-ui/react';

const CustomProgress = ({
	value,
	trackColor,
	progressColor,
	h = '8px',
}: {
	value: number;
	trackColor: string;
	progressColor: string;
	h?: string;
}): JSX.Element => (
	<Box w="100%" h={h} bg={trackColor} borderRadius={h}>
		<Box w={`${value}%`} h="100%" bg={progressColor} borderRadius="md" />
	</Box>
);

export default CustomProgress;
