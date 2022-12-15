import { HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { BsFileEarmarkArrowDown, BsThreeDotsVertical } from 'react-icons/bs';
import ButtonIcon from './ButtonIcon';

const MedCard = ({ docuName, name }: { docuName: string; name: string }): JSX.Element => (
	<HStack
		border="2px solid"
		borderColor="blue.200"
		justify="space-between"
		w="100%"
		borderRadius="16px"
		p="12px 24px"
		bg="white"
	>
		<HStack>
			<Text size="boldLg">{docuName}</Text>
		</HStack>
		<HStack spacing="16px">
			<Text size="lg">Dr.{name}</Text>
			<ButtonIcon icon={BsFileEarmarkArrowDown} action={() => console.log('click')} />
			<ButtonIcon icon={BsThreeDotsVertical} action={() => console.log('click')} />
		</HStack>
	</HStack>
);

export default MedCard;