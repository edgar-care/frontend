import { useRef, useState } from 'react';
import { Box, Icon, Input, InputGroup, InputRightElement, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { type ComponentWithAs } from '@chakra-ui/system';
import { type IconProps } from '@chakra-ui/icons';

import DownChevronIcon from 'assets/icons/Chevron/DownChevronIcon';

import { type AdvancedSelectorOptionType } from 'types/AdvancedSelectorOptionType';

const AdvancedSelector = ({
	data,
	placeholder,
	rightIcon = DownChevronIcon,
	maxH = '200px',
}: {
	data: AdvancedSelectorOptionType[];
	placeholder: string;
	rightIcon?: ComponentWithAs<'svg', IconProps>;
	maxH?: string;
}): JSX.Element => {
	const { isOpen: isInputFocused, onOpen: toggleInputFocus, onClose: toggleInputBlur } = useDisclosure();
	const [selectSearch, setSelectSearch] = useState('');

	const blurTimeout = useRef(null);

	const options = data
		.filter((option) => option.name.toLowerCase().includes(selectSearch.toLowerCase()))
		.map((option) => (
			<Box
				as="span"
				onClick={() => {
					toggleInputBlur();
					setSelectSearch('');
				}}
				w="100%"
				key={option.id}
			>
				{option.content}
			</Box>
		));

	return (
		<VStack spacing="0px" align="start" w="100%">
			<InputGroup>
				<Input
					placeholder={placeholder}
					type="text"
					value={selectSearch}
					onChange={(e) => setSelectSearch(e.target.value)}
					onClick={toggleInputFocus}
					onBlur={() => {
						// @ts-ignore
						blurTimeout.current = setTimeout(toggleInputBlur, 100);
					}}
					w="100%"
					borderRadius={isInputFocused ? '12px 12px 0px 0px' : '12px'}
					borderBottom={isInputFocused ? 'none' : '2px solid'}
					borderColor="blue.500"
				/>
				<InputRightElement>
					<Icon as={rightIcon} color="blue.700" />
				</InputRightElement>
			</InputGroup>
			{isInputFocused && (
				<Box position="relative" w="100%">
					<VStack
						position="absolute"
						zIndex={1}
						w="100%"
						bg="white"
						border="2px solid"
						borderTop="none"
						borderColor="blue.500"
						borderRadius="0px 0px 12px 12px"
						p="8px"
						pt="0px"
					>
						<Box as="span" w="100%" h="2px" bg="blue.200" />
						<VStack
							w="100%"
							align="start"
							maxH={maxH}
							overflowY="auto"
							pr="8px"
							spacing="4px"
							sx={{
								'::-webkit-scrollbar': {
									width: '6px',
								},
								'::-webkit-scrollbar-track': {
									background: 'grey.100',
									borderRadius: '8px',
									marginTop: '0px',
									marginBottom: '0px',
								},
								'::-webkit-scrollbar-thumb': {
									background: 'grey.200',
									borderRadius: '8px',
								},
								'::-webkit-scrollbar-thumb:hover': {
									background: 'grey.300',
								},
							}}
						>
							{options.length === 0 ? (
								<Text size="md" px="8px">
									Aucun résultat trouvé
								</Text>
							) : (
								options
							)}
						</VStack>
					</VStack>
				</Box>
			)}
		</VStack>
	);
};
export default AdvancedSelector;
