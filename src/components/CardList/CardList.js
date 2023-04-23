import { Card } from 'components/Card/Card';
import { useSelector } from 'react-redux';
import { selectTweets } from 'redux/tweets/selectors';

export const CardList = () => {
  const tweets = useSelector(selectTweets);

  return (
    <ul>
      {tweets.map(({ id, ...otherProps }) => (
        <Card key={id} id={id} props={otherProps} />
      ))}
    </ul>
  );
};
