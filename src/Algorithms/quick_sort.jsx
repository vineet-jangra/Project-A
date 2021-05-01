const arr = [];
const divSelctor = document.getElementsByClassName('array-bar-div');

const quickSortAlgorithm = async (array, low, high) => {
  if(low < high) {
    const pivotPoint = await partitionArray(array, low, high);
    console.log(pivotPoint, 'new');
    await Promise.all([
      quickSortAlgorithm(array, low, pivotPoint - 1),
      quickSortAlgorithm(array, pivotPoint + 1, high)
    ]);
  }
}

const partitionArray = async (array, low, high) => {
    const pivot = array[high];
    let i = low - 1;
    await new Promise(resolve =>
      setTimeout(() => {
        divSelctor[high].style.backgroundColor = 'green';
        divSelctor[i + 1].style.backgroundColor = 'red';
        resolve();
      }, 30)
    );
    for(let j = low; j < high; j++) {
      // await new Promise(resolve =>
      //   setTimeout(() => {
      //     divSelctor[j].style.backgroundColor = 'yellow';
      //     resolve();
      //   }, 20)
      // );
        if(array[j] <= pivot) {
          await new Promise(resolve =>
            setTimeout(() => {
            document.getElementsByClassName('array-bar-div')[i + 1].style.backgroundColor = 'turquoise';
              resolve();
            }, 20)
          );
            i++;
            await new Promise(resolve =>
              setTimeout(() => {
              document.getElementsByClassName('array-bar-div')[i].style.backgroundColor = 'red';
                resolve();
              }, 20)
            );
            const a = divSelctor[i].style.height;
            const b = divSelctor[j].style.height;
            await new Promise(resolve =>
                setTimeout(() => {
                    divSelctor[i].style.height = b;
                    divSelctor[j].style.height = a;
                  resolve();
                }, 20)
              );
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            // await new Promise(resolve =>
            //   setTimeout(() => {
            //   document.getElementsByClassName('array-bar-div')[i].style.backgroundColor = 'turquoise';
            //   document.getElementsByClassName('array-bar-div')[i + 1].style.backgroundColor = 'turquoise';
            //     resolve();
            //   }, 20)
            // );
        }
        // await new Promise(resolve =>
        //   setTimeout(() => {
        //     document.getElementsByClassName('array-bar-div')[j].style.backgroundColor = 'tuquoise';
        //     resolve();
        //   }, 20)
        // );
    }
    const a = divSelctor[i + 1].style.height;
    const b = divSelctor[high].style.height;
    await new Promise(resolve =>
        setTimeout(() => {
            divSelctor[i + 1].style.height = b;
            divSelctor[high].style.height = a;
          resolve();
        }, 20)
      );
    const temp = array[high];
    array[high] = array[i + 1];
    array[i + 1] = temp;
    await new Promise(resolve =>
      setTimeout(() => {
        for(let i = 0; i < array.length; i++) {
          divSelctor[i].style.backgroundColor = 'turquoise';
        }
        resolve();
      }, 10)
    );
    return i + 1;
}

export default quickSortAlgorithm;