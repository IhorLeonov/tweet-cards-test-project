import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { fetchTweetCards } from 'redux/tweets/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsFatching } from 'redux/tweets/selectors';

const Home = lazy(() => import('pages/Home/HomePage'));
const TweetsPage = lazy(() => import('pages/Tweets/TweetsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFatching = useSelector(selectIsFatching);

  useEffect(() => {
    dispatch(fetchTweetCards());
  }, [dispatch]);

  return isFatching ? (
    <b>Refreshing user data...</b>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<TweetsPage />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
