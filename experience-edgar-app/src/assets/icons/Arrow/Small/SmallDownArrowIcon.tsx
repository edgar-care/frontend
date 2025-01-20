import { createIcon } from '@chakra-ui/react';

const SmallDownArrowIcon = createIcon({
	displayName: 'SmallDownArrowIcon',
	viewBox: '0 0 8 8',
	path: (
		<g fill="currentColor">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V6.29289L6.64645 4.14645C6.84171 3.95118 7.15829 3.95118 7.35355 4.14645C7.54882 4.34171 7.54882 4.65829 7.35355 4.85355L4.35355 7.85355C4.15829 8.04882 3.84171 8.04882 3.64645 7.85355L0.646447 4.85355C0.451184 4.65829 0.451184 4.34171 0.646447 4.14645C0.841709 3.95118 1.15829 3.95118 1.35355 4.14645L3.5 6.29289V0.5C3.5 0.223858 3.72386 0 4 0Z"
				fill="currentColor"
			/>
		</g>
	),
});

export default SmallDownArrowIcon;
