import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyB4-NeNuwin_5xuayRSpNNpYAS24G_buB8",
  authDomain: "nba-project-9868a.firebaseapp.com",
  databaseURL: "https://nba-project-9868a.firebaseio.com",
  projectId: "nba-project-9868a",
  storageBucket: "nba-project-9868a.appspot.com",
  messagingSenderId: "998044131155"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebaseVideos = firebaseDB.ref("videos");

const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseVideos,
  firebaseTeams,
  firebaseLooper
};
