import { useState } from 'react';

import { HStack, Button, Icon, Menu, MenuButton, MenuList, MenuItem, Text, Box } from '@chakra-ui/react';

import DownChevronIcon from 'assets/icons/Chevron/DownChevronIcon';
import DownArrowIcon from 'assets/icons/Arrow/DownArrowIcon';
import UpArrowIcon from 'assets/icons/Arrow/UpArrowIcon';

const DocumentFilter = ({
	onSort,
	onFilterChange,
}: {
	onSort: (sortType: string) => void;
	onFilterChange: (filterType: string) => void;
}) => {
	const [sortType, setSortType] = useState('');
	const [activeFilter, setActiveFilter] = useState<string[]>([]);

	const handleSort = (type: string) => {
		setSortType(type);
		onSort(type);
	};

	const handleFilterChange = (filterType: string) => {
		if (activeFilter.includes(filterType)) {
			setActiveFilter(activeFilter.filter((filter) => filter !== filterType));
		} else {
			setActiveFilter([...activeFilter, filterType]);
		}
		onFilterChange(filterType);
	};

	return (
		<HStack w="100%" spacing="8px">
			<Menu>
				{() => (
					<>
						<MenuButton
							as={Button}
							leftIcon={
								sortType === 'oldest' || sortType === 'desc' ? (
									<Icon as={UpArrowIcon} w="12px" h="12px" />
								) : (
									<Icon as={DownArrowIcon} w="12px" h="12px" />
								)
							}
							rightIcon={<Icon as={DownChevronIcon} w="12px" h="6.46px" color="blue.800" />}
							bg="white"
							border="1px"
							color="blue.700"
							borderColor="blue.700"
							borderRadius="32px"
							iconSpacing="8px"
							p="4px 12px"
							_hover={{
								bg: 'blue.100',
							}}
						>
							<Text color="blue.700" size="md">
								{sortType === 'asc' || sortType === 'desc' ? 'Nom' : 'Date'}
							</Text>
						</MenuButton>
						<MenuList>
							<MenuItem onClick={() => handleSort('newest')}>Plus récents</MenuItem>
							<MenuItem onClick={() => handleSort('oldest')}>Plus anciens</MenuItem>
							<MenuItem onClick={() => handleSort('asc')}>Nom : A à Z</MenuItem>
							<MenuItem onClick={() => handleSort('desc')}>Nom : Z à A</MenuItem>
						</MenuList>
					</>
				)}
			</Menu>
			<Box w="2px" h="29px" bg="blue.300" />
			{activeFilter.map((filter) => (
				<Button key={filter} variant="outline" size="sm" onClick={() => handleFilterChange(filter)}>
					{filter}
				</Button>
			))}
			<Menu>
				{() => (
					<>
						<MenuButton
							as={Button}
							rightIcon={<Icon as={DownChevronIcon} w="12px" h="6.46px" color="blue.800" />}
							bg="white"
							border="1px"
							color="blue.700"
							borderColor="blue.700"
							borderRadius="32px"
							iconSpacing="8px"
							p="4px 12px"
							_hover={{
								bg: 'blue.100',
							}}
						>
							<Text color="blue.700" size="md">
								Filtres
							</Text>
						</MenuButton>
						<MenuList>
							{[
								'addedByYou',
								'addedByDoc',
								'favorite',
								'prescription',
								'certificate',
								'xray',
								'other',
							].map(
								(filterType) =>
									!activeFilter.includes(filterType) && (
										<MenuItem key={filterType} onClick={() => handleFilterChange(filterType)}>
											{filterType}
										</MenuItem>
									),
							)}
						</MenuList>
					</>
				)}
			</Menu>
		</HStack>
	);
};

export default DocumentFilter;
