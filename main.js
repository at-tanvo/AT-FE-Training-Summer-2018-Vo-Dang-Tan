/* Bài tập 1 */
function bt1(a , b) {
  if(a===b) {
    return (a + b)*3;
  }
  else {
    return a+b;
  }  
}
var x = bt1(10,5);
var y = bt1(5,5);
console.log(x);
console.log(y);

/* Bài tập 2 */
function bt2(a) {
  if(a <= 19) {
    return 19 - a;
  }
  else {
    return (a - 19)*3;
  }
}
console.log(bt2(12));
console.log(bt2(19));
console.log(bt2(22));

/* Bài tập 3,4 */
function bt3(a , b) {
  var tmp = [];
  for(i=0;i<=9;i++) {
    var x = a.replace('*' , i);
    if((x % b) ===0) {
      tmp.push(x);
    }   
  }
  return tmp;  
}
console.log(bt3('1*9', 3));
console.log(bt3('1234567890*', 3));
console.log(bt3('1*9', 6));
console.log(bt3('1234567890*', 6));
