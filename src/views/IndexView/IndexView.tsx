import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
	FooterNewsletter,
	Hero,
	MostViewedArticles,
	Tags,
} from './components';

const IndexView = (): JSX.Element => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		<Main>
			<Box
				sx={{
					position: 'relative',
					backgroundColor: theme.palette.alternate.main,
					backgroundImage: `linear-gradient(120deg, ${theme.palette.alternate.dark} 0%, ${theme.palette.background.paper} 100%)`,
					// marginTop: -13,
					// paddingTop: 13,
				}}
			>
				<Container>
					<Hero />
				</Container>
			</Box>
			{/*<Container>*/}
			{/*	<PopularNews />*/}
			{/*</Container>*/}
			{/*<Box bgcolor={'alternate.main'}>*/}
			{/*	<Container>*/}
			{/*		<FeaturedArticles />*/}
			{/*	</Container>*/}
			{/*</Box>*/}
			{/*<Container>*/}
			{/*	<Grid container spacing={isMd ? 4 : 2}>*/}
			{/*		<Grid item xs={12} md={8}>*/}
			{/*			<LatestStories />*/}
			{/*		</Grid>*/}
			{/*		{isMd ? (*/}
			{/*			<Grid item xs={12} md={4}>*/}
			{/*				<SidebarArticles />*/}
			{/*			</Grid>*/}
			{/*		) : null}*/}
			{/*	</Grid>*/}
			{/*</Container>*/}
				<Container>
					<Grid container spacing={isMd ? 8 : 0}>
						<Grid item xs={12} md={8}>
							<MostViewedArticles />
						</Grid>
						<Grid item xs={12} md={4}>
							<Tags />
						</Grid>
					</Grid>
				</Container>
			{/*<Container maxWidth={800}>*/}
			{/*	<Tags />*/}
			{/*</Container>*/}
			{/*<Container maxWidth={800} paddingY={'0 !important'}>*/}
			{/*	<Divider />*/}
			{/*</Container>*/}
			<Box bgcolor={'alternate.main'}>
			<Container>
				<FooterNewsletter />
			</Container>
			</Box>
		</Main>
	);
};

export default IndexView;
