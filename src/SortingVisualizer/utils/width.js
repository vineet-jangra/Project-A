
const getWidth = (length) => {
    let width = 0;
    if(length < 10) {
        width = '30px'
    }
    else if(length < 25) {
        width = '25px'
    }
    else if(length < 40) {
        width = '20px';
    }
    else if(length < 60) {
        width = '15px';
    }
    else if(length < 70) {
        width = '12px';
    }
    else if(length < 80) {
        width = '10px'
    }
    else if(length < 100) {
        width = '9px';
    }
    else if(length < 130) {
        width = '7px'
    }
    else if(length < 150) {
        width = '5px'
    }
    else {
        width = '4px';
    }
    return width;
}
export default getWidth;