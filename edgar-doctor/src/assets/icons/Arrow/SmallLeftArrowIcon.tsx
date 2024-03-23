import { createIcon } from '@chakra-ui/react';

const SmallLeftArrowIcon = createIcon({
	displayName: 'SmallLeftArrowIcon',
	viewBox: '0 0 8 8',
	path: (
		<g fill="currentColor">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 4C8 4.27614 7.77614 4.5 7.5 4.5H1.70711L3.85355 6.64645C4.04882 6.84171 4.04882 7.15829 3.85355 7.35355C3.65829 7.54882 3.34171 7.54882 3.14645 7.35355L0.146446 4.35355C-0.0488157 4.15829 -0.0488157 3.84171 0.146446 3.64645L3.14645 0.646447C3.34171 0.451184 3.65829 0.451184 3.85355 0.646447C4.04882 0.841709 4.04882 1.15829 3.85355 1.35355L1.70711 3.5L7.5 3.5C7.77614 3.5 8 3.72386 8 4Z"
				fill="currentColor"
			/>
		</g>
	),
});

export default SmallLeftArrowIcon;
