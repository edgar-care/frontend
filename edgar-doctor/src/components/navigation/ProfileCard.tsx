import { Box, HStack, Icon, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import Avatar from 'boring-avatars';

import ProfileTab from 'components/navigation/ProfileTab';
import SettingsHandler from 'components/settingsModals/SettingsHandler';

import { useAuthContext } from 'contexts/auth';

import { useGetDoctorByIdQuery } from 'services/request/doctor';

import SelectorIcon from 'assets/icons/SelectorIcon';
import LogoutIcon from 'assets/icons/LogoutIcon';
import SettingsIcon from 'assets/icons/SettingsIcon';

import { type ProfileTabType } from 'types/navigation/ProfileType';

import colors from 'theme/foundations/colors';

const ProfileCard = (): JSX.Element => {
	const { auth } = useAuthContext();

	const { data: doctorInfo } = useGetDoctorByIdQuery(auth.getId());

	const { isOpen, onToggle } = useDisclosure();
	const { isOpen: isOpenSettingsModal, onOpen: onOpenSettingsModal, onClose: onCloseSettingsModal } = useDisclosure();

	const router = useRouter();

	const profileTabs: ProfileTabType[] = [
		{
			name: 'Paramètres',
			icon: SettingsIcon,
			action: onOpenSettingsModal,
			actionComponent: <SettingsHandler isOpen={isOpenSettingsModal} onClose={onCloseSettingsModal} />,
		},
		{
			name: 'Déconnexion',
			icon: LogoutIcon,
			action: () => {
				localStorage.removeItem('token');
				router.push('https://edgar-sante.fr');
			},
		},
	];

	return (
		<>
			{isOpen ? (
				<VStack
					w="100%"
					bg="white"
					border="2px solid"
					borderColor="blue.200"
					borderRadius="16px"
					cursor="pointer"
					transition="all .3s ease-out"
					id="edgar-dashboardNavbar-profileCard"
				>
					<VStack w="100%" p="4px" pb="0px">
						{profileTabs.map((tab) => (
							<ProfileTab tab={tab} key={tab.name} />
						))}
					</VStack>
					<Box as="span" w="100%" h="1px" bg="blue.200" />
					<VStack p="4px" pt="0px" w="100%">
						<HStack
							justify="space-between"
							w="100%"
							p="4px 12px"
							borderRadius="10px"
							_hover={{
								background: 'blue.100',
							}}
							onClick={onToggle}
							id="edgar-dashboardNavbar-profileCard-userName"
						>
							<HStack spacing="16px" w="100%">
								<Avatar
									size={28}
									name={`${doctorInfo?.firstname} ${doctorInfo?.name.toUpperCase()}`}
									variant="beam"
									colors={[colors.green[600], colors.green[200], colors.green[500]]}
								/>
								<Text
									size="boldMd"
									textTransform="capitalize"
									id="edgar-dashboardNavbar-profileCard-userName-text"
								>
									{doctorInfo?.firstname} {doctorInfo?.name}
								</Text>
							</HStack>
							<Icon as={SelectorIcon} w="12px" h="16px" />
						</HStack>
					</VStack>
				</VStack>
			) : (
				<VStack
					w="100%"
					bg="white"
					border="2px solid"
					borderColor="blue.200"
					borderRadius="16px"
					cursor="pointer"
					transition="all .3s ease-out"
					_hover={{
						background: 'blue.100',
					}}
					onClick={onToggle}
					id="edgar-dashboardNavbar-profileCard"
				>
					<HStack justify="space-between" w="100%" p="8px 16px">
						<HStack spacing="16px" w="100%">
							<Avatar
								size={28}
								name={`${doctorInfo?.firstname} ${doctorInfo?.name.toUpperCase()}`}
								variant="beam"
								colors={[colors.green[600], colors.green[200], colors.green[500]]}
							/>
							<Text
								size="boldMd"
								textTransform="capitalize"
								id="edgar-dashboardNavbar-profileCard-userName-text"
							>
								{doctorInfo?.firstname} {doctorInfo?.name}
							</Text>
						</HStack>
						<Icon as={SelectorIcon} w="12px" h="16px" />
					</HStack>
				</VStack>
			)}
		</>
	);
};

export default ProfileCard;
