function validId(id) {
    if (id == null) return false;
    if (!isNaN(id)) {
        var idn = parseInt(id);
        if (idn >= 1000 && idn <= 9999) {
            return true;
        }
    }
}

function isChinese(name) {
    if (name == "") return false;
    var reg = new RegExp(/[^\u4E00-\u9FA5]/)
    if (reg.test(name)) return false;
    return true;
}

function isPwd(pwd) {
    if (pwd == null) return false;
    var len = pwd.length;
    if (len < 6 || len > 16) return false;
    var num = 0, letter = 0;
    for (var i = 0; i < len; i++) {
        var c = pwd.charAt(i);
        if (c >= '0' && c <= '9') num++;
        else if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') letter++;
        else return false;
    }
    if (letter > 0 && num > 0) return true;
    else return false;
}