import { type Dispatch, type SetStateAction, useState } from 'react';
import { Icon, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';

import SelectPrimaryDoctorCard from 'components/onboardingPages/personal/primaryDoctor/SelectPrimaryDoctorCard';

import { type DoctorType } from 'types/dashboard/appointments/doctorTypes';

import SearchIcon from 'assets/icons/SearchIcon';

const SelectPrimaryDoctorContent = ({
	onChange,
	onClose,
	setPrimaryDoctorName,
}: {
	onChange: (event: unknown) => void;
	onClose: () => void;
	setPrimaryDoctorName: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
	const [searchValue, setSearchValue] = useState('');

	const doctors: DoctorType[] = [
		{
			id: '1',
			name: 'Edgar',
			firstname: 'Edgar',
			address: {
				street: 'Rue de la paix',
				city: 'Paris',
				zipCode: '75000',
				country: 'France',
			},
		},
		{
			id: '2',
			name: 'Smith',
			firstname: 'John',
			address: {
				street: 'Baker Street',
				city: 'London',
				zipCode: 'SW1A 1AA',
				country: 'England',
			},
		},
		{
			id: '3',
			name: 'Johnson',
			firstname: 'Sarah',
			address: {
				street: 'Fifth Avenue',
				city: 'New York',
				zipCode: '10001',
				country: 'USA',
			},
		},
		{
			id: '4',
			name: 'Suzuki',
			firstname: 'Yuki',
			address: {
				street: 'Ginza',
				city: 'Tokyo',
				zipCode: '104-0061',
				country: 'Japan',
			},
		},
		{
			id: '5',
			name: 'Müller',
			firstname: 'Max',
			address: {
				street: 'Unter den Linden',
				city: 'Berlin',
				zipCode: '10117',
				country: 'Germany',
			},
		},
		{
			id: '6',
			name: 'Rossi',
			firstname: 'Giovanni',
			address: {
				street: 'Via Roma',
				city: 'Rome',
				zipCode: '00100',
				country: 'Italy',
			},
		},
	];

	return (
		<VStack w="100%" spacing="24px">
			<InputGroup>
				<Input placeholder="Nom du médecin" onChange={(e) => setSearchValue(e.target.value)} />
				<InputRightElement>
					<Icon as={SearchIcon} />
				</InputRightElement>
			</InputGroup>
			<VStack w="100%">
				{doctors
					.filter(
						(doctor) =>
							doctor.name.toLowerCase().includes(searchValue.toLowerCase()) ||
							doctor.firstname.toLowerCase().includes(searchValue.toLowerCase()),
					)
					.map((doctor) => (
						<SelectPrimaryDoctorCard
							doctorInfos={doctor}
							onChange={onChange}
							onClose={onClose}
							setPrimaryDoctorName={setPrimaryDoctorName}
							key={doctor.id}
						/>
					))}
			</VStack>
			{/*	TODO: add pagination */}
		</VStack>
	);
};

export default SelectPrimaryDoctorContent;
