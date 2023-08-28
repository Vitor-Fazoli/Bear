import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup , signOut} from 'firebase/auth'
import { useState } from 'react'
import { db, setDoc, collection, doc } from '../config/firebase'
import { Link } from 'react-router-dom';

export const Auth = () => {
    const [email , setEmail ] = useState("");
    const [Password , setPassword ] = useState("");

    console.log(auth?.currentUser?.email)

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, Password)
        }
        catch (error) {
            document.alert(error.message)
        }
    }

    const signInWithGoogle = async () => {
        try {
            signInWithPopup(auth, googleProvider)
        } catch (error) {
            document.alert(error.message)
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            document.alert(error.message)
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
    
    const createCharacter = async () => {
        try {

            let character_name = document.getElementById("name").value;
            let birthday = document.getElementById("birthday").value;
            let race = document.getElementById("race").value;
            let sex = document.getElementById("sex").value;
            let class_type = document.getElementById("class").value;
    
                const uid = auth?.currentUser?.uid;
    
                const users = collection(db,'users');
    
                setDoc(doc(users, uid), {
                    name: character_name,
                    birthday: birthday,
                    email: email,
                    race: race,
                    sex: sex,
                    class: class_type,
                    stats: {
                        hp: classStats(class_type).hp,
                        spr: classStats(class_type).spr,
                        phyDmg: classStats(class_type).phyDmg,
                        sprDmg: classStats(class_type).sprDmg,
                        phyRes: classStats(class_type).phyRes,
                        sprRes: classStats(class_type).sprRes,
                        ini: classStats(class_type).ini
                    },
                    bag: {
    
                    },
                }).then(data => {
                    console.log("dados adicionados com sucesso!");
                })
                .catch(error => {
                    auth.currentUser.delete();
                    console.error(`Erro ao adicionar dados ao firebase: ${error}`);
                });
        } catch (e) {
            console.error(`Não foi possivel se conectar ao servidor`);
        }
    }

    return (
    <div>
        <input placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signIn}>Sign In</button>

        <button onClick={signInWithGoogle}>Sign In with Google</button>

        <button onClick={logout}> Logout </button>
        <main>
            <h1> {auth?.currentUser?.displayName} </h1>
            <br/>
            <Link to="/create_character">Create your Character</Link>
        </main>
    </div>
  )
}