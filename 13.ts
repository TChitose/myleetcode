function mygomicode(s = "MCMXCIV") {
    let ans = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'I' && s[i + 1] === 'V'){
            i++;
            ans += 4;
        } else if (s[i] === 'I' && s[i + 1] === 'X'){
            i++;
            ans += 9;
        } else if (s[i] === 'I'){
            ans += 1;
        } else if (s[i] === 'V'){
            ans += 5;
        } else if (s[i] === 'X' && s[i + 1] === 'L'){
            i++;
            ans += 40;
        } else if (s[i] === 'X' && s[i + 1] === 'C'){
            i++;
            ans += 90;
        } else if (s[i] === 'X'){
            ans += 10;
        } else if (s[i] === 'L'){
            ans += 50;
        } else if (s[i] === 'C' && s[i + 1] === 'D'){
            i++;
            ans += 400;
        } else if (s[i] === 'C' && s[i + 1] === 'M'){
            i++;
            ans += 900;
        } else if (s[i] === 'C'){
            ans += 100;
        } else if (s[i] === 'D'){
            ans += 500;
        } else if (s[i] === 'M'){
            ans += 1000;
        }
    }
    return ans;
};

function mybestcode(s = "MCMXCIV") {
    let ans = 0;
    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
    for(let i = 0; i < s.length; i++){
        if(map.get(s[i]) % map.get(s[i + 1]) === map.get(s[i])){
            ans -= map.get(s[i])
        } else {
            ans += map.get(s[i])
        }
    }
    return ans;
}


var bestcode = function(s) {

    const symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let value = 0;
    for(let i = 0; i < s.length; i+=1){
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    return value
};