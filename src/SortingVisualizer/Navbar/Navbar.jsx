import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      algoName: '',
      disableButton: false,
      shouldDisable: false,
    }
  }
  selectAlgorithm(name) {
    if(!name) return;
    this.setState({ algoName: name });
  }
  async callAlgorithm() {
    const name = this.state.algoName;
    document.getElementsByClassName("visualize-main-button")[0].style.backgroundColor = "red";
    document.getElementsByClassName("visualize-main-button")[0].style.cursor = "not-allowed";

    this.setState({ shouldDisable: true });
    if(!name || this.state.shouldDisable) return;
    if(name === "Bubble Sort") {
      await this.props.bubbleSort();
    } else if(name === "Insertion Sort") {
      await this.props.insertionSort();
    } else if(name === "Selection Sort") {
      await this.props.selectionSort();
    } else if(name === "Merge Sort") {
      await this.props.mergeSort();
    } else if(name === "Quick Sort") {
      console.log(this.state);
      await this.props.quickSort();
    } else if(name === "Heap Sort") {
      await this.props.heapSort();
    }
    this.setState({ shouldDisable: false });
    document.getElementsByClassName("visualize-main-button")[0].style.backgroundColor = "#4e6083";
    document.getElementsByClassName("visualize-main-button")[0].style.cursor = "pointer";
  }


  render() {

    return (
      <div id="navbar-div">
      <nav className="navbar" id="style-for-nav">
        <a href="#" onClick={() => { if(this.state.shouldDisable) return; this.props.changeSize()}} className="name-reload-div" > Generate new array</a>
        <div className="change-size" > change size</div>
        <input id="changeSize" type="range" min="5" max="200" r//   style={{background: color, cursor: cursor}}
                  disabled={this.state.shouldDisable ? "disabled" : null}
                    onChange={(e) => this.props.changeSize(e)} />
 
        <div className="dropdown dropdown-style">
          <button className="dropdown-toggle dropdown-toggler-btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  Algorithms</button>
          <div className="dropdown-menu" id="style-for-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item options-for-algo" onClick={() => this.selectAlgorithm("Bubble Sort")} href="#"> Bubble Sort</a>
            <a className="dropdown-item options-for-algo" onClick={() => this.selectAlgorithm("Insertion Sort")} href="#"> Insertion Sort</a>
            <a className="dropdown-item options-for-algo" onClick={() => this.selectAlgorithm("Selection Sort")} href="#"> Selection Sort</a>
            <a className="dropdown-item options-for-algo" onClick={() => this.selectAlgorithm("Merge Sort")} href="#"> Merge Sort</a>
            <a className="dropdown-item options-for-algo" onClick={() => this.selectAlgorithm("Quick Sort")} href="#"> Quick Sort</a>
            <a className="dropdown-item options-for-algo" onClick={() => this.selectAlgorithm("Heap Sort")} href="#"> Heap Sort</a>
          </div>
        </div>
        <button className="visualize-main-button" disabled={this.state.disableButton} onClick={() => this.callAlgorithm()} > Visualize {this.state.algoName.length > 0 ? this.state.algoName : ' '} </button>
      </nav>
    </div>
    );
  }
}
export default Navbar;