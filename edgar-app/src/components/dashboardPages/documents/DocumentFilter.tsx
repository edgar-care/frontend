import { useState } from 'react';

import { HStack, Button, Icon, Menu, MenuButton, MenuList, MenuItem, Text, Box } from '@chakra-ui/react';

import DownChevronIcon from 'assets/icons/Chevron/DownChevronIcon';
import DownArrowIcon from 'assets/icons/Arrow/DownArrowIcon';
import UpArrowIcon from 'assets/icons/Arrow/UpArrowIcon';
import AlphabeticalIcon from 'assets/icons/AlphabeticalIcon';
import ReverseAlphabeticalIcon from 'assets/icons/ReverseAlphabeticalIcon';
import PersonFillIcon from 'assets/icons/PersonFillIcon';
import StarFillIcon from 'assets/icons/Stars/StarFillIcon';

const DocumentFilter = ({
	onSort,
	onFilterChange,
}: {
	onSort: (sortType: string) => void;
	onFilterChange: (filterType: string[]) => void;
}) => {
	const [sortType, setSortType] = useState('');
	const [activeFilter, setActiveFilter] = useState<string[]>([]);

	const handleSort = (type: string) => {
		setSortType(type);
		onSort(type);
	};

	const handleFilterChange = (filterType: string) => {
		const filterMap = {
			Ordonnance: 'PRESCRIPTION',
			Certificat: 'CERTIFICATE',
			Radiologie: 'XRAY',
			'Autre documents': 'OTHER',
			Favoris: 'FAVORITE',
			'Ajouté par vous': 'OWN',
			'Ajouté par un médecin': 'DOCTOR',
		};

		const newActiveFilters = activeFilter.includes(filterType)
			? activeFilter.filter((filter) => filter !== filterType)
			: [...activeFilter, filterType];

		setActiveFilter(newActiveFilters);

		const filterTypes = newActiveFilters
			.filter((filter) => Object.prototype.hasOwnProperty.call(filterMap, filter))
			.map((filter) => filterMap[filter as keyof typeof filterMap]);

		onFilterChange(filterTypes.length ? filterTypes : []);
	};

	const filterColors = {
		Ordonnance: 'green.500',
		Certificat: 'blue.700',
		Radiologie: 'green.300',
		'Autre documents': 'blue.200',
	};

	return (
		<HStack w="100%" spacing="8px">
			<Menu>
				{() => (
					<>
						<MenuButton
							as={Button}
							leftIcon={
								sortType === 'desc' ? (
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
								Nom
							</Text>
						</MenuButton>
						<MenuList border="2px" borderColor="blue.200" borderRadius="12px" px="8px">
							<MenuItem onClick={() => handleSort('asc')}>
								<Icon as={AlphabeticalIcon} w="16px" h="16px" color="blue.800" mr="8px" />
								<Text size="md">Nom : A à Z</Text>
							</MenuItem>
							<MenuItem onClick={() => handleSort('desc')}>
								<Icon as={ReverseAlphabeticalIcon} w="16px" h="16px" color="blue.800" mr="8px" />
								<Text size="md">Nom : Z à A</Text>
							</MenuItem>
						</MenuList>
					</>
				)}
			</Menu>
			<Box w="2px" h="29px" bg="blue.300" />
			{activeFilter.map((filter) => (
				<Button
					key={filter}
					onClick={() => handleFilterChange(filter)}
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
					{filter === 'Ordonnance' ||
					filter === 'Certificat' ||
					filter === 'Radiologie' ||
					filter === 'Autre documents' ? (
						<Box w="16px" h="16px" borderRadius="50%" bg={filterColors[filter]} mr="8px" />
					) : (
						<Icon
							as={
								filter === 'Ajouté par vous' || filter === 'Ajouté par un médecin'
									? PersonFillIcon
									: StarFillIcon
							}
							mr="8px"
							h="16px"
							w="16px"
							color="blue.700"
						/>
					)}
					<Text size="md" color="blue.700">
						{filter}
					</Text>
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
						<MenuList border="2px" borderColor="blue.200" borderRadius="12px" px="8px">
							{[
								'Ajouté par vous',
								'Ajouté par un médecin',
								'Favoris',
								'Ordonnance',
								'Certificat',
								'Radiologie',
								'Autre documents',
							].map(
								(filterType) =>
									!activeFilter.includes(filterType) && (
										<MenuItem key={filterType} onClick={() => handleFilterChange(filterType)}>
											{filterType === 'Ordonnance' ||
											filterType === 'Certificat' ||
											filterType === 'Radiologie' ||
											filterType === 'Autre documents' ? (
												<Box
													w="16px"
													h="16px"
													borderRadius="50%"
													bg={filterColors[filterType]}
													mr="8px"
												/>
											) : (
												<Icon
													as={
														filterType === 'Ajouté par vous' ||
														filterType === 'Ajouté par un médecin'
															? PersonFillIcon
															: StarFillIcon
													}
													mr="8px"
													h="16px"
													w="16px"
													color="blue.700"
												/>
											)}
											<Text size="md">{filterType}</Text>
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
