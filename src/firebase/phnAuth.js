import { app } from './firebaseConfig'
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
}, auth);



const signINWithPhoneNumber =  (phnNo) =>{
 
    let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            alert("code sent")
            setshow(true);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
}