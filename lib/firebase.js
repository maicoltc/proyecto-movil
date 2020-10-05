import * as firebase from 'firebase'

class Firebase {
    static init(){
        firebase.initializeApp({
            api_key: "AIzaSyBGTMpEFxTLfV2C-ZEysxpTZSrAio78-Rc",
            storage_bucket: "primer-proyecto-cd298.appspot.com",

        })
    }
}