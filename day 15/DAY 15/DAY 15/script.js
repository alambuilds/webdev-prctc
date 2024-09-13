function aoc() {
    var radius = parseInt(document.getElementById("r").value );
    var area = 3.14 * radius * radius ;
    document.getElementById("res1").innerHTML = "Area of circle = " + area ;
    // document.getElementById("res1").innerHTML = `Area of circle =  ${area} `;
}


function si() {
    var p = document.getElementById("p").value;
    var r = document.getElementById("r").value;
    var t = document.getElementById("t").value;
    var si = parseInt(p) * parseInt(r) * parseInt(t) * 0.01 ;
    document.getElementById("res2").innerHTML = "SI = " + si ;
}