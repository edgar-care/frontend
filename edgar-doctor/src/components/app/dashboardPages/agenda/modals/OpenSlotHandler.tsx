import { useEffect, useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ModalHandler from 'components/modals/ModalHandler';
import OpenSlotModalContent from 'components/app/dashboardPages/agenda/modals/OpenSlotModalContent';

import { useGetSlotsQuery, useOpenSlotMutation } from 'services/request/slots';

import { type OpenSlotType } from 'types/app/dashboard/agenda/OpenSlotType';

import getAvailableHourSlot from 'utils/app/dashboard/agenda/getAvailableHourSlot';
import groupSlotByDay from 'utils/app/dashboard/agenda/groupSlotByDay';

import CheckCircleIllustration from 'assets/illustrations/CheckCircleIllustration';

const OpenSlotHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const { data: openedSlot } = useGetSlotsQuery();
	const [triggerOpenSlot] = useOpenSlotMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
		watch,
	} = useForm<OpenSlotType>({
		mode: 'onChange',
	});
	const [availableHours, setAvailableHours] = useState<string[]>([]);

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		triggerOpenSlot({
			start_date: new Date(`${data.date} ${data.startTime}`).getTime(),
			end_date: new Date(`${data.date} ${data.startTime}`).getTime() + 1800000,
		})
			.unwrap()
			.then(() => {
				toast({ title: 'Le créneaux a bien été ouvert', status: 'success' });
				reset();
				onClose();
			})
			.catch(() => {
				toast({ title: 'Une erreur est survenue', status: 'error' });
			});
	});

	useEffect(() => {
		if (watch('date')) setAvailableHours(getAvailableHourSlot(groupSlotByDay(openedSlot || [])[watch('date')]));
	}, [watch('date'), openedSlot]);

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size="3xl"
			headerTitle="Ouvrir un créneau"
			headerSubtitle="Sélectionner la date et l’horraire du créneau à ouvrir."
			headerIcon={CheckCircleIllustration}
			bodyContent={<OpenSlotModalContent register={register} errors={errors} availableHours={availableHours} />}
			footerPrimaryButton={
				<Button w="100%" onClick={onSubmit}>
					Ouvrir le créneau
				</Button>
			}
			footerSecondaryButton={
				<Button variant="secondary" w="100%" onClick={onClose}>
					Annuler
				</Button>
			}
		/>
	);
};
export default OpenSlotHandler;
