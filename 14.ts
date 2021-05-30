function mycode14(strs = ["flower","flow","flight"]) {
    if(strs.length === 1) return strs[0];
    let ansWord = '';
    let word = '';
    const base = strs[0];
    for(let i = 0; i < base.length; i++){
        word += base[i];
        if(strs.length === (strs.filter(x => x[i] === base[i]).length)){
            if(ansWord.length < word.length) ansWord = word;
            continue;
        } else {
            break;
        }
    }
    return ansWord;
};

/**
 * 問題文がただ共通文字の判定問題だと勘違いして、全体から探すものだと思っていた。
 * @param strs 
 */
function missmycode14(strs = ["flower","flow","flight"]) {
    if(strs.length === 1) return strs[0];
    let ansWord = '';
    const base = strs[0];
    for(let i = 0; i < base.length; i++){
        let word='';
        for(let j = i; j < base.length; j++){
            word += base[j];
            if(strs.length === (strs.filter(x => x.indexOf(word) !== -1).length)){
                if(ansWord.length < word.length) ansWord = word;
                continue;
            } else {
                break;
            }
        }
    }
    return ansWord;
};


function simpleCode14(strs) {
    if (!strs.length) return '';
    
    for (let i = 0; i < strs[0].length; i++) {
      for (let str of strs) {
        if (str[i] !== strs[0][i]) {
          return str.slice(0, i);
        }
      }
    }
    
    return strs[0];
  }