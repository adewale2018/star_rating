import Star from "./components/Star";

const App = () => {
  return (
    <div className="App">
      <h2>Star Components:</h2>
      <Star color='indigo' />
      <Star color='magenta' isFilled />
    </div>
  );
};

export default App;
