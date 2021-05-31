var mycode9 = function(x) {
    let str = x.toString();
    if(str.length <= 1) return true;
    let center = (str.length / 2) -1;
    let rightStep = 0;
    if(!Number.isInteger(center)){
        center = Math.ceil(center);
    }else{
        if(str[center] !== str[center + 1]) return false;
        rightStep++;
    }
    for(let i = 1; i <= center; i++){
        if(str[center - i] !== str[center + i + rightStep]) return false;
    }
    return true;
};

var mycode9_2 = function(x) {
    const str = x.toString();
    let reservestr = str.split('').reverse().join('');
    return str === reservestr;
}

var coolcode9 = function(x) {
    x += '';
    return x === x.split('').reverse().join('')
}
var bestcode9 = function(x){
    if (x < 0) return false; //マイナスならFalse
  if (x < 10) return true;　//一桁だけなのでTrue
  if (x % 10 === 0) return false;　// １桁目が０ならFalse

  let rev = 0;
  // 処理を回してrevをxの中央から右側を作る。
  while (rev < x) {
    rev *= 10;
    rev += x%10;
    x = Math.trunc(x/10);
  }
  return rev === x || Math.trunc(rev/10) === x;
}
