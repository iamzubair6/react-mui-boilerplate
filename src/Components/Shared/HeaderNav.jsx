import { Box, Container } from '@mui/material';
import React from 'react';
import { useGlobalContext } from '../../Global/GlobalContext';

const HeaderNav = () => {
  const { isLocaleBn, switchLocale } = useGlobalContext();

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: '46px',
        borderBottom: '1px solid',
        borderColor: 'grey2.main',
        display: 'flex',
        // justifyContent: "space-between",
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: '15px', md: 'auto' },
        alignItems: { md: 'center' },
        paddingX: { xs: '20px', md: '60px' },
        paddingY: { xs: '20px', md: 0 },
      }}
    >
      <Box>header nav</Box>
    </Container>
  );
};

export default HeaderNav;
