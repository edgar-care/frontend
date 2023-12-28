import { useEffect, useState } from 'react';
import { useBreakpointValue, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import OpenSlotDrawer from 'components/app/dashboardPages/agenda/modals/OpenSlotDrawer';
import OpenSlotModal from 'components/app/dashboardPages/agenda/modals/OpenSlotModal';

import { useGetSlotsQuery, useOpenSlotMutation } from 'services/request/slots';

import { type OpenSlotType } from 'types/app/dashboard/agenda/OpenSlotType';

import getAvailableHourSlot from 'utils/app/dashboard/agenda/getAvailableHourSlot';
import groupSlotByDay from 'utils/app/dashboard/agenda/groupSlotByDay';

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

	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<OpenSlotDrawer
					isOpen={isOpen}
					onClose={() => {
						onClose();
						reset();
						setAvailableHours([]);
					}}
					register={register}
					errors={errors}
					onSubmit={onSubmit}
					availableHours={availableHours}
				/>
			) : (
				<OpenSlotModal
					isOpen={isOpen}
					onClose={() => {
						onClose();
						reset();
						setAvailableHours([]);
					}}
					register={register}
					errors={errors}
					onSubmit={onSubmit}
					availableHours={availableHours}
				/>
			)}
		</>
	);
};
export default OpenSlotHandler;
