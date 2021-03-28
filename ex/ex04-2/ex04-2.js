function scoring(score) {
  if (score >= 90) {
    const  judge = "秀";
    return judge;
    // console.log('秀')
  } else if (score >= 75) {
    const  judge = "優";
    return judge;
    // console.log('優')
  } else if (score >= 60) {
    const  judge = "良";
    return judge;
    // console.log('良')
  } else if (score >= 30) {
    const  judge = "可";
    return judge;
    // console.log('可')
  } else {
    const  judge = "不可";
    return judge;
    // console.log('不可')
  }
}

// 動作確認
console.log(scoring(100)) //=> 秀
console.log(scoring(90)) //=> 秀
console.log(scoring(75)) //=> 優
console.log(scoring(60)) //=> 良
console.log(scoring(30)) //=> 可
console.log(scoring(13)) //=> 不可
