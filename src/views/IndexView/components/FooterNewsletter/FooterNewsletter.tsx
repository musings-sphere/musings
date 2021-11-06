import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FooterNewsletter = (): JSX.Element => {
	const theme = useTheme();
	const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
		defaultMatches: true,
	});

	return (
		<Box>
			<Box marginBottom={4}>
				<Typography
					fontWeight={700}
					variant={'h4'}
					align={'center'}
					gutterBottom
				>
					Get our stories delivered
				</Typography>
			</Box>
			<Box maxWidth={600} margin={'0 auto'}>
				<Box
					component={'form'}
					noValidate
					autoComplete="off"
					sx={{
						'& .MuiInputBase-input.MuiOutlinedInput-input': {
							bgcolor: 'background.paper',
						},
					}}
				>
					<Box
						display="flex"
						flexDirection={{ xs: 'column', md: 'row' }}
						alignItems={{ xs: 'center', md: 'flex-start' }}
						justifyContent={{ xs: 'center' }}
					>
						<Box
							flex={'1 1 auto'}
							component={TextField}
							label="Enter your email"
							variant="outlined"
							color="primary"
							fullWidth
							height={54}
							sx={{
								maxWidth: 422,
							}}
						/>
						<Box
							fullWidth={isSm}
							component={Button}
							variant="contained"
							color="primary"
							size="large"
							height={54}
							marginTop={{ xs: 2, md: 0 }}
							marginLeft={{ md: 2 }}
						>
							Subscribe
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default FooterNewsletter;
