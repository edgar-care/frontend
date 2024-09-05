const deviceFormatTime = (lastConnectedTime: number): string => {
	const seconds = Math.floor((Date.now() - lastConnectedTime) / 1000);
	const intervals = [
		{ label: 'année', seconds: 31536000 },
		{ label: 'mois', seconds: 2592000 },
		{ label: 'jour', seconds: 86400 },
		{ label: 'heure', seconds: 3600 },
		{ label: 'minute', seconds: 60 },
		{ label: 'seconde', seconds: 1 },
	];

	for (let i = 0; i < intervals.length; i += 1) {
		const interval = intervals[i];
		const count = Math.floor(seconds / interval.seconds);
		if (count > 0) return `Il y a ${count} ${interval.label}${count > 1 ? 's' : ''}`;
	}
	return 'Il y a quelques secondes';
};

export default deviceFormatTime;
