import { useBreakpointValue } from '@chakra-ui/react';

import AddTreatmentDrawer from 'components/dashboardPages/treatments/modal/AddTreatmentDrawer';
import AddTreatmentModal from 'components/dashboardPages/treatments/modal/AddTreatmentModal';

const AddTreatmentHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void}): JSX.Element => {
    const isMobile = useBreakpointValue({ base: true, smd: false});

    return(
        <>
            {isMobile ? (
                <AddTreatmentDrawer isOpen={isOpen} onClose={onClose} />
            ) : (
                <AddTreatmentModal isOpen={isOpen} onClose={onClose} />
            )}
        </>
    );
};

export default AddTreatmentHandler;