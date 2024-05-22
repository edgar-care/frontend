import { useState } from 'react';
import {
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Text,
	VStack,
} from '@chakra-ui/react';

import AppointmentDoctorCard from 'components/dashboardPages/appointments/AppointmentDoctorCard';
import UpdateAppointmentFooterContent from 'components/dashboardPages/appointments/modals/UpdateAppointmentFooterContent';
import Pagination from 'components/navigation/Pagination';

import { useGetDoctorsQuery } from 'services/request/doctor';

import SearchIcon from 'assets/icons/SearchIcon';
import CalendarIllustration from 'assets/illustrations/Calendarllustration';

import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';
import paginationHandler from 'utils/navigation/paginationHandler';

const UpdateAppointmentModal = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const { data: doctors } = useGetDoctorsQuery();

	const [pageIndex, setPageIndex] = useState(1);
	const [selectedAppointment, setSelectedAppointment] = useState('');
	const [searchValue, setSearchValue] = useState('');

	const filteredDoctors =
		doctors?.filter((doctor) => doctor.name.toLowerCase().includes(searchValue.toLowerCase())) || [];

	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				setPageIndex(1);
				setSelectedAppointment('');
				setSearchValue('');
				onClose();
			}}
			size={{ base: '2xl', lg: '4xl' }}
		>
			<ModalOverlay />
			<ModalContent
				maxH={{ base: 'auto', smd: 'calc(100vh - 128px)' }}
				overflowY={{ base: 'hidden', smd: 'scroll' }}
				sx={{
					'::-webkit-scrollbar': {
						width: '6px',
					},
					'::-webkit-scrollbar-track': {
						background: '#F1F1F1',
						borderRadius: '8px',
						marginTop: '32px',
						marginBottom: '32px',
					},
					'::-webkit-scrollbar-thumb': {
						background: 'grey.200',
						borderRadius: '8px',
					},
					'::-webkit-scrollbar-thumb:hover': {
						background: 'grey.300',
					},
					scrollbarWidth: 'thin',
					scrollbarColor: '#CCC #F1F1F1',
				}}
			>
				<ModalBody p="32px 32px 24px 32px">
					<VStack spacing="32px" w="100%">
						<VStack w="100%">
							<Icon as={CalendarIllustration} w="48px" h="48px" />
							<VStack spacing="16px" w="100%">
								<Text size="xl">Choisissez un rendez-vous</Text>
								<InputGroup>
									<Input
										placeholder="Docteur Edgar"
										maxLength={100}
										onChange={(e) => setSearchValue(e.target.value)}
									/>
									<InputRightElement>
										<Icon as={SearchIcon} />
									</InputRightElement>
								</InputGroup>
							</VStack>
						</VStack>
						<VStack w="100%" spacing="16px">
							<VStack w="100%">
								{filteredDoctors &&
									paginationHandler(filteredDoctors, pageIndex, 3).map((doctor) => (
										<AppointmentDoctorCard
											key={doctor.id}
											doctorInfos={doctor}
											selectedAppointment={selectedAppointment}
											setSelectedAppointment={setSelectedAppointment}
										/>
									))}
							</VStack>
							{filteredDoctors && filteredDoctors.length > 3 && (
								<Pagination
									pageIndex={pageIndex}
									maxPageNumbers={countMaxNumberPage(filteredDoctors, 3)}
									setPageIndex={setPageIndex}
									variant="secondary"
									size="small"
								/>
							)}
						</VStack>
					</VStack>
				</ModalBody>
				<ModalFooter p="24px 32px 32px 32px">
					<UpdateAppointmentFooterContent
						onClose={() => {
							setPageIndex(1);
							setSelectedAppointment('');
							setSearchValue('');
							onClose();
						}}
						selectedAppointment={selectedAppointment}
						appointmentId={appointmentId}
					/>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default UpdateAppointmentModal;
