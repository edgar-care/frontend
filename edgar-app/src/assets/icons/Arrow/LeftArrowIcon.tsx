import { createIcon } from '@chakra-ui/react';

const LeftArrowIcon = createIcon({
	displayName: 'LeftArrowIcon',
	viewBox: '0 0 14 10',
	path: (
		<g fill="currentColor">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14 5C14 4.72386 13.7761 4.5 13.5 4.5L1.70711 4.5L4.85355 1.35355C5.04882 1.15829 5.04882 0.841708 4.85355 0.646446C4.65829 0.451183 4.34171 0.451183 4.14645 0.646446L0.146446 4.64645C-0.0488157 4.84171 -0.0488157 5.15829 0.146446 5.35355L4.14645 9.35355C4.34171 9.54882 4.65829 9.54882 4.85355 9.35355C5.04882 9.15829 5.04882 8.84171 4.85355 8.64645L1.70711 5.5L13.5 5.5C13.7761 5.5 14 5.27614 14 5Z"
				fill="currentColor"
			/>
		</g>
	),
});

export default LeftArrowIcon;
