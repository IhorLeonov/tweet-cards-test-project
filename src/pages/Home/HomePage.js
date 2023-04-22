import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h2>Page Home</h2>
      <Link to="/tweets">Tweets</Link>
    </>
  );
};

export default Home;
