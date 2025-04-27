document.addEventListener("DOMContentLoaded",event=>{
  const app = firebase.app();
  const db = firebase.firestore();
  const post = db.collection('posts').doc('mypost');
  post.get()
  .then(doc => {
      const data = doc.data();
      document.getElementById("firstpara").textContent=data.title;
      
  })
  console.log(app);
  const cors = require('cors')({origin: true}); 
});
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(result => {
          const user=result.user;
          document.getElementById("maintitle").textContent=`Hello ${user.displayName}`;
          console.log(user)
      }
  )
  .catch(console.log)
}