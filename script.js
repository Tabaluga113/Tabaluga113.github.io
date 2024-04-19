g = 0
// wePlay(2)

function chow(n) {
    n = parseInt(n)
    document.getElementById(n).style.display = "none"
}
function next(n){
    

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

    // Jeśli nikogo nie ma, WHY YOU DOING THIS
    if(il == 0) {
        switch(g) {
            case 0:
                alert("Zaznacz coś. ")
                break
            case 1:
                alert("ZAZNACZ COŚ. ")
                break
            case 2:
                alert("debilem jesteś czy głupi?")
                break
            case 3:
                alert("debil")
                break
            case 4:
                alert("BARANIE MUSISZ COŚ ZAZNACZYĆ. ")
                break
            case 5:
                alert("nie masz co robić?")
                break
            case 6:
                alert("Idź poczytaj coś może. ")
                break
            case 7:
                alert("pierdolę to. ")
                break
            case 8:
                alert("jebane zwierze...")
                break
            case 9:
                alert("idę spać, pierdziele. ")
                break
            case 10:
                alert("zzz...")
                break
            case 11:
                alert("Zzz...")
                break
            case 12:
                alert("ZzZzZ...")
                break
            case 13:
                alert("No i co ty chcesz osiągnąć?")
                break
            case 14:
                alert("Wywalone. Z takim debilem, to już na pewno nie chcę grać. ")
                break
            case 15:
                alert("Sam tego chciałeś, dzbanie...")
                break
            case 16:
                alert("Masz tu arbuza🍉")
                break
            case 17:
                alert("A, i sztućce🍴")
                break
            case 18:
                alert("bye!")
                window.location.href = "NIE.html?why=debil"
                break
            default:
                window.location.href = "NIE.html?why=debil"
        }
        g += 1
        document.getElementById(n).style.display = "block"
        return 0
    }

    // Jeśli są wszyscy lub 2 osoby, to tak, gramy
    if(il == 2) {
        wePlay()
    }
    if(il == 3) {
        window.location.href = "TAK.html"
    }

    // Jeśli jest tylko jedna, to pytanie w co gramy i z kim
    if(il == 1) {
        if(a == true){ // No, z samym Antkiem, to raczej nie, szanujmy sie
            window.location.href = "NIE.html?why=antek";
        } else {
            chow(n)
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
        wePlay()
    } else if(res == "wing" && j == true) {
        wePlay()
    } else {
        wePlay(1)
    }
}

function wePlay(b) { 
    const d = new Date()
    let dzien = d.getDay()
    if((dzien == 0 || dzien == 2 || dzien == 5 || dzien == 6) && b != 1 && b != 2) {
        window.location.href = "TAK.html";
    } else if(b != 1) {
        window.location.href = "NIE.html?why=dzien";
    } else {
        window.location.href = "NIE.html?why=badmode";
    }
}
