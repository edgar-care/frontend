import { useEffect, useState } from 'react';

import { VStack, Box, Button, Text, HStack, Icon, Checkbox } from '@chakra-ui/react';
import Link from 'next/link';

import WarningIcon from 'assets/icons/WarningIcon';

const HomeTreatmentsCard = (): JSX.Element => {
	const [checkedItems, setCheckedItems] = useState<string[]>([]);
	const [treatments, setTreatments] = useState([
		{ id: 1, name: 'Médicament 1', number: 2 },
		{ id: 2, name: 'Doliprane', number: 4 },
	]);

	const handleChange = (checkedItem: string) => {
		if (checkedItems.includes(checkedItem)) {
			setCheckedItems(checkedItems.filter((item) => item !== checkedItem));
		} else {
			setCheckedItems([...checkedItems, checkedItem]);
		}
	};

	useEffect(() => {
		const newTreatments = {
			id: treatments.length + 1,
			name: 'Médicament Bonus',
			number: 4,
		};
		setTreatments((prevTreatments) => [...prevTreatments, newTreatments]);
	}, []);

	return (
		<VStack
			spacing="16px"
			w={{ base: '100%', md: 'auto' }}
			bg="white"
			borderRadius="16px"
			p="16px"
			border="2px"
			borderColor="blue.200"
		>
			<Box w="100%">
				<Link href="/dashboard/chat">
					<Button w="100%" size="customLg" id="edgar-dashboardHomePage-chat-button">
						Consulter mes traitements
					</Button>
				</Link>
			</Box>
			<Box w="100%" h="2px" bg="blue.700" />
			{treatments.length > 0 ? (
				<>
					<VStack spacing="8px" w="100%" align="start">
						<Text size="boldMd">Vos médicaments d'aujourd'hui</Text>
						<Box w="100%" h="2px" bg="blue.100" />
						<VStack spacing="4px" align="start">
							<Text size="boldLg">Matin</Text>
							{treatments.map((treatment) => (
								<Checkbox
									key={treatment.id}
									value={treatment.name}
									onChange={() => handleChange(treatment.name)}
									borderColor="blue.200"
								>
									<Text
										size="boldMd"
										textDecoration={
											checkedItems.includes(treatment.name) ? 'line-through' : undefined
										}
									>
										{treatment.number} x {treatment.name}
									</Text>
								</Checkbox>
							))}
						</VStack>
						<Box w="100%" h="2px" bg="blue.100" />
						<VStack spacing="4px" align="start">
							<Text size="boldLg">Midi</Text>
							{treatments.map((treatment) => (
								<Checkbox
									key={treatment.id}
									value={treatment.name}
									onChange={() => handleChange(treatment.name)}
									borderColor="blue.200"
								>
									<Text
										size="boldMd"
										textDecoration={
											checkedItems.includes(treatment.name) ? 'line-through' : undefined
										}
									>
										{treatment.number} x {treatment.name}
									</Text>
								</Checkbox>
							))}
						</VStack>
						<Box w="100%" h="2px" bg="blue.100" />
						<VStack spacing="4px" align="start">
							<Text size="boldLg">Soir</Text>
							{treatments.map((treatment) => (
								<Checkbox
									key={treatment.id}
									value={treatment.name}
									onChange={() => handleChange(treatment.name)}
									borderColor="blue.200"
								>
									<Text
										size="boldMd"
										textDecoration={
											checkedItems.includes(treatment.name) ? 'line-through' : undefined
										}
									>
										{treatment.number} x {treatment.name}
									</Text>
								</Checkbox>
							))}
						</VStack>
						<Box w="100%" h="2px" bg="blue.100" />
						<VStack spacing="4px" align="start">
							<Text size="boldLg">Nuit</Text>
							{treatments.map((treatment) => (
								<Checkbox
									key={treatment.id}
									value={treatment.name}
									onChange={() => handleChange(treatment.name)}
									borderColor="blue.200"
								>
									<Text
										size="boldMd"
										textDecoration={
											checkedItems.includes(treatment.name) ? 'line-through' : undefined
										}
									>
										{treatment.number} x {treatment.name}
									</Text>
								</Checkbox>
							))}
						</VStack>
					</VStack>
				</>
			) : (
				<VStack
					w="100%"
					borderRadius="16px"
					border="2px"
					borderColor="orange.300"
					bg="orange.100"
					p="8px 16px"
					spacing="8px"
				>
					<HStack spacing="16px" w="100%">
						<Icon as={WarningIcon} w="32px" h="32px" color="orange.600" />
						<Text color="orange.600" size="boldMd">
							Vous n’avez pas encore <br />
							enregistré de suivi sur vos <br />
							traitements
						</Text>
					</HStack>
					<Button size="sm" variant="secondary" w="100%">
						Ajouter un suivi
					</Button>
				</VStack>
			)}
		</VStack>
	);
};

export default HomeTreatmentsCard;
