import { Slider, SliderMark, SliderTrack, SliderFilledTrack, SliderThumb, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';

type IsType = {
	ageValue: number;
	setAgeValue: (v: number) => void;
};

const SlideBar = ({ ageValue, setAgeValue }: IsType) => {
	const [showTooltip, setShowTooltip] = useState(false);
	return (
		<Slider
			id="slider"
			defaultValue={20}
			min={0}
			max={100}
			colorScheme="blue"
			onChange={(v) => setAgeValue(v)}
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
		>
			<SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
				0
			</SliderMark>
			<SliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
				100
			</SliderMark>
			<SliderTrack>
				<SliderFilledTrack />
			</SliderTrack>
			<Tooltip
				hasArrow
				bg="teal.500"
				backgroundColor="#4965F2"
				color="white"
				placement="top"
				isOpen={showTooltip}
				label={`${ageValue}`}
			>
				<SliderThumb />
			</Tooltip>
		</Slider>
	);
};

export default SlideBar;
