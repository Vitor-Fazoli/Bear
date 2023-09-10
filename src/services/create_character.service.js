import { db, setDoc, collection, doc, auth } from '../config/firebase'

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
            hp: 0,
            spr: 0,
            phyDmg: 0,
            sprDmg: 0,
            phyRes: 0,
            sprRes: 0,
            ini: 0,
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