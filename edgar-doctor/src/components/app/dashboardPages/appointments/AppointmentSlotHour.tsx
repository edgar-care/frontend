import { Text, VStack } from '@chakra-ui/react';

const AppointmentSlotHour = ({
	startDate,
	endDate,
	selected,
	onClick,
}: {
	startDate: number;
	endDate: number;
	selected: boolean;
	onClick: () => void;
}): JSX.Element => (
	<VStack
		p="4px 8px"
		bg={selected ? 'blue.700' : 'blue.500'}
		borderRadius="8px"
		cursor="pointer"
		w="100%"
		transition="all .3s ease-in-out"
		onClick={onClick}
		_hover={{
			background: 'blue.700',
		}}
	>
		<Text size="md" color="white">
			{new Date(startDate).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })} -{' '}
			{new Date(endDate).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
		</Text>
	</VStack>
);

export default AppointmentSlotHour;
