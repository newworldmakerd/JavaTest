function isNumber(str) {
    if (str == null || str.indexof(".") != str.lastIndexof(".") || str.length == 0) return false
    var num = 0;
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch > '0' && ch < '9') num++;
        else if (ch == ".") ;
        else {
            alert("不符合")
            return false;
        }
    }
    alert("符合情况");
    return num > 0;
}