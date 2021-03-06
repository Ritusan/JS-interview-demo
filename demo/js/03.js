// 如何给字符串加千分符
// 例如：3423548958  3,423,548,958
// 1.字符串方法
var str = '3423548958';  // 思路：[3,423,548,958]，都是3的倍数
function test(str){
    var iNum = str.length % 3;  // 0,1,2
    var prev = '';
    var arr = [];
    var iNow = 0;
    var tmp = '';
    if(iNum != 0){
        prev = str.substring(0,iNum);
        arr.push(prev);
    };
    str = str.substring(iNum);
    for(var i=0; i<str.length; i++){
        iNow++;
        tmp+=str[i];
        if(iNow == 3 && tmp){
            arr.push(tmp);
            tmp = '';
            iNow = 0;
        };
    };
    return arr.join(',');
};
alert(test(str));

// 2.正则方法

var str1 = '52863097212';
function test1(str1){
    // \b:正则中的独立部分，包括开始，结束与空格
    // (?=):前向声明
    // (?!):反前向声明
    var reg = /(?=(?!\b)(\d{3})+$)/g;
    return str1.replace(reg,',');
};
alert(test1(str1));