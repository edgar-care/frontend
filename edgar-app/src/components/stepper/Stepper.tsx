import { Box, HStack } from '@chakra-ui/react';

const Step = ({ isActive }: { isActive: boolean }): JSX.Element => (
	<Box as="span" w="100%" h="8px" bg={isActive ? 'blue.700' : 'blue.200'} borderRadius="8px" />
);

const Stepper = ({ nbrSteps, activeStep }: { nbrSteps: number; activeStep: number }): JSX.Element => (
	<HStack w="100%" spacing="16px">
		{Array.from(Array(nbrSteps).keys()).map((step) => (
			<Step key={step} isActive={step <= activeStep} />
		))}
	</HStack>
);

export default Stepper;
