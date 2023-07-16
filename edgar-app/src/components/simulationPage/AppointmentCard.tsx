import { VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { AppointmentType } from 'types/simulationPage/AppointmentType';

const AppointmentCard = ({ appointment }: { appointment: AppointmentType }) => (
	<VStack spacing="32px" borderRadius="8px" backgroundColor="white" py="16px" px="24px" h="100%" w="100%">
		<Text size="boldXl">{appointment.date.toLocaleDateString()}</Text>
		<VStack spacing="16px" w="100%">
			{appointment.hours.map((hours) => (
				<VStack borderRadius="8px" backgroundColor="green.100" w="100%" key={hours.toString()} cursor="pointer">
					<Text py="4px" size="boldLg">
						{hours.getHours()}h à {hours.getHours() + 1}h
					</Text>
				</VStack>
			))}
		</VStack>
	</VStack>
);

export default AppointmentCard;
