import { useState } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	VStack,
} from '@chakra-ui/react';

import AppointmentDoctorCard from 'components/dashboardPages/appointments/AppointmentDoctorCard';
import UpdateAppointmentFooterContent from 'components/dashboardPages/appointments/modals/UpdateAppointmentFooterContent';

import { useGetDoctorsQuery } from 'services/request/doctor';

import SearchIcon from 'assets/icons/SearchIcon';
import CalendarIllustration from 'assets/illustrations/Calendarllustration';

const UpdateAppointmentDrawer = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const { data: doctors } = useGetDoctorsQuery();

	const [selectedAppointment, setSelectedAppointment] = useState('');
	const [searchValue, setSearchValue] = useState('');

	return (
		<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerContent
				borderRadius="16px 16px 0px 0px"
				maxH="700px"
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
				<DrawerBody p="16px">
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
						<VStack w="100%">
							{doctors
								?.filter((doctor) => doctor.name.toLowerCase().includes(searchValue.toLowerCase()))
								.map((doctor) => (
									<AppointmentDoctorCard
										key={doctor.name}
										doctorInfos={doctor}
										selectedAppointment={selectedAppointment}
										setSelectedAppointment={setSelectedAppointment}
									/>
								))}
						</VStack>
					</VStack>
				</DrawerBody>
				<DrawerFooter p="16px">
					<UpdateAppointmentFooterContent
						onClose={onClose}
						selectedAppointment={selectedAppointment}
						appointmentId={appointmentId}
					/>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default UpdateAppointmentDrawer;
