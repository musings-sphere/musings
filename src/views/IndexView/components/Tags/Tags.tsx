import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

const mock = [
	'UX',
	'Design',
	'Themes',
	'Photography',
	'Material-UI',
	'Frontend',
	'JS',
	'NextJS',
	'NodeJS',
	'JavaScript',
	'TypeScript',
	'HTML',
	'CSS',
	'HTML5',
	'CSS3',
	'Modern',
	'Good',
	'Beautiful design',
	'Material design',
	'UI',
];

const Tags = (): JSX.Element => {
	const theme = useTheme();

	return (
		<Box position={'sticky'}
				 top={theme.spacing(10)}
				 className={'sticky'}>
			<Typography
				variant="body1"
				// align={'center'}
				sx={{
					fontWeight: 700,
					marginBottom: 2,
					marginLeft: 0.5
				}}
			>
				Discover more of your liking
			</Typography>
			<Box display={'flex'} flexWrap={'wrap'}>
				{mock.map((item) => (
					<Chip
						key={item}
						component={'a'}
						href={''}
						label={item}
						clickable
						sx={{ margin: 0.5 }}
					/>
				))}
			</Box>
		</Box>
	);
};

export default Tags;
