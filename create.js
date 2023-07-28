import { db, addDoc, collection } from './firebase.js';

document.getElementById("create").addEventListener("click", saveCharacter());

async function saveCharacter() {
    var character_name = document.getElementById("name").value;
    let birthday = document.getElementById("birthday").value;
    let race = document.getElementById("race").value;
    let sex = document.getElementById("sex").value;
    let perk = document.getElementById("perk").value;
    let class_type = document.getElementById("class").value;

    if (character_name !== "") {
        try {

            const docRef = await addDoc(collection(db, "user"), {
                name: character_name,
                birthday: birthday,
                race: race,
                sex: sex,
                perk: perk,
                class: class_type,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

