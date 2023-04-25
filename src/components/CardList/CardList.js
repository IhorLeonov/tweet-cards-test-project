import { Card } from 'components/Card/Card';
import { useSelector } from 'react-redux';
import { selectTweets } from 'redux/tweets/selectors';
import { List } from 'components/CardList/CardList.styled';

export const CardList = () => {
  const tweets = useSelector(selectTweets);

  return (
    <List>
      {tweets.map(({ id, ...otherProps }) => (
        <Card key={id} id={id} props={otherProps} />
      ))}
    </List>
  );
};
