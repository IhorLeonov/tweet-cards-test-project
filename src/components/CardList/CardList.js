import { Card } from 'components/Card/Card';
import { useSelector } from 'react-redux';
import { selectFilteredCards } from 'redux/tweets/selectors';
import { List } from 'components/CardList/CardList.styled';

export const CardList = () => {
  // const tweets = useSelector(selectTweets); // without filtering
  const filteredCards = useSelector(selectFilteredCards);

  return (
    <List>
      {filteredCards.map(({ id, ...otherProps }) => (
        <Card key={id} id={id} props={otherProps} />
      ))}
    </List>
  );
};
