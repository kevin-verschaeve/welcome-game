<script>
    import { getContext } from 'svelte';
    import { push } from 'svelte-spa-router';
    import { newGame } from './Services/GameManager';

    let name;
    const create = () => {
        const gameId = name + '-' + Math.random().toString(36).substr(2, 6);
        getContext('firebase').firestore().doc(`games/${gameId}`).set(newGame()).then(() => push(`/game/${gameId}`));
    }
</script>
<div id="main_container">
    <div id="home" class="box">
        <img src="welcome_logo.png"/>
        <h4>Créer une nouvelle partie</h4><br/>
        <input placeholder="Nom de la partie" type="text" bind:value={name}>
        <button class="btn waves-effect waves-light" on:click={create}>Créer</button>
    </div>
</div>