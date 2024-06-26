import { HStack, Icon, Text, VStack } from '@chakra-ui/react';

import { type DoctorType } from 'types/dashboard/DoctorType';

import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

const SelectPrimaryDoctorCard = ({
	doctorInfos,
	onClick,
}: {
	doctorInfos: DoctorType;
	onClick: (doctorInfos: DoctorType) => void;
}): JSX.Element => (
	<HStack
		bg="white"
		border="2px solid"
		borderColor="blue.200"
		borderRadius="8px"
		w="100%"
		p="8px 24px 8px 16px"
		spacing="16px"
		justify="space-between"
		onClick={() => {
			onClick(doctorInfos);
		}}
		cursor="pointer"
		transition="all .3s ease-in-out"
		_hover={{
			p: '8px 16px',
		}}
		id={`edgar-dashboardPage-formDoctor-element-${doctorInfos.id}`}
	>
		<VStack w="100%" align="start" spacing="0px">
			<Text size="boldLg">
				Docteur {doctorInfos.firstname.substring(0, 1)}. {doctorInfos.name}
			</Text>
			<Text>
				{doctorInfos.address.street}, {doctorInfos.address.zipCode} - {doctorInfos.address.city}
			</Text>
		</VStack>
		<Icon as={RightChevronIcon} h="16px" w="auto" />
	</HStack>
);

export default SelectPrimaryDoctorCard;
