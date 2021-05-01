import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer'; 
import Title from './Title/Title';
import Bottom from './Bottom/Bottom';

function App() {
  return (
    <div className="App">
      <Title />
      <SortingVisualizer></SortingVisualizer>
      {/* <Bottom /> */}
    </div>
  );
}

export default App;
