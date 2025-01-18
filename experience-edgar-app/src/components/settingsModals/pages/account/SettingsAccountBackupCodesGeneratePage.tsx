import { useEffect, useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';

import BackupCodes from 'components/settingsModals/BackupCodes';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import { useGenerateBackupCodesMutation } from 'services/request/2fa';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

const SettingsAccountBackupCodesGeneratePage = (selectedPageStack: string[], onNext: () => void): SettingsPageType => {
	const defaultBackupCodes = [
		'XXXX XXXX',
		'XXXX XXXX',
		'XXXX XXXX',
		'XXXX XXXX',
		'XXXX XXXX',
		'XXXX XXXX',
		'XXXX XXXX',
		'XXXX XXXX',
		'XXXX XXXX',
		'XXXX XXXX',
	];
	const [backupCodes, setBackupCodes] = useState<string[]>(defaultBackupCodes);

	const [triggerGenerateBackupCodes] = useGenerateBackupCodesMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	useEffect(() => {
		if (selectedPageStack[selectedPageStack.length - 1] !== 'settingsAccountBackupCodesGenerate') return;
		triggerGenerateBackupCodes()
			.unwrap()
			.then((res) => setBackupCodes(res))
			.catch(() => toast({ title: 'Erreur lors de la génération des codes de sauvegarde', status: 'error' }));
	}, [selectedPageStack]);

	return {
		headerTitle: 'Vos codes de sauvegarde',
		headerSubtitle:
			'Avec la double authentification activée, vous aurez besoin de ces codes de sauvegarde si vous n’avez plus accès à votre appareil.',
		headerIcon: ShieldIllustration,
		hasProfileBanner: false,
		hasReturnButton: false,
		sections: [],
		bodyContent: <BackupCodes backupCodes={backupCodes} />,
		footerPrimaryButton: (
			<Button
				w="100%"
				onClick={() => {
					setBackupCodes(defaultBackupCodes);
					onNext();
				}}
			>
				Mes codes sont sauvegardés
			</Button>
		),
	};
};

export default SettingsAccountBackupCodesGeneratePage;
