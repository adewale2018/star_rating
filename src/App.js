import Star from "./components/Star";
import Rating from './components/Rating'

const App = () => {
  return (
    <div className="App">
      <h2>Star Components:</h2>
      <Star color='indigo' />
      <Star color='magenta' isFilled />
      <h2>Rating Component:</h2>
      <Rating stars={3} />
    </div>
  );
};

export default App;
