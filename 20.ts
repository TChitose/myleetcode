function mycode20_1(s = "") {
    if(s.length === 0) return true;
    if(s.length === 1) return false;
    let stack = '';
    const map = new Map([[')', '('], [']', '['], ['}', '{']]);
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack = s[i] + stack;
            continue;
        }
        console.log(map.get(s[i]), stack[stack.length - 1])
        if(map.get(s[i]) === stack[0]){
            stack = stack.slice(1);
            continue;
        } else {
            return false;
        }
    }
    console.log(stack)
    if(stack.length > 0) return false;
    return true;
};

function mycode20_2(s = "((") {
    if(s.length === 0) return true;
    if(s.length === 1) return false;
    while(true){
        if(s.length === 0) return true;
        if(s[0] === ')' || s[0] === ']' || s[0] === '}') return false;
        if(s.indexOf(')') === -1　&& s.indexOf('}') === -1 && s.indexOf(']') === -1) return false;
        for(let i = 0; i < s.length; i++){
            if(s[i] === '(' && s[i + 1] === ')' ||
                s[i] === '[' && s[i + 1] === ']' ||
                s[i] === '{' && s[i + 1] === '}'
            ){
                s = s.slice(0, i) + s.slice(i+1 + 1);
                console.log(s);
                continue;
            }
            if(s[i] === '(' || s[i] === '{' || s[i] === '['){
                if(s[i + 1] === ')' || s[i + 1] === ']' || s[i + 1] === '}'){
                    return false;
                }
                continue;
            }
        }
    }
};

function solutioncode20(s) {
    if (s === null || s.length <= 0) return true;
    var cArr = s.split('');
    var stack = [];
    for (var c of cArr) {
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }
    if (stack.length === 0) return true;
    return false;
};


function bestcode20(s) {
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};
