module.exports = function toReadable (number) {
    let ed, des, sot, teen;

    if(number / 10 < 1){
        ed = number % 10;
        ed = readEd(ed);
        return ed;
    } else if((number / 10 > 0) && (number / 10 < 10)){
            des = Math.floor(number / 10);
            ed = number % 10;
            des = readDes(des);
            if(ed === 0){
                return des;
            } else {
                ed = readEd(ed);
                return des + " " + ed;
            }
    } else if((number % 100 > 9) && (number % 100 < 20)){
        sot = Math.floor(number / 100);
        teen = readTeen(number % 100);
        if(sot > 0){
            sot = readEd(sot) + " hundred ";
            return sot + teen;
        } else{
            return teen;
        }
    } else {
        des = Math.floor(number / 10) % 10;
        ed = number % 10;
        sot = Math.floor(number / 100);
        sot = readEd(sot) + " hundred";
        ed = readEd(ed);
        des = readDes(des);
        if((des === "") && (ed === "zero")){
            return sot;
        } else if(des === ""){
            return sot + " " + ed;
        } else if(ed === "zero"){
            return sot + " " + des;
        } else {
            return sot + " " + des + " " + ed;
        }
    }



};

function readEd(ed) {
    switch (ed) {
        case 0: ed = "zero"; break;
        case 1: ed = "one"; break;
        case 2: ed = "two"; break;
        case 3: ed = "three"; break;
        case 4: ed = "four"; break;
        case 5: ed = "five"; break;
        case 6: ed = "six"; break;
        case 7: ed = "seven"; break;
        case 8: ed = "eight"; break;
        case 9: ed = "nine"; break;
    }
    return ed;
}

function readDes(des) {
    switch (des) {
        case 0: des = ""; break;
        case 2: des = "twenty"; break;
        case 3: des = "thirty"; break;
        case 4: des = "forty"; break;
        case 5: des = "fifty"; break;
        case 6: des = "sixty"; break;
        case 7: des = "seventy"; break;
        case 8: des = "eighty"; break;
        case 9: des = "ninety"; break;
    }
    return des;
}

function readTeen(teen) {
    switch (teen) {
        case 10: teen = "ten"; break;
        case 11: teen = "eleven"; break;
        case 2: teen = "twelve"; break;
        case 3: teen = "thirteen"; break;
        case 4: teen = "fourteen"; break;
        case 5: teen = "fifteen"; break;
        case 6: teen = "sixteen"; break;
        case 7: teen = "seventeen"; break;
        case 8: teen = "eighteen"; break;
        case 9: teen = "nineteen"; break;
    }
    return teen;
}
