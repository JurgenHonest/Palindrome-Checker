const input = document.getElementById("word-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");



button.addEventListener("click", () => {
    if (input.value === '') {
        alert("Write something");
    }

    function palindromeChecker(str) {
        const alphabetOnly = str.replace(/[^A-Za-z0-9\s]/g, '').toLowerCase();
        const alphabetOnlyNoSpace = alphabetOnly.replace(/\s/g, '');
        const reverse = alphabetOnlyNoSpace.split('').reverse().join('');

        return alphabetOnlyNoSpace === reverse;
    }

    if (palindromeChecker(input.value)) {
        result.innerText = `${input.value} is a palindrome`;
    }
    else {
        result.innerText = `${input.value} is not a palindrome`;
    }
})
