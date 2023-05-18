import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import SuspenseWrapper from '../Components/Common/SuspenseWrapper';
import Footer from '../Components/Shared/Footer';
import Header from '../Components/Shared/Header';
import HeaderNav from '../Components/Shared/HeaderNav';
import { useGlobalContext } from '../Global/GlobalContext';
import ThemeLayout from './ThemeLayout';

const MainLayout = () => {
  const { localeString } = useGlobalContext();

  // Scroll-to-top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <ThemeLayout>
      <Helmet>
        <title>title</title>
      </Helmet>

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '0 !important',
        }}
      >
        <Header />
        <HeaderNav />
        <SuspenseWrapper>
          <Container
            maxWidth="xl"
            sx={{
              flexGrow: 1,
              height: 1,
            }}
          >
            <Outlet />
          </Container>
        </SuspenseWrapper>
        <Footer />
      </Box>
    </ThemeLayout>
  );
};

export default MainLayout;
