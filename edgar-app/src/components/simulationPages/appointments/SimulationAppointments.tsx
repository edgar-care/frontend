import { useState } from 'react';
import { Box, Text, useToast, VStack } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';

import SimulationButton from 'components/simulationPages/SimulationButton';
import SearchBar from 'components/SearchBar';
import SimulationAppointmentsDoctorCard from 'components/simulationPages/appointments/SimulationAppointmentsDoctorCard';
import Pagination from 'components/navigation/Pagination';

import { useGetDoctorsQuery } from 'services/request/doctor';
import { useAddPatientAppointmentMutation } from 'services/request/appointments';

import paginationHandler from 'utils/navigation/paginationHandler';
import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';

import { type SlotType } from 'types/simulation/appointments/SlotType';

const SimulationAppointments = (): JSX.Element => {
	const { data: availableDoctors } = useGetDoctorsQuery();
	const [triggerAddPatientAppointment] = useAddPatientAppointmentMutation();

	const [selectedAppointment, setSelectedAppointment] = useState<SlotType | undefined>(undefined);
	const [searchTerm, setSearchTerm] = useState('');
	const [pageIndex, setPageIndex] = useState(1);

	const searchParams = useSearchParams();
	const router = useRouter();

	const toast = useToast({ duration: 3000, isClosable: true });

	const filteredDoctors = availableDoctors?.filter((doctor) =>
		`${doctor.name} ${doctor.firstname[0]}`.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<VStack w="100%" minW={{ base: 'auto', xl: '1050px' }} h="100%">
			<VStack
				maxW={{ base: '100%', '2xl': '1200px' }}
				w="100%"
				spacing="16px"
				justify="space-between"
				h="100%"
				align={{ base: 'center', sm2: 'end' }}
				p={{ base: '16px', md: '32px', xl: '32px 64px' }}
				overflowY="auto"
			>
				<VStack w="100%" spacing="32px" align="start">
					<Text size={{ base: 'boldXl', lg: 'bold2xl' }} id="edgar-simulationAppointmentsPage-title-text">
						Vous pouvez maintenant sélectionner un rendez-vous chez un médecin.
					</Text>
					<VStack w="100%" spacing="16px">
						<SearchBar
							placeholder="Rechercher par le nom du médecin"
							id="edgar-simulationAppointmentsPage-searchBar-input"
							setSearchTerm={(e) => {
								setSearchTerm(e);
								setPageIndex(1);
							}}
						/>
						<VStack w="100%" spacing="16px">
							<VStack w="100%">
								{paginationHandler(filteredDoctors || [], pageIndex, 3).map((doctor) => (
									<SimulationAppointmentsDoctorCard
										doctor={doctor}
										key={doctor.id}
										selectedSlot={selectedAppointment}
										setSelectedSlot={setSelectedAppointment}
									/>
								))}
								{filteredDoctors && filteredDoctors.length === 0 && <Text>Aucun médecin trouvé</Text>}
							</VStack>
							{filteredDoctors && filteredDoctors.length > 3 && (
								<Pagination
									pageIndex={pageIndex}
									maxPageNumbers={countMaxNumberPage(filteredDoctors, 3)}
									setPageIndex={setPageIndex}
									size="small"
									variant="secondary"
								/>
							)}
						</VStack>
					</VStack>
				</VStack>
				<Box
					as="span"
					onClick={() => {
						if (!selectedAppointment)
							toast({ title: 'Veuillez sélectionner un rendez-vous', status: 'error' });
						else
							triggerAddPatientAppointment({
								appointmentId: selectedAppointment.id,
								sessionId: searchParams.get('sessionId') || '',
							})
								.unwrap()
								.then(() => {
									toast({ title: 'Rendez-vous validé', status: 'success' });
									router.push(`/simulation/confirmation?appointmentId=${selectedAppointment.id}`);
								})
								.catch(() => {
									toast({ title: 'Une erreur est survenue', status: 'error' });
								});
					}}
				>
					<SimulationButton variant="BLUE" id="edgar-simulationAppointmentsPage-validate-button">Valider le rendez-vous</SimulationButton>
				</Box>
			</VStack>
		</VStack>
	);
};

export default SimulationAppointments;
