const bubbleSortAlgorithm = async (array, delay) => {
  const divClassSelector = document.getElementsByClassName('array-bar-div');

  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length - i - 1; j++) {
      
      await new Promise((resolve) =>
      setTimeout(() => {
          divClassSelector[j].style.backgroundColor = "red";
          divClassSelector[j + 1].style.backgroundColor = "red";
          resolve();
        }, 30)
      );

      if (array[j] > array[j + 1]) {
        const t = array[j];
        array[j] = array[j + 1];
        array[j + 1] = t;

        const a = divClassSelector[j].style.height;
        const b = divClassSelector[j + 1].style.height;
        await new Promise((resolve) =>
          setTimeout(() => {
            divClassSelector[j].style.height = b;
            divClassSelector[j + 1].style.height = a;
            resolve();
          }, 30)
        );
      }
      divClassSelector[j].style.backgroundColor = "turquoise";
      divClassSelector[j + 1].style.backgroundColor = "turquoise";
    }
    divClassSelector[array.length - i - 1].style.backgroundColor = "#7CFC00";
  }
  return array;
};

export default bubbleSortAlgorithm;
