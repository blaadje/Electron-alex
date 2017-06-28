/*var Vue = require('vue')*/
var VueFire = require('vuefire')
var firebase = require('firebase')

Vue.use(VueFire)

var firebaseApp = firebase.initializeApp({ 
    piKey: "AIzaSyBz73_KOl_AYMfeJnBQ7lBCyH-KuSUQsqQ",
    authDomain: "projet-tets.firebaseapp.com",
    databaseURL: "https://projet-tets.firebaseio.com",
    projectId: "projet-tets",
    storageBucket: "projet-tets.appspot.com",
    messagingSenderId: "304277615671"
 }).database()

var userRef = firebaseApp.ref('users')

var vm = new Vue({
  el: '#app',
  firebase: {
    users: userRef
  }
})

