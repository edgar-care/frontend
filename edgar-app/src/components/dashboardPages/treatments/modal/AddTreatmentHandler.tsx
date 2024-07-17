import { useBreakpointValue, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import AddTreatmentDrawer from 'components/dashboardPages/treatments/modal/AddTreatmentDrawer';
import AddTreatmentModal from 'components/dashboardPages/treatments/modal/AddTreatmentModal';

import { TreatmentType } from 'types/dashboard/treatments/TreatmentType';

const AddTreatmentHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
		watch,
		reset,
	} = useForm<TreatmentType>({ mode: 'onChange', defaultValues: { treatments: [] } });
	const isMobile = useBreakpointValue({ base: true, smd: false });

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		onClose();
		reset();
		toast({ title: 'Votre traitement à été ajouté', status: 'success' });
	});

	return (
		<>
			{isMobile ? (
				<AddTreatmentDrawer
					isOpen={isOpen}
					onClose={() => {
						onClose();
						reset();
					}}
					onSubmit={onSubmit}
					register={register}
					control={control}
					errors={errors}
					watch={watch}
				/>
			) : (
				<AddTreatmentModal
					isOpen={isOpen}
					onClose={() => {
						onClose();
						reset();
					}}
					onSubmit={onSubmit}
					register={register}
					control={control}
					errors={errors}
					watch={watch}
				/>
			)}
		</>
	);
};

export default AddTreatmentHandler;
