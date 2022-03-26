import React, { Component } from "react";
import "./SortingVisualizer.css";
import selectionSortAlgorithm from "../Algorithms/selection_sort";
import bubbleSortAlgorithm from "../Algorithms/bubble_sort";
import insertionSortAlgorithm from "../Algorithms/insertion_sort";
import heapSortAlgorithm from "../Algorithms/heap_sort";
import mergeSortAlgorithm from "../Algorithms/merge_sort";
import quickSortMedian from "../Algorithms/quick_sort";
import getWidth from "./utils/width";

import Navbar from "./Navbar/Navbar";

class SortingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      isSorted: false,
    };
  }
  componentDidMount() {
    this.handleChange();
  }
  componentDidUpdate() {
    if (this.state.isSorted === true) {
      setTimeout(() => {
        for (let i = 0; i < this.state.array.length; i++) {
          document.getElementsByClassName("array-bar-div")[
            i
          ].style.backgroundColor = "turquoise";
        }
      }, 1000);
    }
  }
  resetArray(size) {
    if (size === -1) {
      size = 50;
    }
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(randomValue(20, 300));
    }
    this.setState({
      array: array,
    });
  }
  handleChange = (e) => {
    console.log(this.state)
    let size = -1;
    if (e) {
      e.preventDefault();
      size = e.target.value;
    } else {
      size = document.getElementsByTagName("input")[0].value;
    }
    this.resetArray(size);
  };
  async insertionSort() {
    const newArray = await insertionSortAlgorithm(this.state.array);
    this.setState({ array: newArray, isSorted: true });
  }
  async bubbleSort() {
    const newArray = await bubbleSortAlgorithm(this.state.array);
    this.setState({ array: newArray, isSorted: true });
  }
  async selectionSort() {
    const newArray = await selectionSortAlgorithm(this.state.array);
    this.setState({ array: newArray, isSorted: true });
  }
  async quickSort() {
    const array = this.state.array;
    const newArray = await quickSortMedian(array, 0, array.length - 1);
    this.setState({ array: newArray, isSorted: true});
  }
  async heapSort() {
    const newArray = await heapSortAlgorithm(this.state.array);
    this.setState({ array: newArray, isSorted: true });
  }
  async mergeSort() {
    const newArray = await mergeSortAlgorithm(this.state.array);
    this.setState({ array: newArray, isSorted: true });
  }
  render() {
    const array = this.state.array;
    let width = getWidth(array.length);

    return (
      <React.Fragment>
        <Navbar 

        changeSize={(e) => this.handleChange(e)}
        bubbleSort={() => this.bubbleSort()} 
        insertionSort={() => this.insertionSort()} 
        selectionSort={() => this.selectionSort()}
        mergeSort={() => this.mergeSort()}
        quickSort={() => this.quickSort()}
        heapSort={() => this.heapSort()} />
         
        <div className="array-container">
          {array.map((value, id) => {
            return (
              <div className="array-bar-div" key={id} style={{ height: `${value}px`, width: width }}>{" "}</div>
            );
          })}
        </div>
       
      </React.Fragment>
    );
  }
}
const randomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingVisualizer;