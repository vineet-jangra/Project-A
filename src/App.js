import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer'; 
import Title from './Title/Title';
import Bottom from './Bottom/Bottom';
// import Introduction from './Introduction/Introduction'

function App() {
  return (
    <div className="App">
      {/* <Introduction /> */}
      <SortingVisualizer></SortingVisualizer>
      <Title />
    </div>
  );
}

export default App;
