import { createIcon } from '@chakra-ui/react';

const ClockIcon = createIcon({
	displayName: 'ClockIcon',
	viewBox: '0 0 16 16',
	path: (
		<g fill="currentColor">
			<path
				d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8 3.5C8 3.22386 7.77614 3 7.5 3C7.22386 3 7 3.22386 7 3.5V9C7 9.17943 7.09614 9.3451 7.25193 9.43412L10.7519 11.4341C10.9917 11.5711 11.2971 11.4878 11.4341 11.2481C11.5711 11.0083 11.4878 10.7029 11.2481 10.5659L8 8.70984V3.5Z"
				fill="currentColor"
			/>
		</g>
	),
});

export default ClockIcon;
