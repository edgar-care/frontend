import { useState } from 'react';

const useToggle = (state = false) => {
	const [toggle, setToggle] = useState(state);
	const toggleHandler = () => setToggle(!toggle);
	return { toggle, toggleHandler };
};

export default useToggle;
