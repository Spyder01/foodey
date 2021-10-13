import {atom} from 'recoil';


const store = {
    name: atom({
        key: 'name',
        default: null
    }),
    isLoggedIn: atom({
        key: 'isLoggedIn',
        default: false
    }),
    subscription: atom({
        key: 'subscription',
        default: 'month'
    }),
    email: atom({
        key: 'email',
        default: ''
    }),
    phoneNo: atom({
        key: 'phoneNo',
        default: ''
    })
    

}


export default store;