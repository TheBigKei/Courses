//Task 1
function printSum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum += i;
    }
    console.log(sum);
  }

  console.log('Start of the task 1');

  printSum();

  console.log('End of the task 1\n ');
  
//Task 2

function printCube(num){
  let cube = num ** 3;
  console.log(cube);
}

console.log('Start of the task 2');

printCube(4);

console.log('End of the task 2\n ');

//Task 3

function arrSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
      sum += arr[i];
  }

  return sum;
}
console.log('Start of the task 3');

let arr3 = [2, 7, 1, 10, 15];
let result = arrSum(arr3);
console.log(result);

console.log('End of the task 3\n ');

//Task 4

function arrText(text){
  return text.split('');
}

console.log('Start of the task 4');

let text = 'Mmm, monkey';
console.log('Text: ' + text);

console.log('All characters of this text:');
let stringArr = arrText(text);

for (let i = 0; i < stringArr.length; i++){
  console.log(stringArr[i]);
}

console.log('End of the task 4\n ');

//Task 5

function ruToLatin(ruText){
  const ruToLat = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
    'ъ': '', 'ы': 'y', 'ь': "'", 'э': 'e', 'ю': 'yu', 'я': 'ya'
  };

  return ruText.split('').map(char => ruToLat[char.toLowerCase()] || char).join('');
}


console.log('Start of the task 5');

let ruText = "Ммм, обезьянка";

console.log('Ru text: ' + ruText);

let translitText = ruToLatin(ruText);
console.log('Latin translit:' + translitText);

console.log('End of the task 5\n ');

//Task 6

function reverseText(text){
  return text.split('').reverse().join('');
}

console.log('Start of the task 6');

let normalText = 'I like pizza';
console.log('Normal text: ' + normalText);

let revText = reverseText(normalText);

console.log('Reverse text: ' + revText);

console.log('End of the task 6');