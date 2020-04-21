<script>
	import { FirebaseApp } from "sveltefire";
	import firebase from "firebase/app";
	import "firebase/firestore";
	import Router from 'svelte-spa-router'
	import routes from './Routes.js';

	let firebaseConfig = {
		apiKey: "AIzaSyDNAwJz6SfzoV4HIVVGzdATuXossK1D3sI",
		authDomain: "welcome-5e266.firebaseapp.com",
		databaseURL: "https://welcome-5e266.firebaseio.com",
		projectId: "welcome-5e266",
		storageBucket: "welcome-5e266.appspot.com",
		messagingSenderId: "963212151610",
		appId: "1:963212151610:web:eb4462f3fc09420f185e03"
	};
	firebase.initializeApp(firebaseConfig);
</script>

<FirebaseApp {firebase}>
	<Router {routes}/>
</FirebaseApp>
