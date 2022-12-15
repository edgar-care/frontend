import { Dispatch, SetStateAction } from 'react';

const updateInfosMiddleware = (
	height: number,
	setHeightError: Dispatch<SetStateAction<boolean>>,
	weight: number,
	setWeightError: Dispatch<SetStateAction<boolean>>,
	doctorName: string,
	setDoctorNameError: Dispatch<SetStateAction<boolean>>,
): boolean => {
	if (height === 0) setHeightError(true);
	if (weight === 0) setWeightError(true);
	if (!doctorName) setDoctorNameError(true);

	return height !== 0 && weight !== 0 && doctorName !== '';
};

export default updateInfosMiddleware;
