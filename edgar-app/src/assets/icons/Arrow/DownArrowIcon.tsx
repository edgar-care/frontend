import { createIcon } from '@chakra-ui/react';

const DownArrowIcon = createIcon({
	displayName: 'DownArrowIcon',
	viewBox: '0 0 12 12',
	path: (
		<g fill="currentColor">
			<path
				d="M5.25 0C5.66421 0 6 0.335786 6 0.75V9.43934L9.21967 6.21967C9.51256 5.92678 9.98744 5.92678 10.2803 6.21967C10.5732 6.51256 10.5732 6.98744 10.2803 7.28033L5.78033 11.7803C5.48744 12.0732 5.01256 12.0732 4.71967 11.7803L0.21967 7.28033C-0.0732233 6.98744 -0.0732233 6.51256 0.21967 6.21967C0.512563 5.92678 0.987438 5.92678 1.28033 6.21967L4.5 9.43934V0.75C4.5 0.335786 4.83579 0 5.25 0Z"
				fill="#2E4C9A"
			/>
		</g>
	),
});

export default DownArrowIcon;
