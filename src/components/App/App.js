import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

import { fetchTweetCards } from 'redux/tweets/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from 'redux/tweets/selectors';

const Home = lazy(() => import('pages/Home/HomePage'));
const TweetsPage = lazy(() => import('pages/Tweets/TweetsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    const abortController = new AbortController();
    const abortOption = {
      signal: abortController.signal,
    };
    const quaryOptions = { page, abortOption };
    dispatch(fetchTweetCards(quaryOptions));
    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
