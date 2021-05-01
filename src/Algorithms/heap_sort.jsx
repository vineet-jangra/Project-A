const arr = [];
const divSelctor = document.getElementsByClassName('array-bar-div');

const heapSortAlgorithm = async (array, delay) => {
    for(let i = 0; i < array.length; i++) {
        arr.push(array[i]);
    }    
    await heapSort(arr.length);
    return arr;
}

const heapSort = async (n) => {
    for(let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(n, i);
    }
    for(let i = n - 1; i >= 0; i--) {
        const a = divSelctor[i].style.height;
        const b = divSelctor[0].style.height;

        await new Promise((resolve) =>
          setTimeout(() => {
            divSelctor[i].style.height = b;
            divSelctor[0].style.height = a;
            divSelctor[i].style.backgroundColor = '#7CFC00';  //
            resolve();
          }, 30)
        );
        const temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;

       await heapify(i, 0);
    }
}

const heapify = async (n, i) => {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if(l < n && arr[l] > arr[largest]) {
        largest = l;
    }
    if(r < n && arr[r] > arr[largest]) {
        largest = r;
    }
    if(largest !== i) {
        const a = divSelctor[i].style.height;

        const b = divSelctor[largest].style.height;
        await new Promise((resolve) =>
          setTimeout(() => {
            divSelctor[i].style.height = b;
            divSelctor[largest].style.height = a;
            divSelctor[i].style.backgroundColor = 'red';
            divSelctor[largest].style.backgroundColor = 'red';
            resolve();
          }, 30)
        );
        await new Promise((resolve) =>
          setTimeout(() => {
            divSelctor[i].style.backgroundColor = 'turquoise';
            divSelctor[largest].style.backgroundColor = 'turquoise';
            resolve();
          }, 30)
        );
        const temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        await heapify(n, largest);
    } 
}
export default heapSortAlgorithm;