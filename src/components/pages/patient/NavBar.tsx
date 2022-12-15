import { Button, Img, VStack, Text, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import {
	BsQuestionCircle,
	BsChatText,
	BsClipboardPlus,
	BsCalendar3,
	BsFileEarmarkText,
	BsHouseDoor,
} from 'react-icons/bs';

import HelpCenter from './helpCenter';
import TabCard from './TabCard';

const NavBar = (): JSX.Element => {
	const tabs = [
		{
			name: 'Accueil',
			path: '/app/patient',
			icon: BsHouseDoor,
		},
		{
			name: 'Rendez-vous',
			path: '/app/patient/appointments',
			icon: BsCalendar3,
		},
		{
			name: 'Documents',
			path: '/app/patient/documents',
			icon: BsFileEarmarkText,
		},
		{
			name: 'Dossier medical',
			path: '/app/patient/medical',
			icon: BsClipboardPlus,
		},
	];

	const message = {
		name: 'Messagerie',
		path: '/app/patient/chat',
		icon: BsChatText,
	};

	const help = {
		name: "Besoin d'aide ?",
		path: '/app/patient/chat',
		icon: BsQuestionCircle,
	};

	const surname = 'Edgar';
	const name = 'Care';

	return (
		<VStack
			spacing="100px"
			w="275px"
			h="100vh"
			p="32px 36px"
			bg="blue.100"
			position="fixed"
			left={0}
			top={0}
			zIndex={10}
		>
			<Link href="/">
				<Img src="/assets/edgar.care-logo.svg" w="200px" h="auto" />
			</Link>
			<VStack spacing="82px" w="100%">
				<VStack spacing="16px">
					{tabs.map((tab) => (
						<TabCard name={tab.name} path={tab.path} key={tab.path} icon={tab.icon} />
					))}
				</VStack>
				<VStack spacing="16px">
					<HelpCenter name={message.name} path={message.path} icon={message.icon} />
					<Button size="md">Prendre un rendez-vous</Button>
				</VStack>
				<VStack w="100%" spacing="16px">
					<HelpCenter name={help.name} path={help.path} icon={help.icon} />
					<HStack p="8px 16px" w="100%" bg="blue.900" borderRadius="16px" spacing="16px">
						<Img
							src={`https://source.boringavatars.com/marble/32/${surname}%20${name}?colors=A9B5F2,6811A6,1636D9,BF13A4`}
						/>
						<Text size="boldLg" color="blue.100">
							{surname} {name}
						</Text>
					</HStack>
				</VStack>
			</VStack>
		</VStack>
	);
};

export default NavBar;
