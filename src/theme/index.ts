import { CSSProperties } from 'react';
import { Theme, responsiveFontSizes, PaletteMode } from '@mui/material';
import { createTheme, ComponentsOverrides } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

const getTheme = (mode: PaletteMode): Theme =>
	responsiveFontSizes(
		createTheme({
			palette: mode === 'light' ? light : dark,
			shadows: shadows(mode),
			typography: {
				fontSize: 16,
				// fontWeightRegular: 600,
				// fontFamily: 'GoudyOldStyleMTW01, Georgia, Times New Roman, Times,serif',
				fontFamily: 'Google Sans, Roboto, Helvetica Neue, sans-serif',
				button: {
					textTransform: 'none',
					fontWeight: 'medium' as CSSProperties['fontWeight'],
					lineHeight: 2
				},
			},
			zIndex: {
				appBar: 1200,
				drawer: 1300,
			},
			shape: {
				borderRadius: 8,
			},
			components: {
				MuiButton: {
					styleOverrides: {
						label: {
							fontWeight: 600,
						},
						containedSecondary: mode === 'light' ? { color: 'white' } : {},
					} as ComponentsOverrides['MuiButton'],
				},
			},
		})
	);

export default getTheme;
