<script>
    import {Doc} from "sveltefire";
    import CardRow from "./CardRow.svelte";
    import { newGame } from './Services/GameManager';

    export let params;

    const nextRound = (game, gameRef) => {
        game.secondRow.map(c => game.deck.unshift(c));
        game.secondRow = game.firstRow;
        game.firstRow = game.deck.splice(game.deck.length - 3, game.deck.length);

        gameRef.set(game);
    };

    const objectiveDone = (game, gameRef, plan) => {
        const p  = game.plans.find(p => p.level == plan.level);
        p.done = !p.done;
        gameRef.set(game);
    };

    const restart = (gameRef) => {
        gameRef.set(newGame());
    };
</script>
<div id="main_container">
<Doc path={`games/${params.game}`} let:data={game} let:ref={gameRef}>
    <div id="plans">
        <h5>Objectifs</h5>
        {#each game.plans as plan}
            <a href="#" on:click|preventDefault={objectiveDone(game, gameRef, plan)}>
                <img src="plans/level{plan.level}/{plan.done ? 'complete' : 'initial'}/{plan.objective}.png" alt="{plan.level}">
            </a>
        {/each}
    </div>

    <div id="actions">
        <CardRow cards={game.firstRow} let:card>
            <img src="images/carte_{card.value}/carte_{card.value}_{card.action}.png" alt="{card.action}">
        </CardRow>

        <CardRow cards={game.secondRow} let:card>
            <img src="images/actions/{card.action}.png" alt="{card.action}">
        </CardRow>       

        <button class="btn waves-effect waves-light" on:click={nextRound(game, gameRef)}>Suivant</button>
        <button class="btn waves-effect waves-light space-left" on:click={restart(gameRef)}>Nouvelle partie</button>
    </div>
</Doc>
</div>