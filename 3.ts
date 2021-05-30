//my ans
function myans3(s = " "){
    let exist = '';
    let ans = 0;
    for(let i = 0; i < s.length; i++){
        exist = s[i];
        for(let j = i + 1; j < s.length; j++){
            if(exist.indexOf(s[j]) >= 0) break;
            exist += s[j];
        }
        if(exist.length > ans) ans = exist.length;
    }
    return ans;
}

//best ans
function bestans3(s = "abcdefg"){
    var start = 0, maxLen = 0;
    var map = new Map();

    for(var i = 0; i < s.length; i++) {
        var ch = s[i];

        if(map.get(ch) >= start) start = map.get(ch) + 1;
        map.set(ch, i);
        console.log(map, map.get(ch))
        if(i - start + 1 > maxLen) maxLen = i - start + 1;
    }

  return maxLen;
}
