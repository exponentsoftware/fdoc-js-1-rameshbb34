const arrOne = [1, 4, 6, 2, 1];
function checkUniqueness(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] !== arr[j]) {
                return true;
            }else {
                return false;
            };

        };
        
        
    };
};

console.log(checkUniqueness(arrOne));