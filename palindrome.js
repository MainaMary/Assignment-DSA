const checkPalindrome=(str) =>{

    //check the length of a string
    const strLength= str.length

    //loop through half of the string

    for(let i=0; i < strLength/2; i++){
        if(str[i] !== str[strLength-1-i]){
             return false
        }
    }

    return true
}

const string = prompt('Please enter a string')
console.log(checkPalindrome(string))