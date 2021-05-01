import React, { Component } from 'react';
import Menu from './Menu/Menu';
import './SortingVisualizer.css';
import selectionSortAlgorithm from '../Algorithms/selection_sort';
import bubbleSortAlgorithm from '../Algorithms/bubble_sort';
import insertionSortAlgorithm from '../Algorithms/insertion_sort';
import quickSortAlgorithm from '../Algorithms/quick_sort';
import heapSortAlgorithm from '../Algorithms/heap_sort';
import mergeSortAlgorithm from '../Algorithms/merge_sort';
import quickSortMedian from '../Algorithms/quick_sort_median';
import getWidth from './utils/width';

class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            isSorted: false, 
        }
    }
    componentDidMount() {
        this.handleChange();
    }
    componentDidUpdate() {
        if(this.state.isSorted === true) {
            setTimeout(() => {
                for(let i = 0; i < this.state.array.length; i++) {
                    document.getElementsByClassName('array-bar-div')[i].style.backgroundColor = 'turquoise';
                }
            }, 2000);
        }
    }
    resetArray(size) {
        if(size === -1) {
            size = 50;
        }
        const array = [];
        for(let i = 0; i < size; i++) {
            array.push(randomValue(10, 300));
        }
        this.setState({
            array: array
        });
    }
    handleChange = (e) => {
        let size = -1;
        if(e) {
            e.preventDefault(); 
            size = e.target.value;
        }
        else {
            size = document.getElementsByTagName('input')[0].value;
        }
        this.resetArray(size);
    }
    async insertionSort() {
        const array = this.state.array;
        const newArray = await insertionSortAlgorithm(array);

        this.setState({
            array: newArray,
            isSorted: true
        });
    }
    async bubbleSort() {
        const array = this.state.array;
        const newArray = await bubbleSortAlgorithm(array);
        
        this.setState({
            array: newArray,
            isSorted: true
        });
    }
    async selectionSort() {
        const array = this.state.array;
        const newArray = await selectionSortAlgorithm(array);

        this.setState({
            array: newArray,
            isSorted: true
        });
    }
    async quickSort() {
        const array = this.state.array;
        quickSortMedian(array, 0, array.length - 1);
    }
    async quickSort2() {
        const array = this.state.array;
        quickSortAlgorithm(array, 0, array.length - 1);
    }
    async heapSort() {
        const array = this.state.array;
        const newArray = await heapSortAlgorithm(array);
        this.setState({
            array: newArray,
            isSorted: true
        });
    }
    mergeSort() {
        const array = this.state.array;
        const newArray = mergeSortAlgorithm(array);
        this.setState({
            array: newArray,
            isSorted: true
        });
    }
    render() {
        const array = this.state.array;
        let width = getWidth(array.length);
        
        return (
            <React.Fragment>
            <div className="array-container">
                {array.map((value, id) => {
                return <div className="array-bar-div" key={id} style={{height: `${value}px`, width: width}}>  </div>
                })}
            </div>
            <div className="button-container">

                <div className="algo-button" onClick={() => this.handleChange()}>Generate a new array</div>
                <div className="algo-button"> change size</div>
                <input id="changeSize" type="range" min="5" max="300"
                //   style={{background: color, cursor: cursor}}
                //   disabled={isRunning ? "disabled" : null}
                    onChange={(e) => this.handleChange(e)}
                />
                <div className="algo-button" onClick={() => this.bubbleSort()}>Bubble Sort</div>
                <div className="algo-button" onClick={() => this.insertionSort()}>Insertion Sort </div>
                <div className="algo-button" onClick={() => this.selectionSort()}>Selection Sort</div>
                <div className="algo-button" onClick={() => this.quickSort()}>Quick Sort LR</div>
                <div className="algo-button" onClick={() => this.quickSort2()}>Quick Sort LL</div>
                <div className="algo-button" onClick={() => this.heapSort()}>Heap Sort</div>
                <div className="algo-button" onClick={() => this.mergeSort()}>Merge Sort</div>

                {/* <Menu /> 
                <div className="algo-button" onClick= {() => this.buttonHandler()}>Run !</div> */}

            </div>

            </React.Fragment>
        );
    }
   
}
const randomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
