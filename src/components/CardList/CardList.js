import { Card } from 'components/Card/Card';
import { useSelector } from 'react-redux';
import { selectCards } from 'redux/tweets/selectors';

export const CardList = () => {
  const cards = useSelector(selectCards);

  return (
    <ul>
      {cards.map(({ id, ...otherProps }) => (
        <Card key={id} id={id} props={otherProps} />
      ))}
    </ul>
  );
};
