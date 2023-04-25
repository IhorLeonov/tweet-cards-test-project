import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { GlobalStyle } from 'constants/GlobalStyle';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { AppBar } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Container>
        {/* <main> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        {/* </main> */}
      </Container>
      <GlobalStyle />
    </>
  );
};
