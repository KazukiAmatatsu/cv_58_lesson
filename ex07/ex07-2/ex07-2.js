// 配列オブジェクトのメソッド


// reduce:配列内のすべての要素に対して (左から右の順で) 関数を適用し、単一の値に還元します。
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array.reduce(reducer));
console.log(array.reduce(reducer, 5));

// map:配列内のすべての要素に対して与えられた関数を呼び出し、その結果を格納した新しい配列を生成します。
const map = array.map(x => x * 2);

console.log(map);


// forEach:メソッドは与えられた関数を、配列の各要素に対して一度ずつ実行します。
array.forEach(element => console.log(element));
