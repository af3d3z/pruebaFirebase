const firebaseConfig = {
    apiKey: "AIzaSyDmxWghcDhesRQ6fDJ9s141jKgwmF0zJI8",
    authDomain: "pruebafirebase-f5a4b.firebaseapp.com",
    projectId: "pruebafirebase-f5a4b",
    storageBucket: "pruebafirebase-f5a4b.appspot.com",
    messagingSenderId: "780196378718",
    appId: "1:780196378718:web:a6a0afab02912aac4bdccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new firebase.auth.GithubAuthProvider();

function signInWithGitHub() {
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // User signed in successfully
            const user = result.user;
            console.log('User:', user);

            // Access token
            const credential = result.credential;
            const accessToken = credential.accessToken;

            console.log('Access Token:', accessToken);
        })
        .catch((error) => {
            // Handle errors here
            console.error('Error during sign-in:', error.message);
        });
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in:', user);
    } else {
        // No user is signed in
        console.log('No user is signed in');
    }
});