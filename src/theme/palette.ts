import { PaletteMode } from '@mui/material';

export const light = {
	alternate: {
		main: '#f7f9fc',
		dark: '#edf1f7',
	},
	cardShadow: 'rgba(23, 70, 161, .11)',
	common: {
		black: '#000',
		white: '#fff',
	},
	mode: 'light' as PaletteMode,
	primary: {
		main: '#377dff',
		light: '#467de3',
		dark: '#2f6ad9',
		contrastText: '#fff',
	},
	secondary: {
		light: '#ffb74d',
		main: '#f9b934',
		dark: '#FF9800',
		contrastText: 'rgba(0, 0, 0, 0.87)',
	},
	text: {
		primary: '#2d3748',
		secondary: '#646e73',
	},
	divider: 'rgba(0, 0, 0, 0.12)',
	background: {
		paper: '#ffffff',
		default: '#ffffff',
		level3: '#62a1e81f',
		level2: '#f5f5f5',
		level1: '#ffffff',
		contrast: 'rgba(255, 255, 255, 0.12)',
	},
};

export const dark = {
	alternate: {
		main: '#1a2138',
		dark: '#151a30',
	},
	cardShadow: 'rgba(0, 0, 0, .11)',
	common: {
		black: '#000',
		white: '#fff',
	},
	mode: 'dark' as PaletteMode,
	primary: {
		main: '#1976d2',
		light: '#2196f3',
		dark: '#0d47a1',
		contrastText: '#fff',
		// main: '#318162',
		// light: '#62b18f',
		// dark: '#005438',
		// contrastText: '#fff',
	},
	secondary: {
		light: '#FFEA41',
		main: '#FFE102',
		dark: '#DBBE01',
		contrastText: 'rgba(0, 0, 0, 0.87)',
	},
	text: {
		primary: '#EEEEEF',
		secondary: '#AEB0B4',
	},
	divider: 'rgba(255, 255, 255, 0.12)',
	background: {
		paper: '#121212',
		default: '#121212',
		level3: '#62a1e81f',
		level2: '#333',
		level1: '#2D3748',
		contrast: 'rgba(255, 255, 255, 0.12)',
	},
};
