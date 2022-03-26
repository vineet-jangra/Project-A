const bubbleSortAlgorithm = async (array, delay) => {
  const animation = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      animation.push([j, j + 1, "r"]);

      if (array[j] > array[j + 1]) {
        const t = array[j];
        array[j] = array[j + 1];
        array[j + 1] = t;

        animation.push([j, j + 1]);
      }
      animation.push([j, j + 1, "t"]);
    }
    animation.push([array.length - i - 1]);
  }
  doAnimation(animation);
  await new Promise((resolve) =>
    setTimeout(() => {
        
        resolve();
      }, animation.length * 20)
    );
  return array;
};

const doAnimation = (animation) => { 
  const divClassSelector = document.getElementsByClassName("array-bar-div");
  for(let i = 0; i < animation.length; i++) {
      if(animation[i].length === 3) {
        setTimeout(() => {
          divClassSelector[animation[i][0]].style.backgroundColor = (animation[i][2] === 'r') ? 'red' : 'turquoise';
          divClassSelector[animation[i][1]].style.backgroundColor = (animation[i][2] === 'r') ? 'red' : 'turquoise';
      }, i * 20);
      }
      else if(animation[i].length === 2) {
            setTimeout(() => {
              const a = divClassSelector[animation[i][0]].style.height;
              const b = divClassSelector[animation[i][1]].style.height;
              divClassSelector[animation[i][0]].style.height = b;
              divClassSelector[animation[i][1]].style.height = a;
          }, i * 20);
      }
      else {
          setTimeout(() => {
              divClassSelector[animation[i][0]].style.backgroundColor = '#32CD32';
          }, i * 20);
      }
  }
}

export default bubbleSortAlgorithm;