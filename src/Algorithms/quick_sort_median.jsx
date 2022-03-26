const animationsArray = [];
const divSelector = document.getElementsByClassName('array-bar-div');

const array = [];
const quickSortMedian = async (arr, low, high) => {
    for(let i = 0; i <= high; i++) {
        array.push(arr[i]);
    }
    await quickSort(low, high);
}

const quickSort = async (low, high) => {
    let p = Math.floor((low + high + 1) / 2);
    let pivotValue = array[p];
    // COLOR P
    let i = low, j = high;
    const uncolor = [p, i, j];
    await new Promise((resolve) =>
      setTimeout(() => {
          divSelector[p].style.backgroundColor = 'green';
          divSelector[i].style.backgroundColor = 'red';
          divSelector[j].style.backgroundColor = 'red';
          resolve();
        }, 10)
      );
    // COLOR I J
    while(i <= j) {
        await new Promise(resolve =>
            setTimeout(() => {
            document.getElementsByClassName('array-bar-div')[i].style.backgroundColor = 'turquoise';
            document.getElementsByClassName('array-bar-div')[j].style.backgroundColor = 'turquoise';
            document.getElementsByClassName('array-bar-div')[p].style.backgroundColor = 'turquoise';
              resolve();
            }, 10)
          );
        while(array[i] < pivotValue) {
            i++;
        }
        while(array[j] > pivotValue) {
            j--;
        }
        
        if(i <= j) {
            await new Promise((resolve) =>
            setTimeout(() => {
                const a = divSelector[i].style.height;
                const b = divSelector[j].style.height; 
                divSelector[i].style.height = b;
                divSelector[j].style.height = a;
                resolve();
                }, 100)
            );
            let t = array[i];
            array[i] = array[j];
            array[j] = t;
            // SWAP BARS
            
            if(p == i) {
                p = j;
            }
            else if(p == j) {
                p = i;
            }

            i++;
            j--;
            await new Promise(resolve =>
                setTimeout(() => {
                document.getElementsByClassName('array-bar-div')[i].style.backgroundColor = 'red';
                document.getElementsByClassName('array-bar-div')[j].style.backgroundColor = 'red';
                document.getElementsByClassName('array-bar-div')[p].style.backgroundColor = 'green';
                  resolve();
                }, 10)
              );
        }
        // await new Promise((resolve) =>
        // setTimeout(() => {
        //     if(i < array.length)
        //         divSelector[i].style.backgroundColor = 'red';
        //     divSelector[j].style.backgroundColor = 'red';
        //     resolve();
        //     }, 20)
        // );
    }
    await new Promise((resolve) =>
      setTimeout(() => {
          for(let i = 0; i < array.length; i++) {
              divSelector[i].style.backgroundColor = 'turquoise';
          }
          resolve();
        }, 10)
      );
    // UNCOLOR ALL
    if(low < j) {
        await quickSort(low, j);
    }
    if(i < high) {
        await quickSort(i, high);
    }
}

export default quickSortMedian;
