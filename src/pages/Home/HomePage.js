import { Link } from 'react-router-dom';
import { HomePage } from './HomePage.styled';

const Home = () => {
  return (
    <HomePage>
      <h1>Welcome!</h1>
      <Link to="/tweets">Go to tweets</Link>
    </HomePage>
  );
};

export default Home;
