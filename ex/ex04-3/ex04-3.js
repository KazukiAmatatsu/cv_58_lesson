const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scorenig(score) {
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

scores.forEach((scores) => {
  console.log(scores)
})
