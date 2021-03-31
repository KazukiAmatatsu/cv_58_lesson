// 文字列オブジェクトのメソッド


// repeat:オブジェクトの要素を count 回繰り返した文字列を返します。
const more = 'very ';

console.log(`I study programming. Because it\'s ${more.repeat(3)}interesting.`);



// charAt:文字列の中の指定された位置にある単一のUTF-16 コードユニットからなる新しい文字列を返します。
const string = 'I study programming. Because it\'s very interesting.';

const index = 10;

console.log(`The character at index ${index} is ${string.charAt(index)}`);



// includes:１つの文字列を別の文字列の中に見つけ出すことができるかどうかを判断し、必要に応じてtureかfalseを返します。
// const string = 'I study programming. Because it\'s very interesting.';

const word = 'very';

console.log(`The word "${word}" ${string.includes(word) ? 'is' : 'is not'} in the string`);
