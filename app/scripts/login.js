import { signInWithEmailAndPassword, getAuth, getDoc, db, doc, setPersistence, browserSessionPersistence, collection } from '../../firebase.js';

document.getElementById("login").onclick = function () { signIn(document.getElementById("email").value, document.getElementById("password").value)};

function processSignIn(email , password){
    let spanUserInfo = document.getElementById("display_name");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((data) => {
        const docRef = doc(db, "users", data.user.uid)
        getDoc(docRef).then((doc) => {
            spanUserInfo.innerHTML = doc.data().name;
            window.location.href = "http://127.0.0.1:5500/app/pages/character_sheet.html"
            console.log("logado");
        }).catch((error) => {
            console.log(error);
        });
    });
}

function signIn(email, password){
    
    const auth = getAuth();

    let login_persistent = document.getElementById("persistent-login");

    if(login_persistent.checked){
        setPersistence(auth, browserSessionPersistence)
        
  .then(() => {

    return processSignIn( email, password);
  })
    }else{
       return processSignIn( email, password);
    }
}