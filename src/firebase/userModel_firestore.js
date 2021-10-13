import { getFirestore } from "firebase/firestore";

import { collection, addDoc } from "firebase/firestore"; 



const db = getFirestore();

const addUser = async ( userName, email, phn , sub) =>{

    const collectionRef = collection(db , "users");
    await addDoc(collectionRef , {
        email : email,
        phnNo : phn,
        userid : userName,
        subscription : sub,
    })

}

addUser ({
    email: 'suhan01.nsdkbcskd@email.com',
    phnNo: '123',
    userid: 'user',
    subscription: 'month'
})

export default addUser;