const converter = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
];
function toRoman(num) {
    let roman = '';
    for (let i = 0; i < converter.length; i++) {
        if(converter[i].value <= num){
            num -= converter[i].value;
            roman += converter[i].symbol;
            i--;
        }
    }
    return roman;
}


document.getElementById('convertButton').addEventListener('click', () => {
    const num = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    if(num === '' || num <= 0 || num > 3999){
        resultElement.textContent = 'Invalid input';
        return;
    }
    const roman = toRoman(parseInt(num,10));
    resultElement.textContent = `${roman}`;
});