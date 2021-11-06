// import react library
import { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {
	delay?: number;
}

const ColorLinearProgress = styled(LinearProgress)(({ theme }) => ({
	colorPrimary: {
		backgroundColor: theme.palette.alternate.main,
	},
	barColorPrimary: {
		backgroundColor: theme.palette.primary.main,
	},
}));

const LinearProgressBar = ({ delay = 1000 }: Props): JSX.Element | null => {
	const [completed, setCompleted] = useState<number>(0);
	const [visibility, setVisibility] = useState<boolean>(false);

	const progress = () => {
		setCompleted((oldCompleted) => {
			if (oldCompleted === 100) return 0;
			const diff = Math.random() * 10;
			return Math.min(oldCompleted + diff, 100);
		});
	};

	useEffect(() => {
		const timer = setInterval(progress, 500);
		// cleanup function
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => setVisibility(true), delay);
		// cleanup function
		return () => clearTimeout(timer);
	}, [delay]);

	return visibility ? (
		<ColorLinearProgress variant="determinate" value={completed} />
	) : null;
};

export default LinearProgressBar;
