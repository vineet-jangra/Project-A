
const getWidth = (length) => {
    let width = 0;
    if(length < 10) {
        width = '40px'
    }
    else if(length < 25) {
        width = '35px'
    }
    else if(length < 40) {
        width = '32px';
    }
    else if(length < 60) {
        width = '28px';
    }
    else if(length < 70) {
        width = '25px';
    }
    else if(length < 80) {
        width = '21px'
    }
    else if(length < 100) {
        width = '17px';
    }
    else if(length < 130) {
        width = '12px'
    }
    else if(length < 150) {
        width = '10px'
    }
    else {
        width = '8px';
    }
    return width;
}
export default getWidth;


 /* <div className="button-container">

                <div className="algo-button" onClick={() => this.handleChange()}>Generate a new array</div>
                <div className="algo-button"> change size</div>
                                <div className="algo-button" onClick={() => this.bubbleSort()}>Bubble Sort</div>
                <div className="algo-button" onClick={() => this.insertionSort()}>Insertion Sort </div>
                <div className="algo-button" onClick={() => this.selectionSort()}>Selection Sort</div>
                <div className="algo-button" onClick={() => this.quickSort()}>Quick Sort LR</div>
                <div className="algo-button" onClick={() => this.quickSort2()}>Quick Sort LL</div>
                <div className="algo-button" onClick={() => this.heapSort()}>Heap Sort</div>
                <div className="algo-button" onClick={() => this.mergeSort()}>Merge Sort</div>

                {/* <Menu /> 
                <div className="algo-button" onClick= {() => this.buttonHandler()}>Run !</div> }

            </div> */