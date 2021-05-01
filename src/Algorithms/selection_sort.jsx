const divClassSelector = document.getElementsByClassName('array-bar-div');
const selectionSortAlgorithm = async (array, delay) => {
    for(let i = 0; i < array.length - 1; i++) {
        let k = i;
        await new Promise(resolve =>
            setTimeout(() => {
                divClassSelector[i].style.backgroundColor = 'red';
              resolve();
            }, 20)
          );
        for(let j = i; j < array.length; j++) {
            if(array[j] < array[k]) {
                k = j;
            }
            // if(j !== array.length - 1) {
            //   animationsArray.push([j + 1, j , true]);
            // }
            await new Promise(resolve =>
              setTimeout(() => {
                  if(j != array.length - 1)
                    divClassSelector[j + 1].style.backgroundColor = 'red';
                    divClassSelector[j].style.backgroundColor = 'turquoise';

                resolve();
              }, 20)
            );
        }
        // animationsArray.push([k,true]);
        await new Promise(resolve =>
            setTimeout(() => {
                divClassSelector[k].style.backgroundColor = 'purple';
              resolve();
            }, 200)
          );
        const a = divClassSelector[i].style.height;
        const b = divClassSelector[k].style.height;
        // animationsArray.push([i, k, a, b]);
        await new Promise(resolve =>
            setTimeout(() => {
                divClassSelector[i].style.height = b;
                divClassSelector[k].style.height = a;
              resolve();
            }, 200)
          );
        let temp = array[i];
        array[i] = array[k];
        array[k] = temp;
      
        if(i === array.length - 2) {
          // animationsArray.push([i, array.length - 1, false]);
          await new Promise(resolve =>
            setTimeout(() => {
                divClassSelector[i].style.backgroundColor = "#7CFC00";
                divClassSelector[array.length - 1].style.backgroundColor = "#7CFC00";

              resolve();
            }, 20)
          );
        }
        else {
          if(i === k) {
            // animationsArray.push([i, i , false]);
            await new Promise(resolve =>
              setTimeout(() => {
                  divClassSelector[i].style.backgroundColor = "#7CFC00";
                resolve();
              }, 20)
            );
          }
          else {
            // animationsArray.push([i, k, false]);
          await new Promise(resolve =>
            setTimeout(() => {
                divClassSelector[i].style.backgroundColor = "#7CFC00";
                divClassSelector[k].style.backgroundColor = 'turquoise';

              resolve();
            }, 20)
          );
        }
      }
    }
    // await doAnimation(animationsArray);
    return array;
}


// const doAnimation = async(animationsArray) => {
//   for(let i = 0; i < animationsArray.length; i++) {
//     if(animationsArray[i].length === 2) {
//       await new Promise(resolve =>
//       setTimeout(() => {
//         divClassSelector[animationsArray[i][0]].style.backgroundColor = animationsArray[i][1] ? 'purple' : 'red';
//         resolve();
//       }, 10)
//       );
//     }
//     else if(animationsArray[i].length === 3) {
//       if(animationsArray[i][2]) {
//         await new Promise(resolve =>
//         setTimeout(() => {
//           divClassSelector[animationsArray[i][0]].style.backgroundColor = 'red';
//           divClassSelector[animationsArray[i][1]].style.backgroundColor = 'turquoise';
//           resolve()
//         }, 10)
//         );
//       }
//       else {
//         await new Promise(resolve =>
//         setTimeout(() => {
//           divClassSelector[animationsArray[i][0]].style.backgroundColor = '#7CFC00';
//           divClassSelector[animationsArray[i][1]].style.backgroundColor = '#7CFC00';
//           resolve();
//         }, 10)
//         );
//       }
//     }
//     else {
//       await new Promise(resolve =>
//       setTimeout(() => {
//         divClassSelector[animationsArray[i][0]].style.height = animationsArray[i][3]; 
//         divClassSelector[animationsArray[i][1]].style.height = animationsArray[i][2];
//         resolve();
//       }, 10)
      
//       );
//     }
//   }
// }

export default selectionSortAlgorithm;