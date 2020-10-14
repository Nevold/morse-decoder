const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr=[]; 
  let result='';
  let arrStr=' ';
  arr=expr.match(/.{1,10}/g);
  for (let i=0;i < arr.length; i++){
    arr[i]=arr[i].replace(/00/ig,'')
      arrStr=arr[i];
    let str='';
  for (let j=0;j < arrStr.length; j+=2){

    if(arrStr.substr(j,2)=='10'){
      str+='.';
    } else {str+='-'}
  }
  result+=MORSE_TABLE[str];
}
  return result;
}

module.exports = {
    decode
}