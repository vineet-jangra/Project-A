const insertionSortAlgorithm = async (array, delay) => {
  delay = 30;
  const divElement = document.getElementsByClassName('array-bar-div');
  const length = array.length;
    for(let i = 1; i < length; i++) {
        let j = i - 1;
        let checker = array[i];
        await new Promise(resolve =>
          setTimeout(() => {
            divElement[j].style.backgroundColor = 'red';
            resolve();
          }, delay)
        );
        while(j > -1 && checker < array[j]) {
          
          await new Promise(resolve =>
            setTimeout(() => {
                  divElement[j].style.backgroundColor = "#7CFC00";
                  resolve();
                }, delay)
              );
              const a = divElement[j].style.height;

              const b = divElement[j + 1].style.height;
               
            array[j + 1] = array[j];
            await new Promise(resolve =>
                setTimeout(() => {
                    divElement[j].style.height = b;
                    divElement[j + 1].style.height = a;
                    divElement[j].style.backgroundColor = 'red';
                    divElement[j + 1].style.backgroundColor = "#7CFC00";
                  resolve();
                }, delay)
              );
            j--;
        }
        await new Promise(resolve =>
          setTimeout(() => {
              divElement[j + 1].style.backgroundColor = "#7CFC00";
              resolve();
            }, delay)
          );
        array[j + 1] = checker;
    }
    return array;
}

export default insertionSortAlgorithm;