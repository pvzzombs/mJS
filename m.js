//version 1.4
//removed bugs and added more support
var m = {};
m.Old = "";
m.New = "";
m.Store = ["backspace", "enter", "error"];
m.getKey = function(x,w) {
//declare variables
	var i, a, b, c;
	if(w){
	var y = w[0];
	w[0] = x;
	w[1] = y;
	if (w[0] == w[1]){
		return [m.Store[1], -1];
	} else if ((w[0].length+1) == w[1].length) {
	return [m.Store[0], -1];
	} else if (w[0].length == (w[1].length+1)) {
	a = w[1] + " ";
	b = a.split("");
	c = w[0].split("");
	for (i = 0; i < c.length; i++) {
	if (c[i] != b[i]) {
	return [c[i], i];
	}
	}	
	return ["space", i - 1];
	} else {
	return [m.Store[2], -1];
	}
	}else{
    var y = m.New;
    m.New = x;
    m.Old = y;
    if (m.New == m.Old){
    return [m.Store[1], -1];
    } else if ((m.New.length+1) == m.Old.length) {
        return [m.Store[0], -1];
    } else if (m.New.length == (m.Old.length+1)) {
        a = m.Old + " ";
        b = a.split("");
        c = m.New.split("");
        for (i = 0; i < c.length; i++) {
            if (c[i] != b[i]) {
                return [c[i], i];
            }
        }	
        return ["space", i - 1];
    } else {
        return [m.Store[2], -1];
    }
    }
};
m.appear = function(d, el, ty) {
    document.getElementById(el)[ty] = m.getKey(d);
};
