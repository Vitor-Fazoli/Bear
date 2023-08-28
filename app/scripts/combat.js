document.getElementById("basic-attack").onclick = function () { basicAttack() };
document.getElementById("skill-one").onclick = function () { skillOne() };
document.getElementById("skill-two").onclick = function () { skillTwo() };

let allyEntity  = [[],[],[]]
let enemyEntity = [[],[],[]]

function basicAttack() {
    let line = document.getElementById("line").value
    let entity = document.getElementById("entity").value
    let target = document.getElementById("target").value

    if(entity == "ally"){
        if(target == "enemy"){
            enemyEntity[line].pop()
        }else if(target == "ally"){
            allyEntity[line].pop()
        }
    }else if(entity == "enemy"){
        if(target == "enemy"){
            enemyEntity[line].pop()
        }else if(target == "ally"){
            allyEntity[line].pop()
        }
    }
}

function skillOne() {
    
}

function skillTwo() {
    
}

function positionEntity (line, enitity){
    if(allyEntity.length <= 5 && allyEntity[line] == null){
        allyEntity[line].push(enitity)
    }
}

function moveEntity (line, enitity){
    allyEntity[line].push(enitity)
}

