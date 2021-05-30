function mycode8(s = "  +  413") {
    let puramai = 0;
    let str = '';
    for(let i = 0; i < s.length; i++){
        if(s[i] === '+' && !puramai && str.length === 0){
            puramai = 1;
            continue;
        } else if(s[i] === '-' && !puramai && str.length === 0) {
            puramai = -1;
            continue;
        }

        if(s[i] ===' ' && str.length === 0 && !puramai){
            continue;
        } else if(s[i] ===' '){
            break;
        }
        else if(!isNaN(Number(s[i]))){
            str += s[i];
        } else {
            break;
        }
    }
    if(puramai === 0) puramai = 1;
    const ans = Number(str) * puramai;
    return Math.abs(ans) < 2147483648 ? ans : ( puramai === 1 ? 2147483647 : -2147483648);
};


/**
 * @param {string} s
 * @return {number}
 */
var anscode = function(str) {
    str=str.trim();
    if(!str)return 0;
    var sign=1;
    var i=0, answer=0;
    if(str[i]=='+'){
        sign=1;
        i++;
    }
    else if(str[i]=='-'){sign=-1;i++;}

    for(;i<str.length;i++)
    {
        var temp=str.charCodeAt(i)-48;
        console.log(answer);
        if(temp>9 || temp<0)break;
        if(answer>2147483647/10|| answer>(2147483647-temp)/10)return sign==1?2147483647: -2147483648;
        else answer=answer*10 + temp;
    }
    return answer* sign;
};

function mybestfastcode8(s = "  +  413") {
    s=s.trim();
    if(!s)return 0;
    let puramai = 1;
    let str = '';
    let i = 0;
    if(s[i] === '+'){
        i++;
    } else if(s[i] === '-') {
        i++;
        puramai = -1;
    }
    for(; i < s.length; i++){
        if(s[i] ===' '){
            break;
        }
        else if(!isNaN(Number(s[i]))){
            str += s[i];
        } else {
            break;
        }
    }
    const ans = Number(str) * puramai;
    return Math.abs(ans) < 2147483648 ? ans : ( puramai === 1 ? 2147483647 : -2147483648);
};
