// get data

db.collection("business").get().then(snapshot => {
    console.log(snapshot.docs);
})
//listen for auth status changes

auth.onAuthStateChanged(user => {
    if (user) {
        console.log("user logged in: ", user);
    } else {
        console.log("user logged out: ", user);
    }
})


// signup

const signupForm = document.querySelector("#signup")
signupForm.addEventListener("submit", (e) =>  {
    e.preventDefault();
    // get user info
    const email = signupForm["signupEmail"].value;
    const password = signupForm["signupPassword"].value;

    //sign up the user

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        console.log("user signed up")
        signupForm.reset();
        window.open('', '_self', ''); window.close();
        window.open("CONTRACTOR.html")
    })
})

// logout 
/*
const logout = document.querySelector("#logout");

logout.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut();
})
*/


// login

const loginForm = document.querySelector("#login");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm["loginEmail"].value;
    const password = loginForm["loginPassword"].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        loginForm.reset();
        window.open('', '_self', ''); window.close();
        window.open("CONTRACTOR.html")
    })
})