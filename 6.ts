function mycode6(s = "PAYPALISHIRING", numRows = 3) {
    if(numRows === 1) {
        return s;
    }
    let zigzag: string[][] = [];
    let x = 0;
    let y = 0;
    let up = true;

    for(let y = 0; y < numRows; y++) {
        zigzag[y] = new Array(Math.floor(s.length / numRows) + (Math.floor(s.length / numRows) * (numRows - 2))).fill('');
    }


    for(let i = 0; i < s.length; i++){
        zigzag[x][y] = s[i];
        console.log(x, y, up)
        if(up){
            if(x === numRows - 1){
                x--;
                y++;
                up = false;
            } else {
                x++;
            };
        } else {
            if(x !== 0){
                x--;
                y++;
            }
            if(x === 0){
                if(numRows === 2) x++;
                up = true;
            }
        }
    }

    let ansLength = []
    for(let y = 0; y < numRows; y++) {
        ansLength[y] = zigzag[y].join('');
    }
   return ansLength.join('');
};

/**
 *　それぞれnumRowsの長さ分、配列になっており、その中でStringを加えている。
 Indexが0になると、１ずつ加え続け、　IndexがnumRows - 1になると１ずつ下げ始める。
 3つの配列に対してそれぞれ値を加えていき、最後連結する。
 * @param s 
 * @param numRows 
 */
function bestcode6(s = "PAYPALISHIRING", numRows = 3) {
    if(numRows === 1) {
        return s;
    }
    let zigzag: string[] = [];
    let step = 1;
    let index = 0;

    for(let i = 0; i < s.length; i++){
        if(zigzag[index] === undefined){
            zigzag[index] = '';
        }
        zigzag[index] += s[i];
        if(numRows - 1 === index){
            step = -1;
        } else if(index === 0){
            step = 1;
        }
        index += step;
    }
    return zigzag.join('');
};

/**
 * @param s 
 * @param numRows 
 */
var anscode6 = function(s, numRows) {
    var length = s.length;
if (numRows == 1) return s;
var cycleLen = numRows * 2 - 2;
var aZig = [];
for (var i = 0; i < numRows; i++){
    for (var j = 0; j + i < length; j=j+cycleLen){
        aZig.push(s.charAt(j + i));
        if (i!=0 && i!=numRows -1 && j + cycleLen - i < length){
            aZig.push(s.charAt(j + cycleLen - i));
        }
    }
}

return aZig.join("");
};