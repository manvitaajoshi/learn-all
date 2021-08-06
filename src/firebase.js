import firebase from "firebase/app"
import "firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyByhOiyAYzurPHc7o2I45fsjy_yLYHlgaU",
    authDomain: "learnall-dd838.firebaseapp.com",
    databaseURL: "https://learnall-dd838-default-rtdb.firebaseio.com",
    projectId: "learnall-dd838",
    storageBucket: "learnall-dd838.appspot.com",
    messagingSenderId: "445605169243",
    appId: "1:445605169243:web:57e55486c4cbf17a43577e"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;