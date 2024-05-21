import { createIcon } from '@chakra-ui/react';

const SmallUpArrowIcon = createIcon({
	displayName: 'SmallUpArrowIcon',
	viewBox: '0 0 8 8',
	path: (
		<g fill="currentColor">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 8C4.27614 8 4.5 7.77614 4.5 7.5V1.70711L6.64645 3.85355C6.84171 4.04882 7.15829 4.04882 7.35355 3.85355C7.54882 3.65829 7.54882 3.34171 7.35355 3.14645L4.35355 0.146446C4.15829 -0.0488157 3.84171 -0.0488157 3.64645 0.146446L0.646447 3.14645C0.451184 3.34171 0.451184 3.65829 0.646447 3.85355C0.841709 4.04882 1.15829 4.04882 1.35355 3.85355L3.5 1.70711V7.5C3.5 7.77614 3.72386 8 4 8Z"
				fill="currentColor"
			/>
		</g>
	),
});

export default SmallUpArrowIcon;
