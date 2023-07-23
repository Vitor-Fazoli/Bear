name = document.getElementById("name")
birthday = document.getElementById("birthday")
race = document.getElementById("race")
sex = document.getElementById("sex")
perk = document.getElementById("perk")
attribute = document.getElementsByName("check")

function initialConfig(){
    changeClass()
    changePerk()
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

perk = document.getElementById("perk")
perkDescription = document.getElementById("perk-description")
function changePerk(){
    switch(perk.value){
    case "blind":
        perkDescription.innerHTML = "Você não pode ver nada"
        break
    case "pyro":
        perkDescription.innerHTML = "Você é um piromaniaco"
        break
    case "leper":
        perkDescription.innerHTML = "Você é um leproso"
        break
    case "diabetic":
        perkDescription.innerHTML = "Você é diabetico"
        break
    case "playboy":
        perkDescription.innerHTML = "Você é um playboy"
        break
    case "BackdoorMan":
        perkDescription.innerHTML = "Você é um talarico"
        break
    case "alcoholic":
        perkDescription.innerHTML = "Você é um alcolatra"
        break
    }
}

function changeClass(){
    class_type = document.getElementById("class")
    class_overview_description = document.getElementById("class-overview-description")
    class_overview_passive_name = document.getElementById("class-overview-passive-name")
    class_overview_passive_description = document.getElementById("class-overview-passive-description")
    class_overview_first_ability_name = document.getElementById("class_overview_first_ability_name")
    class_overview_first_ability = document.getElementById("class-overview-first-ability")
    class_overview_second_ability_name = document.getElementById("class_overview_second_ability_name")
    class_overview_second_ability = document.getElementById("class-overview-second-ability")
    class_overview_third_ability_name = document.getElementById("class_overview_third_ability_name")
    class_overview_third_ability = document.getElementById("class-overview-third-ability")

    switch(class_type.value){
        case "couchRevolutionary":
            class_overview_description.innerHTML = "Com seu poderoso controle remoto na mão e uma pilha de salgadinhos ao lado, você domina o mundo das discussões online com sua eloquência imbatível." 
            + "Suas habilidades incluem o lançamento de hashtags explosivas, usar o controle remoto e até mesmo a criação de petições online poderosas. " + 
            "Enfrente seus inimigos com comentários sarcásticos e opiniões contundentes, enquanto permanece confortavelmente sentado em seu trono de sofá." +
            "Lembre-se, a revolução começa com um clique!"
            class_overview_passive_name.innerHTML = "Domínio Virtual"
            class_overview_passive_description.innerHTML = "Como um verdadeiro mestre das discussões online, o Revolucionário de Sofá possui uma habilidade inata de influenciar o fluxo das redes sociais e fóruns virtuais. "
            
            class_overview_first_ability_name.innerHTML = "Controle Remoto"
            class_overview_first_ability.innerHTML = "Você pode usar o seu poderoso controle remoto para mudar o canal da TV, fazendo com que todos os inimigos próximos fiquem cegos por 1 turno."
            
            class_overview_second_ability_name.innerHTML = "Hashtag Poderosa"
            class_overview_second_ability.innerHTML = " Você pode arremessar hashtags poderosas em seus inimigos fazendo com que eles recebam dano bom base na INT"
            
            class_overview_third_ability_name.innerHTML = "Só Faltam 10 Assinaturas"
            class_overview_third_ability.innerHTML = "Você cria uma petição online e faz com que seus inimigos percam 1 turno assinando ela"
            break
        case "undertaker":
            class_overview_description.innerHTML = "Você é um coveiro"
            class_overview_passive_name.innerHTML = "Dono da Funeraria"
            class_overview_passive_description.innerHTML = ""

            class_overview_first_ability_name.innerHTML = "Golpe Fantasmagórico"
            class_overview_first_ability.innerHTML = "Invocando suas habilidades sobrenaturais, o Coveiro assusta seus inimigos com golpes fantasmagóricos! Ele imita os barulhos mais assustadores dos espíritos, causando pânico nos corações dos oponentes. Os inimigos atingidos ficam amedrontados por dois turnos, perdendo a coragem para atacar ou defender efetivamente. O Coveiro se diverte muito enquanto os adversários tremem de medo!"
            
            class_overview_second_ability_name.innerHTML = "Pé na cova"
            class_overview_second_ability.innerHTML = "Uma vez por confronto, ele entra em um estado transcendente, tornando-se um com a essência dos mortos. Durante três turnos, o Coveiro se torna invulnerável a danos físicos, como se estivesse realmente com um Pé na Cova"
            
            class_overview_third_ability_name.innerHTML = "Emoji de Caveira"
            class_overview_third_ability.innerHTML = "O Coveiro desencadeia a terrível habilidade do Emoji de Caveira, trazendo para o campo de batalha a essência assustadora dos mortos! Ao ativar essa habilidade, uma grande nuvem de emojis de caveira surge ao redor do Coveiro, flutuando ameaçadoramente em direção aos inimigos."
            break
    }
}
