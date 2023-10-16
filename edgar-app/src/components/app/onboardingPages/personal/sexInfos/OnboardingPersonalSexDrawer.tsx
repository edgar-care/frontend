import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Text, VStack } from '@chakra-ui/react';

import HighlightText from 'components/HighlightText';

const OnboardingPersonalSexDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => (
	<Drawer isOpen={isOpen} onClose={onClose} size="lg" placement="bottom">
		<DrawerOverlay />
		<DrawerContent p="24px" borderRadius="16px 16px 0px 0px">
			<DrawerBody p="0px">
				<VStack spacing="24px" w="100%" align="start">
					<VStack spacing="0px" align="start">
						<Text size="boldLg">
							Cette information est <HighlightText>importante</HighlightText> pour le médecin.
						</Text>
						<Text size="boldLg">
							J’en ai besoin afin de vous poser les <HighlightText>bonnes questions.</HighlightText>
						</Text>
					</VStack>
					<VStack spacing="16px" w="100%" align="start">
						<Text size="xl">Comment choisir ?</Text>
						<VStack align="start">
							<Text size="lg">
								<HighlightText fontWeight="700">Masculin:</HighlightText> Vous êtes né·e avec un sexe
								masculin et n’avez pas fait de changement
							</Text>
							<Text size="lg">
								<HighlightText fontWeight="700">Féminin:</HighlightText> Vous êtes né·e avec un sexe
								féminin et n’avez pas fait de changement
							</Text>
							<Text size="lg">
								<HighlightText fontWeight="700">Autre:</HighlightText> Vous avez eu recours à un
								changement de sexe ou n’êtes pas exclusivement concerné·e par les deux sexes précédents
							</Text>
						</VStack>
					</VStack>
				</VStack>
			</DrawerBody>
		</DrawerContent>
	</Drawer>
);

export default OnboardingPersonalSexDrawer;
