import { Button, useToast } from '@chakra-ui/react';
import DisableAccountIllustration from 'assets/illustrations/DisableAccountIllustration';
import type { SettingsPageType } from 'types/navigation/SettingsPageType';

const SettingsAccountDisablePage = (
    onCancel: () => void,
): SettingsPageType => {

    const toast = useToast({ duration: 3000, isClosable: true });
    
    return {
        headerTitle: 'Désactiver votre compte',
        headerSubtitle: 'Vous ne pourrez plus vous connecter à votre compte. Cependant vous pourrez le réactiver par la suite, si vous le souhaitez.',
        headerIcon: DisableAccountIllustration,
        hasProfileBanner: false,
        hasReturnButton: true,
        sections: [],
        footerPrimaryButton: (
            <Button w="100%" variant="delete">
                Désactiver le compte
            </Button>
        ),
        footerSecondaryButton: (
            <Button variant="secondary" w="100%" onClick={() => onCancel()}>
                Annuler
            </Button>
        )
    }
}

export default SettingsAccountDisablePage;