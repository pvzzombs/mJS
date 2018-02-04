var m = {};
m.Old = "";
m.New = "";
m.Store = ["backspace", "enter", "error"];
m.getKey = function(x) {
    var y = m.New;
    m.New = x;
    m.Old = y;
    if (m.New.length < m.Old.length) {
        return [m.Store[0]];
    } else if (m.New.length > m.Old.length) {
        var i, a = m.Old + " ",
            b = a.split(""),
            c = m.New.split("");
        for (i = 0; i < c.length; i++) {
            if (c[i] != b[i]) {
                return [c[i], i];
            }
        }
        if (c[i].test(/[\n\r]/g)){
        	return [m.Store[1], i];
        }
        return ["space", i - 1];
    } else {
        return [m.Store[2], -1];
    }
}
m.appear = function(d, el, ty) {
    document.getElementById(el)[ty] = m.getKey(d);