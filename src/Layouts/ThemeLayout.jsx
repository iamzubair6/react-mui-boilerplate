import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from 'react';

const ThemeLayout = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#4D7B52',
      },
      black: {
        main: '#000000',
      },
      black2: {
        main: '#0B0B0B',
      },
      black3: {
        main: '#0B0B0BCC',
      },
      white: {
        main: '#FFFFFF',
      },
      grey2: {
        main: '#ABA4A4',
      },
      grey3: {
        main: '#DEDDDD',
      },
    },
    typography: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            //Set core body defaults
            padding: 0,
            minHeight: '100vh',
            textRendering: 'optimizeSpeed',

            // use fonts for non-mui components
            '*': {
              fontFamily: ['Open Sans', 'sans-serif'].join(','),
            },

            // Box sizing rules
            '*,*::before,*::after': {
              boxSizing: 'border-box',
            },
            // Set core root defaults
            '& html:focus-within': { scrollBehavior: 'smooth' },
            'h1,h2,h3,h4,h5,h6,p': {
              margin: '0 !important',
            },

            // scrollbar
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
              background: '#e0e0e0',
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              background: '#4D7B52',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-track:hover, & *::-webkit-scrollbar-track:hover':
              {
                background: '#e0e0e0',
              },
            '&::-selection, & *::-selection': {
              backgroundColor: 'gray',
            },

            // Remove all animations, transitions and smooth scroll for people that prefer not to see them
            ['@media (prefers-reduced-motion: reduce)']: {
              '& html:focus-within': {
                scrollBehavior: 'auto',
              },
              '*,*::before,*::after': {
                animationDuration: '0.01ms !important',
                animationIterationCount: '1 !important',
                transitionDuration: '0.01ms !important',
                scrollBehavior: 'auto !important',
              },
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontFamily: 'Fraunces',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '72px',
            lineHeight: '62px',
            color: 'black',
          },
          h2: {
            fontFamily: 'Fraunces',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '54px',
            lineHeight: '53px',
            color: 'black',
          },
          h3: {
            fontFamily: 'Fraunces',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '38px',
            lineHeight: '44px',
            color: 'black',
          },
          h4: {
            fontFamily: 'Fraunces',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '28px',
            lineHeight: '35px',
            color: 'black',
          },
          h5: {
            fontFamily: 'Fraunces',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '26px',
            color: 'black',
          },
          body2: {
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '22px',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              border: 0,
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: '#ABA4A4',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default ThemeLayout;
