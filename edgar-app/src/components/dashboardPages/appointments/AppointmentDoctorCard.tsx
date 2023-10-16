import { HStack, Icon, Text, VStack } from '@chakra-ui/react';

import DownChevronIcon from 'assets/icons/Chevron/DownChevronIcon';
import { AppointmentDoctorCardType } from 'types/dashboardPages/appointments/appointmentDoctorCardType';

const AppointmentDoctorCard = ({ doctorInfos }: { doctorInfos: AppointmentDoctorCardType }): JSX.Element => (
	<VStack
		w="100%"
		p="12px"
		bg="white"
		border="2px solid"
		borderColor="blue.200"
		borderRadius="8px"
		spacing="16px"
		cursor="pointer"
		transition="all .3s ease-in-out"
		_hover={{
			borderColor: 'blue.400',
			transition: 'all .3s ease-in-out',
		}}
	>
		<HStack w="100%" justify="space-between" px="4px">
			<VStack align="starts">
				<VStack align="start" spacing="0px">
					<Text size="boldLg">{doctorInfos.doctorName}</Text>
					<Text>{doctorInfos.address}</Text>
				</VStack>
				<Text>Prochain créneau disponible le XXXX</Text>
			</VStack>
			<Icon as={DownChevronIcon} w="16px" color="black" />
		</HStack>
	</VStack>
);

export default AppointmentDoctorCard;
