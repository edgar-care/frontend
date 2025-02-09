import { useEffect, useState } from 'react';
import {
	Box,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { type ComponentWithAs } from '@chakra-ui/system';
import { type IconProps } from '@chakra-ui/icons';

import DownChevronIcon from 'assets/icons/Chevron/DownChevronIcon';

import { type AdvancedSelectorOptionType } from 'types/AdvancedSelectorOptionType';

const AdvancedSelector = ({
	data,
	defaultValue = '',
	placeholder,
	rightIcon = DownChevronIcon,
	maxH = '200px',
	id,
}: {
	data: AdvancedSelectorOptionType[];
	defaultValue?: string;
	placeholder: string;
	rightIcon?: ComponentWithAs<'svg', IconProps>;
	maxH?: string;
	id?: string;
}): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectSearch, setSelectSearch] = useState('');

	const options = data
		.filter((option) => option.name.toLowerCase().includes(selectSearch.toLowerCase()))
		.map((option) => (
			<Box
				as="span"
				onClick={() => {
					onClose();
					setSelectSearch('');
				}}
				w="100%"
				key={option.id}
			>
				{option.content}
			</Box>
		));

	useEffect(() => {
		setSelectSearch(defaultValue);
	}, [defaultValue]);

	return (
		<Popover isOpen={isOpen} autoFocus={false} placement="bottom-start">
			<PopoverTrigger>
				<InputGroup>
					<Input
						placeholder={placeholder}
						type="text"
						value={selectSearch}
						maxLength={100}
						onChange={(e) => setSelectSearch(e.target.value)}
						onClick={onOpen}
						w="100%"
						borderRadius="12px"
						borderBottom="2px solid"
						borderColor="blue.500"
						id={id}
					/>
					<InputRightElement>
						<Icon as={rightIcon} color="blue.700" />
					</InputRightElement>
				</InputGroup>
			</PopoverTrigger>
			<PopoverContent w="100%">
				<PopoverBody w="100%" maxH={maxH} overflowY="auto">
					{options.length === 0 ? (
						<Text size="md" px="8px">
							Aucun résultat trouvé
						</Text>
					) : (
						options
					)}
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};
export default AdvancedSelector;
