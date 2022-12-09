import { Box, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import colors from 'theme/foundations/colors';

const TabCard = ({ name, path }: { name: string; path: string }): JSX.Element => {
	const router = useRouter();

	return (
		<Link href={path}>
			<VStack spacing={router.pathname === path ? '4px' : '0px'}>
				<VStack
					p={router.pathname === path ? '8px 24px 4px 24px' : '8px 24px'}
					transition="all .3s ease-in-out"
					borderRadius="16px"
					_hover={{
						bg: 'blue.100',
					}}
				>
					<Text size="boldLg">{name}</Text>
				</VStack>
				<Box
					w="75%"
					borderBottom={
						router.pathname === path ? `2px solid ${colors.purple['500']}` : '2px solid transparent'
					}
				/>
			</VStack>
		</Link>
	);
};

export default TabCard;
