import { HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';

const TabCard = ({ name, path, icon }: { name: string; path: string; icon: IconType }): JSX.Element => {
	const router = useRouter();

	return (
		<Link href={path}>
			<HStack
				backgroundColor={router.pathname === path ? `blue.900` : 'transparent'}
				borderRadius="8px"
				spacing="24px"
				w="228px"
				p="6px 12px"
				transition="all .3s ease-in-out"
			>
				<Icon as={icon} color={router.pathname === path ? `white` : 'black'} w="16px" />
				<Text
					color={router.pathname === path ? 'white' : 'black'}
					size={router.pathname === path ? 'boldLg' : 'lg'}
				>
					{name}
				</Text>
			</HStack>
		</Link>
	);
};

export default TabCard;
