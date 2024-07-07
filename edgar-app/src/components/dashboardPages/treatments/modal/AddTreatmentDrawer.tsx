import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerFooter, useBreakpointValue, VStack, Button, HStack, Icon, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import AddTreatmentIllustration from "assets/illustrations/AddTreatmentIllustration";

const AddTreatmentDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void}) => {
    // const {
    //     handleSubmit,
    //     formState: { errors },
    //     register,
    //     reset,
    // } = useForm<AddTreatmentType>({
    //     mode: 'onChange',
    // });

    const isMobile = useBreakpointValue({ base: true, sm: false});
    
    return (
        // <Drawer isOpen={isOpen} onClose={() => {reset({}); onClose();}} size="sm" placement="bottom">
        <Drawer isOpen={isOpen} onClose={() => onClose()} size="sm" placement="bottom">
            <DrawerOverlay />
            <DrawerBody p="24px 24px 16px 24px">
                <VStack w="100%" spacing="32px">
                    <VStack w="100%">
                        <Icon as={AddTreatmentIllustration} w="48px" h="48px" />
                        <Text size="xl" textAlign="center">
                            Ajoutez un traitement
                        </Text> 
                    </VStack>
                </VStack>
            </DrawerBody>
            <DrawerFooter p="16px 24px 24px 24px">
                {isMobile ? (
                    <VStack w="100%" spacing="12px">
                        <Button size="customMd" variant="validate" w="100%" onClick={() => {}}>
                            Ajouter
                        </Button>
                        <Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
                            Annuler
                        </Button>
                    </VStack>
                ) : (
                    <HStack w="100%" spacing="12px">
                        <Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
                            Annuler
                        </Button>
                        <Button size="customMd" variant="validate" w="100%" onClick={() => {}}>
                            Ajouter
                        </Button>
                    </HStack>
                )}
            </DrawerFooter>
            <DrawerContent borderRadius="12px"></DrawerContent>
        </Drawer>
    )
}

export default AddTreatmentDrawer;