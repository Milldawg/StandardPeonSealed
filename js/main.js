var btn = document.getElementById("generate");
btn.onclick = function() {
    var len = znrc.length;
    var out = "";
    for(var i = 0; i < 8; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + znrc[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = znru.length;
    for(var i = 0; i < 3; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + znru[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = khmc.length;
    for(var i = 0; i < 8; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + khmc[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = khmu.length;
    for(var i = 0; i < 3; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + khmu[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = stxc.length;
    for(var i = 0; i < 8; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + stxc[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = stxu.length;
    for(var i = 0; i < 3; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + stxu[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = afrc.length;
    for(var i = 0; i < 8; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + afrc[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = afru.length;
    for(var i = 0; i < 3; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + afru[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = midc.length;
    for(var i = 0; i < 8; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + midc[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = midu.length;
    for(var i = 0; i < 3; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + midu[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = vowc.length;
    for(var i = 0; i < 8; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + vowc[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = vowu.length;
    for(var i = 0; i < 3; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + vowu[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = neoc.length;
    for(var i = 0; i < 8; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + neoc[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = neou.length;
    for(var i = 0; i < 3; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + neou[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = sncc.length;
    for(var i = 0; i < 8; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + sncc[idx] + "\n";
    }
    document.getElementById("pool").value = out;

    var len = sncu.length;
    for(var i = 0; i < 3; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1 " + sncu[idx] + "\n";
    }
    document.getElementById("pool").value = out;

}