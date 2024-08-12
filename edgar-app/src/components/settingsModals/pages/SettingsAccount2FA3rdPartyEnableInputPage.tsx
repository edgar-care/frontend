import { useState } from 'react';
import { Button, HStack, PinInput, PinInputField, useToast } from '@chakra-ui/react';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import { useEnable2faWith3rdPartyMutation } from 'services/request/2fa';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

const SettingsAccount2FA3rdPartyEnableInputPage = (onPrevious: () => void, onNext: () => void): SettingsPageType => {
	const [triggerEnable2faWith3rdPartyMutation] = useEnable2faWith3rdPartyMutation();
	const [pinValue, setPinValue] = useState('');

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = () => {
		if (pinValue.length !== 6)
			toast({
				title: 'Code invalide',
				status: 'error',
			});
		else
			triggerEnable2faWith3rdPartyMutation(pinValue)
				.unwrap()
				.then(() => onNext())
				.catch(() => {
					toast({
						title: 'Code invalide',
						status: 'error',
					});
				});
	};

	return {
		headerTitle: 'Activer la double authentification avec une application tierce ?',
		headerSubtitle:
			'Pour s’assurer du bon fonctionnement, renseigner le code que votre application d’authentification affiche.',
		headerIcon: ShieldIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		bodyContent: (
			<HStack>
				<PinInput otp onChange={(e) => setPinValue(e)}>
					<PinInputField />
					<PinInputField />
					<PinInputField />
					<PinInputField />
					<PinInputField />
					<PinInputField />
				</PinInput>
			</HStack>
		),
		footerPrimaryButton: (
			<Button w="100%" onClick={onSubmit}>
				Continuer
			</Button>
		),
		footerSecondaryButton: (
			<Button variant="secondary" w="100%" onClick={() => onPrevious()}>
				Précédent
			</Button>
		),
	};
};

export default SettingsAccount2FA3rdPartyEnableInputPage;
