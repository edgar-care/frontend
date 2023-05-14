import { Icon, VStack } from '@chakra-ui/react';
import { IconType } from 'react-icons';

const DashboardCard = ({ icon, action }: { icon: IconType; action: () => void }): JSX.Element => (
	<VStack
		borderRadius="8px"
		role="group"
		border="2px"
		borderColor="grey.200"
		bg="grey.100"
		p="8px"
		cursor="pointer"
		onClick={action}
		_hover={{
			bg: 'grey.500',
			borderColor: 'grey.600',
		}}
	>
		<Icon
			as={icon}
			color="black"
			_groupHover={{
				color: 'white',
			}}
			w="16px"
		/>
	</VStack>
);

export default DashboardCard;
