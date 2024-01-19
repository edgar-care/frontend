import { Box } from '@chakra-ui/react';

const MirageLoader = ({ size, color, speed }: { size: string; color: string; speed: string }): JSX.Element => (
	<Box
		sx={{
			'.container': {
				'--uib-size': `${size}px`,
				'--uib-color': color,
				'--uib-speed': `${speed}s`,
				'--uib-dot-size': 'calc(var(--uib-size) * 0.23)',
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				height: 'var(--uib-size)',
				width: 'var(--uib-dot-size)',
				filter: "url('#uib-jelly-ooze')",
			},

			'.dot': {
				position: 'absolute',
				top: 'calc(50% - var(--uib-dot-size) / 2)',
				left: 'calc(0px - var(--uib-dot-size) / 2)',
				display: 'block',
				height: 'var(--uib-dot-size)',
				width: 'var(--uib-dot-size)',
				borderRadius: '50%',
				backgroundColor: 'var(--uib-color)',
				animation: 'stream var(--uib-speed) linear infinite both',
				transition: 'background-color 0.3s ease',
			},

			'.dot:nth-child(2)': {
				animationDelay: 'calc(var(--uib-speed) * -0.2)',
			},
			'.dot:nth-child(3)': {
				animationDelay: 'calc(var(--uib-speed) * -0.4)',
			},
			'.dot:nth-child(4)': {
				animationDelay: 'calc(var(--uib-speed) * -0.6)',
			},
			'.dot:nth-child(5)': {
				animationDelay: 'calc(var(--uib-speed) * -0.8)',
			},

			'@keyframes stream': {
				'0%, 100%': {
					transform: 'translateX(0) scale(0)',
				},

				'50%': {
					transform: 'translateX(calc(var(--uib-size) * 0.5)) scale(1)',
				},

				'99.999%': {
					transform: 'translateX(calc(var(--uib-size))) scale(0)',
				},
			},
		}}
	>
		<Box className="container">
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
		</Box>
		<svg width="0" height="0" className="svg">
			<defs>
				<filter id="uib-jelly-ooze">
					<feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
						result="ooze"
					/>
					<feBlend in="SourceGraphic" in2="ooze" />
				</filter>
			</defs>
		</svg>
	</Box>
);

export default MirageLoader;
