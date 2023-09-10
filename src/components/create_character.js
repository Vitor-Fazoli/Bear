import { db, setDoc, collection, doc, auth, getDoc } from '../config/firebase'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import human from '../assets/human.png'
import infernal from '../assets/infernal.png'
import umbraluni from '../assets/umbraluni.png'

export const CreateCharacter = () => {

    useEffect(()=>{
        changeDescription();
        characterAlreadyCreated();
        changeRaceImage();
    }, [])

    const changeRaceImage = () => {
        switch (document.getElementById("race").value){
            case "human":
                document.getElementById("race-img").src = human;
                break;
            case "infernal":
                document.getElementById("race-img").src = infernal;
                break;
            case "umbraluni":
                document.getElementById("race-img").src = umbraluni;
                break;
            default:
                console.error("Raça não conhecida");
                break;
        }
    }

    const navigate = useNavigate();

    const characterAlreadyCreated = async () => {
        const uid = auth.currentUser.uid;
        const users = collection(db,'users');
        const docRef = doc(users, uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            navigate("/home");
        }
    }

    const changeDescription = async () => {
         let class_type = document.getElementById("class");
         let class_overview_description = document.getElementById("class-overview-description");
         let class_overview_passive_name = document.getElementById("class-overview-passive-name");
         let class_overview_passive_description = document.getElementById("class-overview-passive-description");
         let class_overview_first_ability_name = document.getElementById("class_overview_first_ability_name");
         let class_overview_first_ability = document.getElementById("class-overview-first-ability");
         let class_overview_second_ability_name = document.getElementById("class_overview_second_ability_name");
         let class_overview_second_ability = document.getElementById("class-overview-second-ability");
         let class_overview_third_ability_name = document.getElementById("class_overview_third_ability_name");
         let class_overview_third_ability = document.getElementById("class-overview-third-ability");

         switch(class_type.value) {
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
            case "spiritHunter":
                class_overview_description.innerHTML = "O Caçador de Espíritos é um especialista em lidar com criaturas etéreas e sobrenaturais que assombram o mundo. Ele possui habilidades de percepção extrasensorial que lhe permitem detectar e interagir com espíritos, fantasmas e outras entidades espirituais. Além disso, o Caçador de Espíritos é um mestre em rituais e encantamentos, capaz de exorcizar, banir ou selar essas criaturas a fim de proteger os vivos."
    
                class_overview_passive_name.innerHTML = "Sentidos Sombrios"
                class_overview_passive_description.innerHTML = "O Caçador de Espíritos possui sentidos apurados que lhe permitem detectar a presença de entidades espirituais em um raio de alcance. Isso proporciona uma vantagem única, permitindo que ele antecipe ataques de inimigos etéreos e os ataque com maior precisão."
    
                class_overview_first_ability_name.innerHTML = "Controle Remoto"
                class_overview_first_ability.innerHTML = "Você pode usar o seu poderoso controle remoto para mudar o canal da TV, fazendo com que todos os inimigos próximos fiquem cegos por 1 turno."
    
                class_overview_second_ability_name.innerHTML = "Hashtag Poderosa"
                class_overview_second_ability.innerHTML = " Você pode arremessar hashtags poderosas em seus inimigos fazendo com que eles recebam dano bom base na INT"
    
                class_overview_third_ability_name.innerHTML = "Só Faltam 10 Assinaturas"
                class_overview_third_ability.innerHTML = "Você cria uma petição online e faz com que seus inimigos percam 1 turno assinando ela"
                break
            case "defender":
                class_overview_description.innerHTML = "O Defensor é a personificação da resistência e proteção. Especializado em combate defensivo, ele utiliza escudos, armaduras pesadas e técnicas avançadas de bloqueio para proteger seus aliados em batalha. Sua dedicação em garantir a segurança do grupo faz dele um ponto central nas estratégias de combate, capaz de aguentar o impacto de poderosos inimigos e manter a linha de frente intacta."
    
                class_overview_passive_name.innerHTML = "Escudo Impenetrável"
                class_overview_passive_description.innerHTML = "Como um verdadeiro mestre das discussões online, o Revolucionário de Sofá possui uma habilidade inata de influenciar o fluxo das redes sociais e fóruns virtuais. "
    
                class_overview_first_ability_name.innerHTML = "Controle Remoto"
                class_overview_first_ability.innerHTML = "Você pode usar o seu poderoso controle remoto para mudar o canal da TV, fazendo com que todos os inimigos próximos fiquem cegos por 1 turno."
    
                class_overview_second_ability_name.innerHTML = "Hashtag Poderosa"
                class_overview_second_ability.innerHTML = " Você pode arremessar hashtags poderosas em seus inimigos fazendo com que eles recebam dano bom base na INT"
    
                class_overview_third_ability_name.innerHTML = "Só Faltam 10 Assinaturas"
                class_overview_third_ability.innerHTML = "Você cria uma petição online e faz com que seus inimigos percam 1 turno assinando ela"
                break
            case "gardenerChief":
                class_overview_description.innerHTML = "O Jardineiro Chefe é um guardião da flora e da vida vegetal. Ele possui um dom natural para a manipulação da natureza e é capaz de influenciar o crescimento das plantas, desde curar feridas com ervas medicinais até fazer a vegetação crescer descontroladamente para aprisionar inimigos. Além disso, suas habilidades botânicas também permitem criar poções e itens especiais a partir de plantas exóticas."
                class_overview_passive_name.innerHTML = "Dedo Verde"
                class_overview_passive_description.innerHTML = "Como um verdadeiro mestre das discussões online, o Revolucionário de Sofá possui uma habilidade inata de influenciar o fluxo das redes sociais e fóruns virtuais. "
    
                class_overview_first_ability_name.innerHTML = "Controle Remoto"
                class_overview_first_ability.innerHTML = "Você pode usar o seu poderoso controle remoto para mudar o canal da TV, fazendo com que todos os inimigos próximos fiquem cegos por 1 turno."
    
                class_overview_second_ability_name.innerHTML = "Hashtag Poderosa"
                class_overview_second_ability.innerHTML = " Você pode arremessar hashtags poderosas em seus inimigos fazendo com que eles recebam dano bom base na INT"
    
                class_overview_third_ability_name.innerHTML = "Só Faltam 10 Assinaturas"
                class_overview_third_ability.innerHTML = "Você cria uma petição online e faz com que seus inimigos percam 1 turno assinando ela"
                break
            case "ironmancer":
                class_overview_description.innerHTML = "O Ferromante é um conjurador de metais, capaz de controlar o ferro e outros metais com habilidades mágicas únicas. Ele pode moldar armas poderosas, criar armaduras resistentes ou manipular o ambiente com telecinese metalúrgica. Além disso, sua conexão com o metal lhe permite detectar itens ocultos ou desarmar armadilhas tecnológicas complexas."
                class_overview_passive_name.innerHTML = "Afinidade Metálica"
                class_overview_passive_description.innerHTML = "Como um verdadeiro mestre das discussões online, o Revolucionário de Sofá possui uma habilidade inata de influenciar o fluxo das redes sociais e fóruns virtuais. "
    
                class_overview_first_ability_name.innerHTML = "Controle Remoto"
                class_overview_first_ability.innerHTML = "Você pode usar o seu poderoso controle remoto para mudar o canal da TV, fazendo com que todos os inimigos próximos fiquem cegos por 1 turno."
    
                class_overview_second_ability_name.innerHTML = "Hashtag Poderosa"
                class_overview_second_ability.innerHTML = " Você pode arremessar hashtags poderosas em seus inimigos fazendo com que eles recebam dano bom base na INT"
    
                class_overview_third_ability_name.innerHTML = "Só Faltam 10 Assinaturas"
                class_overview_third_ability.innerHTML = "Você cria uma petição online e faz com que seus inimigos percam 1 turno assinando ela"
                break
            default:
                return console.error("Error: Class is not defined");
        }
    }
    const classStats = (class_name) => {
        switch(class_name){
            case "couchRevolutionary":
                return {
                    hp: 4,
                    spr: 10,
                    phyDmg: 0,
                    sprDmg: 3,
                    phyRes: 1,
                    sprRes: 0,
                    ini: 0,
                }
            case "spiritHunter":
                return {
                    hp: 4,
                    spr: 10,
                    phyDmg: 1,
                    sprDmg: 2,
                    phyRes: 0,
                    sprRes: 1,
                    ini: 0,
                }
            case "defender":
                return {
                    hp: 7,
                    spr: 10,
                    phyDmg: 0,
                    sprDmg: 0,
                    phyRes: 1,
                    sprRes: 1,
                    ini: 2,
                }
            case "gardenerChief":
                return {
                    hp: 5,
                    spr: 10,
                    phyDmg: 0,
                    sprDmg: 2,
                    phyRes: 0,
                    sprRes: 0,
                    ini: 2,
                }
            case "ironmancer":
                return {
                    hp: 5,
                    spr: 10,
                    phyDmg: 0,
                    sprDmg: 3,
                    phyRes: 1,
                    sprRes: 0,
                    ini: 0,
                }
            default:
                return console.error("Error: Class is not defined");
        }
    }

    const submitCharacter = async () => {
        console.log("Saving Data...")
        let email = auth.currentUser.email;
        let character_name = document.getElementById("name").value;
        let birthday = document.getElementById("birthday").value;
        let race = document.getElementById("race").value;
        let sex = document.getElementById("sex").value;
        let class_type = document.getElementById("class").value;

        const uid = auth.currentUser.uid;

        const users = collection(db,'users');

        setDoc(doc(users, uid), {
            name: character_name,
            birthday: birthday,
            email: email,
            race: race,
            sex: sex,
            profession: class_type,
            stats: {
                hp: classStats(class_type).hp,
                spr: classStats(class_type).spr,
                phyDmg: classStats(class_type).phyDmg,
                sprDmg: classStats(class_type).sprDmg,
                phyRes: classStats(class_type).phyRes,
                sprRes: classStats(class_type).sprRes,
                ini: classStats(class_type).ini
            },
            body: {
                eyes: "none",
                ears: "none",
                rightArm: "none",
                rightLeg: "none",
                leftArm: "none",
                leftLeg: "none",
            },
            lvl: 1,
            exp: 0,
            perk: "none",
            inventory: [
                "morphine-u",
                "morphine-u",
                "desert herb",
            ]
    }).then(() => {
            window.alert("Document successfully written!");
            window.location.href = "/home";
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    return (
        <div style={{padding: '1%'}}>
            <h1>Create Character</h1>
            <p style={{color: 'orange'}}>tip: all the characteristics if you hover the mouse over them, you can see the effects in the game</p>
            <h3>Your Name</h3>
            <input type="text" id="name" name="name" />
            <h3>Your Birthday</h3>
            <input type="date" id="birthday" name="birthday" />
            <h3>Race</h3>
            <div style={{display: 'flex'}}>
                <select id="race" required onChange={changeRaceImage}>
                    <option value="human">Human</option>
                    <option value="infernal">Infernal</option>
                    <option value="umbraluni">Umbraluni</option>
                </select>
                <img src={human} alt='race representation' id='race-img' style={{textAlign: "center"}}/>
                <div>
                    <h5 style={{marginLeft: '-350px'}}>Eyes</h5>
                    <select style={{marginLeft: '-350px'}} title='you lose all your initiative, but you have 50% more spirit resistance'>
                        <option>Blind</option>
                        <option>Myopic</option>
                        <option>Normal</option>
                        <option>Night Vision</option>
                    </select>
                    <h5 style={{marginLeft: '-180px'}}>Upper right</h5>
                    <select style={{marginLeft: '-180px'}}>
                        <option>Without right hand</option>
                        <option>Without right arm</option>
                        <option>None</option>
                    </select>
                    <h5 style={{marginLeft: '-80px'}}>Upper Left</h5>
                    <select style={{marginLeft: '-80px'}}>
                        <option>Without right hand</option>
                        <option>Without right arm</option>
                        <option>None</option>
                    </select>
                    <h5 style={{marginLeft: '-180px'}}>Lower right</h5>
                    <select style={{marginLeft: '-180px'}}>
                        <option>Without right hand</option>
                        <option>Without right arm</option>
                        <option>None</option>
                    </select>
                    <h5 style={{marginLeft: '-350px'}}>Lower Left</h5>
                    <select style={{marginLeft: '-350px'}}>
                        <option>Without left foot</option>
                        <option>Without left leg</option>
                        <option>None</option>
                    </select>
                </div>
            </div>
            <h3>Sex</h3>
            <select name="" id="sex" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <div>
                <h3>Profession</h3> 
                <p>&#10068;</p>
                <select name="spiritHunter" id="class" defaultValue={"spiritHunter"} required onChange={changeDescription}>
                    <option value="spiritHunter">spirit Hunter</option>
                    <option value="couchRevolutionary">Couch Revolutionary</option>
                    <option value="defender">Defender</option>
                    <option value="gardenerChief">Gardener Chief</option>
                    <option value="ironmancer">Ironmancer</option>
                </select>
            </div>
            <div style={{paddingBottom: '2%'}}>
                <div class="class-description" id="class-overview">
                    <div>
                        <h3>Description</h3>
                        <p id="class-overview-description" ></p>
                    </div>
                    <div>
                        <h3 id="class-overview-passive-name"></h3>
                        <h5>Passive</h5>
                        <p id="class-overview-passive-description"></p>
                    </div>
                    <div id="class-overview-abilities">
                        <h3>Abilites</h3>
                        <h4 id="class_overview_first_ability_name"></h4>
                        <p id="class-overview-first-ability"></p>
                        <h4 id="class_overview_second_ability_name"></h4>
                        <p id="class-overview-second-ability"></p>
                        <h4 id="class_overview_third_ability_name"></h4>
                        <p id="class-overview-third-ability"></p>
                    </div>
                </div>
                <button onClick={submitCharacter}> Save </button>
            </div>
        </div>
    )
}