

const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const inputText = input.value;

    if (inputText === "") {
        
        alert("Please input a value");
        
        //unnecessary to add but the project wants to include.
    }

    //Simple logic by adding a function
    function ispalindrome(str) {
        //[/w_/g,''] another one of meta characters
        const alphaneumaricalOnly = str.replace(/[^A-Za-z0-9\s]/g, '').toLowerCase();

        const alphanumericalOnlynoSpace = alphaneumaricalOnly.replace(/\s/g, '');
        //Reversing the cleaned string without space
        const reversed = alphanumericalOnlynoSpace.split('').reverse().join('');
        //Comparing cleaned string without any spaces with reversed string
        
        return alphanumericalOnlynoSpace === reversed;
        
    }

    //Checking of the input if palindrome and dsiplay accordingly
    if (ispalindrome(inputText)) {
        result.innerText = `${inputText} is a palindrome`;
        
    }
    else {
        result.innerText = `${inputText} is not a palindrome`;
    }
})
