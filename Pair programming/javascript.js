// numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function primeArray()

function checkPrime(numArray) {
    const primeNumber = numArray.filter(output => {
        if (output <= 1) {
            return false;
        } else {
            for (let i = 2; i < output; i++) {
                if (output % i == 0) {
                    return false;
                }
            }
            return true;
        }
    });
    console.log(`Prime number array:`, primeNumber);
};

checkPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
