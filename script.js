function next(n){
    n = parseInt(n)
    document.getElementById(n).style.display = "none"

    // Dobra, zliczamy ile jest osób
    il = 0
    p = document.getElementById("pawel").checked
    j = document.getElementById("janek").checked
    a = document.getElementById("antek").checked
    if(p){
        il++
    } 
    if(j){
        il++
    }
    if(a){
        il++
    }

    // Jeśli są wszyscy lub 2 osoby, to tak, gramy
    if(il >= 2) {
        window.location.href = "TAK.html";
    }

    // Jeśli jest tylko jedna, to pytanie w co gramy i z kim
    if(il == 1) {
        if(a == true){ // No, z samym Antkiem, to raczej nie, szanujmy sie
            window.location.href = "NIE.html";
        } else {
            document.getElementById(eval(n+1)).style.display = "block"
        }
    }
}

function next2(n){
    res = document.getElementsByName("wco")
    
    for(i = 0; i < res.length; i++){
        if(res[i].checked){
            res = res[i].value
            break;
        }
    }
    
    if((res == "turniej" || res == "wing") && p == true){
        window.location.href = "TAK.html";
    } else if(res == "wing" && j == true) {
        window.location.href = "TAK.html";
    } else {
        window.location.href = "NIE.html";
    }
}