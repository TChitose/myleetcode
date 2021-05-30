function  mydeviouscode(s = "aa", p = "a") {
    const re = new RegExp('^' + p + '$');
    return re.test(s);
};

function mikansei(s = "aa", p = "a") {
    if(s === p) return true;
    if ( p.indexOf('*') === -1) return false;
    let diff = 0;
    for(let i = 0; i < p.length; i++){
        console.log(p[i], s[i + diff], i, diff)
        if(p[i] === '*'){
            for(let j = i + diff; j < s.length; j++){
                if(p[i - 1] === s[j]){
                    if(j + 1 >= s.length){
                        return true;
                    }
                    continue;
                } else {
                    diff = j - i - 1;
                    break;
                }
            }
        }
        else if(p[i] === s[i + diff] || p[i] === '.' && s[i + diff]) {
            if(i + diff >= s.length - 1) return true;
            continue;
        } else if(p[i + 1] === '*'){
            diff--;
            continue;
        } else {
            return false;
        }
        console.log(i + diff, s.length - 1)
        if(i + diff >= s.length - 1) return true;
    }
    return false;
}