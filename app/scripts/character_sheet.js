import { signInWithEmailAndPassword, getAuth, getDoc, db, doc, setPersistence, browserSessionPersistence, collection } from '../../firebase.js';

onInit();

function onInit(){
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
        const displayName = user.name;
        const uid = user.uid;

        console.log(displayName);

        document.getElementById("display_name").innerHTML = displayName;
    }else{
        console.log("not logged");
    }
}

function getStats(){

    const users = collection(db,'users');

    getDoc(doc(users, uid), {}).onSnapshot().then((doc) => {
        let stats = document.getElementsByClassName("stats");
        spanUserInfo.innerHTML = doc.data().name;

        let i = 0;

        doc.data().stats.array.forEach(element => {
            stats[i].innerHTML = doc.data().stats[element];
            i++;
        });
    });
}

export { signIn }