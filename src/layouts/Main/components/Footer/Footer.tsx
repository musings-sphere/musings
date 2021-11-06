import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from '@components/atoms/Logo';

const Footer = (): JSX.Element => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Box
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
					width={1}
					flexDirection={{ xs: 'column', sm: 'row' }}
				>
					<Box sx={{ display: { xs: 'none', md: 'block' } }}>
					<Logo displayText />
					</Box>
					<Box display="flex" flexWrap={'wrap'} alignItems={'center'} flexDirection={"row"} justifyContent="flex-end">
							<Link href="/help" passHref>
								<Button sx={{ color: theme => theme.palette.text.secondary }} variant="text" size="small">
									Help
								</Button>
							</Link>

							<Link href="/writers" passHref>
								<Button sx={{ color: theme => theme.palette.text.secondary }} variant="text" size="small">
									Careers
								</Button>
							</Link>

							<Link href="/writers" passHref>
								<Button sx={{ color: theme => theme.palette.text.secondary }} variant="text" size="small">
									Privacy
								</Button>
							</Link>

							<Link href="/writers" passHref>
								<Button sx={{ color: theme => theme.palette.text.secondary }} variant="text" size="small">
									Terms
								</Button>
							</Link>

							<Link href="/writers" passHref>
								<Button sx={{ color: theme => theme.palette.text.secondary }} variant="text" size="small">
									About
								</Button>
							</Link>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Footer;
