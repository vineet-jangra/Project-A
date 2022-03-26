import React from 'react';
import "./Introduction.css";
import main from './sorting.png';
import menu from './menu.png'

class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    skipTutorial() {
        document.getElementsByClassName('background-div')[0].style.display = "none";
    }
    nextTutorial() {
        this.setState({ counter: this.state.counter + 1 });
    }
    prevTutorial() {
        this.setState({ counter: this.state.counter - 1 });
    }
    getScreen() {
        const c = this.state.counter;
        if(c === 0) {
            return (
                <div>
                    <div className="intro-title">Sorting Visualizer</div>
                    <div className="intro-main-text">This tutorial will walk you through the app and here you can visualize sorting algorithms</div>
                    <img src={main} alt="main-image" />
                    <button className="intro-skip-btn" onClick={() => this.skipTutorial()} >skip tutorial</button>
                    <button className="intro-next-btn" onClick={() => this.nextTutorial()}>Next</button>
                </div>
            );
        } else if(c === 1) {
            return (
                <div>
                    <div className="intro-title">Path finding Visualizer</div>
                    <div className="info-about-algo" >Select any algorithm from given list and then visualize it !</div>
                    <img src={menu} alt="" />
                    <div className="btn-contain">
                        <button className="intro-skip-btn" onClick={() => this.skipTutorial()} >skip tutorial</button>
                        <button className="intro-prev-btn" onClick={() => this.prevTutorial()}>Prev</button>
                        <button className="intro-next-btn" onClick={() => this.nextTutorial()}>Next</button>
                    </div>
                </div>
            )
        } else if(c === 2) {
            return (
                <div>
                    <div className="intro-title">Path finding Visualizer</div>
                    <div className="info-about-algo">you can a new random array and change size of array </div>
                    <button className="intro-skip-btn" onClick={() => this.skipTutorial()} >skip tutorial</button>
                    <button className="intro-prev-btn" onClick={() => this.prevTutorial()}>Prev</button>
                    <button className="intro-next-btn" onClick={() => this.nextTutorial()}>Next</button>
                </div>
            )
        }  else if(c === 3) {
            return (
                <div>
                    <div className="intro-title">Path finding Visualizer</div>
                    <div className="algo-tag-name"> know more about algorithms</div>
                    <div className="algo-tag-name">Bubble Sort : It is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. <a target="_blank" href="https://en.wikipedia.org/wiki/Bubble_sort">learn more</a></div>
                    <div className="algo-tag-name">Insertion Sort : Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. <a target="_blank" href="https://en.wikipedia.org/wiki/Insertion_sort">learn more</a></div>
                    <div className="algo-tag-name">Selection Sort : A weighted greedy algorithm to find the shortest path between single source to all other nodes. <a target="_blank" href="https://en.wikipedia.org/wiki/Selection_sort">learn more</a></div>
                    <div className="algo-tag-name">Quick Sort : Similar to dijkstra but it also takes heuristics in considertion is widely considered to be best in path finding <a target="_blank" href="https://en.wikipedia.org/wiki/Quicksort">learn more</a></div>
                    <div className="algo-tag-name">Merge Sort : a greedy technique to choose the node with shortest distance <a target="_blank" href="https://en.wikipedia.org/wiki/Merge_sort"> learn more</a></div>
                    <div className="help-for-algo"> 
                        <div className="algo-tag-name">Heap Sort : It starts both from start and end points and both find each other <a target="_blank" href="https://en.wikipedia.org/wiki/Heapsort">learn more</a></div>
                    </div>

                    <button className="intro-skip-btn" onClick={() => this.skipTutorial()} >skip tutorial</button>
                    <button className="intro-prev-btn" onClick={() => this.prevTutorial()}>Prev</button>
                    <button className="intro-next-btn" onClick={() => this.nextTutorial()}>Next</button>
                </div>
            )
            
        } else if(c === 4) {
            return (
                <div>
                    <div className="intro-title">Sorting Visualizer</div>
                    <div className="last-detail">enjoy your stay</div>
                    <button className="intro-end-btn" onClick={() => this.skipTutorial()}>end tutorial</button>
                </div>
            )
        }

    }
    render() {
        const Item = this.getScreen();
        return (
            <div className="background-div">
                <div className="intro-div">
                    {Item}
                </div>
            </div>
        );
    }
}

export default Introduction;