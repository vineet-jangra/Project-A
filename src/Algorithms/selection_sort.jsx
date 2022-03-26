const divClassSelector = document.getElementsByClassName('array-bar-div');
const selectionSortAlgorithm = async (array, delay) => {
  const animation = [];
    for(let i = 0; i < array.length - 1; i++) {

      animation.push([i, 'r']);
        let k = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[k]) {
                k = j;
            }
            animation.push([j, 'r']);
            animation.push([j, 't']);            
        }
        animation.push([k, 'r']);
        
        animation.push([i, k, true]);
        animation.push([i, 'g']);
        if(i !== k)
          animation.push([k, 't']);
        let temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }
    animation.push([array.length - 1, 'g']);
    doAnimation(animation);
    await new Promise((resolve) =>
    setTimeout(() => {
        resolve();
      }, animation.length * 100)
    );
    return array;
}

const doAnimation = (animation) => {
  for(let i = 0; i < animation.length; i++) {
    setTimeout(() => {
      if(animation[i].length == 2) {
        divClassSelector[animation[i][0]].style.backgroundColor = (animation[i][1] === 'r') ? 'red' : (animation[i][1] === 'g') ? '#32CD32' : 'turquoise';
      }
      else {
        const a = divClassSelector[animation[i][0]].style.height;
        const b = divClassSelector[animation[i][1]].style.height;
        divClassSelector[animation[i][0]].style.height = b;
        divClassSelector[animation[i][1]].style.height = a;
        console.log(a, b);
      }
    }, i * 100);
  }
}
export default selectionSortAlgorithm;