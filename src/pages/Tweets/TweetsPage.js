import { Link } from 'react-router-dom';
import { CardList } from 'components/CardList/CardList';

const TweetsPage = () => {
  return (
    <>
      <h2>Page Tweets</h2>
      <Link to="/">Back</Link>
      <CardList />
    </>
  );
};

export default TweetsPage;
