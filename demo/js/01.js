// 写一个字符串转成驼峰的方法
// 例如：border-bottom-color 转成 borderBottomColor
// 方法：1.字符串  2.正则

// 1.字符串方法
var str = 'border-bottom-color';

function test(str) {
    var arr = str.split('-'); //[border,bottom,color]
    for (i = 1; i < arr.length; i++) {
        //[border,Bottom,Color]
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    return arr.join('');
};
alert(test(str)); //borderBottomColor

// 2.正则方法
var str1 = 'border-top-color';

function test1(str1) {
    var reg = /-(\w)/g;
    /*
    g:全局匹配
    ():被括号括起来的是子项
    \w:字符，字母包含在字符内，找一个-，一个字符
    replace的两个参数：$0:正则整体；$1:正则中子项的第一个
    */
    return str1.replace(reg, function ($0, $1) {
        return $1.toUpperCase()
    });
};
alert(test1(str1));