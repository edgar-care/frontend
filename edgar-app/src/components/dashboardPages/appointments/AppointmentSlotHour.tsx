import { Text, VStack } from '@chakra-ui/react';

const AppointmentSlotHour = ({
	startDate,
	endDate,
	selected,
	onClick,
}: {
	startDate: Date;
	endDate: Date;
	selected: boolean;
	onClick: () => void;
}): JSX.Element => (
	<VStack
		p="4px 8px"
		bg={selected ? 'blue.700' : 'blue.500'}
		borderRadius="8px"
		cursor="pointer"
		w="100%"
		onClick={onClick}
		_hover={{
			background: 'blue.700',
		}}
	>
		<Text size="md" color="white">
			{startDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })} -{' '}
			{endDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
		</Text>
	</VStack>
);

export default AppointmentSlotHour;
