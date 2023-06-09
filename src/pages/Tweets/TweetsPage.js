import { useSelector, useDispatch } from 'react-redux';
import { fetchTweetCards } from 'redux/tweets/operations';

import {
  selectSubscriptions,
  selectPage,
  selectIsLoading,
  selectTweets,
} from 'redux/tweets/selectors';

import { CardList } from 'components/CardList/CardList';
import { SelectFilter } from 'components/Select/Select';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { handleSroll, pad } from 'services';

import {
  Tools,
  BackButton,
  Info,
  Wrap,
  LoadMoreBtn,
} from './TweetsPage.styled';

const TweetsPage = () => {
  const following = useSelector(selectSubscriptions);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const tweets = useSelector(selectTweets);
  // const filteredCards = useSelector(selectFilteredCards);

  const handleLoadMore = () => {
    dispatch(
      fetchTweetCards({
        page,
      })
    );

    handleSroll();
  };

  return (
    <>
      <Tools>
        <BackButton to="/">
          {<MdOutlineArrowBackIosNew style={{ marginRight: 10 }} />}Back
        </BackButton>
        <SelectFilter />
        <Info>
          <Wrap>{pad(following.length)}</Wrap> Following
        </Info>
      </Tools>
      <CardList />

      {page > 1 && (
        <LoadMoreBtn
          disabled={tweets.length >= 30 || isLoading}
          type="button"
          onClick={handleLoadMore}
        >
          <FiPlus style={{ marginRight: 10 }} /> Load more
        </LoadMoreBtn>
      )}
    </>
  );
};

export default TweetsPage;
