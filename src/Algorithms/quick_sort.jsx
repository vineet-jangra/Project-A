let animationsArray = [];
const divSelector = document.getElementsByClassName('array-bar-div');

let array = [];
const quickSortMedian = async (arr, low, high) => {
    array = [];
    animationsArray = [];
    for(let i = 0; i < arr.length; i++) {
        array.push(arr[i]);
    }
    await quickSort(low, high);
    doAnimation();
    await new Promise((resolve) =>
    setTimeout(() => {
        resolve();
      }, animationsArray.length * 10)
    );
    return array;
}
const doAnimation = () => {
  for(let i = 0; i < animationsArray.length; i++) {
    setTimeout(() => {
      if(animationsArray[i].length === 2) {
        divSelector[animationsArray[i][0]].style.backgroundColor = (animationsArray[i][1]) ? "red" : "turquoise";
      } else {
        const a = divSelector[animationsArray[i][0]].style.height;
        const b = divSelector[animationsArray[i][1]].style.height; 
        divSelector[animationsArray[i][0]].style.height = b;
        divSelector[animationsArray[i][1]].style.height = a;
      }
    }, 10 * i);
  }
} 

const quickSort = async (low, high) => {
  if(low >= high) {
    animationsArray.push([low, true]);
    animationsArray.push([low, false]);
    return;
  }
    let p = Math.floor((low + high + 1) / 2);
    let pivotValue = array[p];
    let i = low, j = high;
    animationsArray.push([p, true]);
    animationsArray.push([p, false]);

    animationsArray.push([i, true]);
    animationsArray.push([i, false]);

    animationsArray.push([j, true]);
    animationsArray.push([j, false]);

    while(i <= j) {
        while(array[i] < pivotValue) {
            i++;
            animationsArray.push([i, true]);
            animationsArray.push([i, false]);

        }
        while(array[j] > pivotValue) {
            j--;
            animationsArray.push([j, true]);
            animationsArray.push([j, false]);

        }
        
        if(i <= j) {
            animationsArray.push([i, j, true]);
            let t = array[i];
            array[i] = array[j];
            array[j] = t;
            // SWAP BARS
            animationsArray.push([p, true]);
            animationsArray.push([p, false]);
            if(p == i) {
                p = j;
                animationsArray.push([j, true]);
                animationsArray.push([j, false]);
            }
            else if(p == j) {
                p = i;
                animationsArray.push([i, true]);
                animationsArray.push([i, false]);    
            }
            i++;
            j--;
            animationsArray.push([i, true]);
            animationsArray.push([i, false]);
            animationsArray.push([j, true]);
            animationsArray.push([j, false]);
        }
    }
    if(low < j) {
        await quickSort(low, j);
    }
    if(i < high) {
        await quickSort(i, high);
    }
}

export default quickSortMedian;
