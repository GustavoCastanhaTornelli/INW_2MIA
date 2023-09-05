//troca com os dados que estão no seu projeto no firebase
const firebaseConfig = {
    apiKey: "AIzaSyDL8YxpVmb5VR-5-yZNk4iXhDzKFb6cos0",
    authDomain: "projeto2mia.firebaseapp.com",
    projectId: "projeto2mia",
    storageBucket: "projeto2mia.appspot.com",
    messagingSenderId: "241069530695",
    appId: "1:241069530695:web:ce3dcda1e08d783eb9db62"
  }; 

  firebase.initializeApp(firebaseConfig);

  const emailField =  document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('loginButton')

  loginButton.addEventListener('click', ()=>{
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log("Usuário logado: ",user)
    })
    .catch((error)=>{
      const errorMessage = error.message;
      console.error("Erro de autenticação: ", errorMessage)
    });
  });