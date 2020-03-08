function reverseString(s) {
    try {
        let converString = s.split('');
        let reverseArray = converString.reverse();
        let newArray =  reverseArray.join("");
        console.log(newArray)
    }
    catch(error) {
        console.log(error.message)
        console.log(s)
    }
}