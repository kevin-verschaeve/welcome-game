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

<Doc path={`games/${params.game}`} let:data={game} let:ref={gameRef}>
    <div id="plans">
        {#each game.plans as plan}
            <a href="#" on:click|preventDefault={objectiveDone(game, gameRef, plan)} style="display: inline-block; ">
                <img src="plans/level{plan.level}/{plan.done ? 'complete' : 'initial'}/{plan.objective}.png" alt="{plan.level}">
            </a>
        {/each}
    </div>

    <div id="actions">
        <CardRow cards={game.firstRow}/>

        <CardRow cards={game.secondRow} let:card>
            <img src="actions/{card.action}.png" alt="{card.action}" style="max-width: 100%;">
        </CardRow>
    </div>

    <button on:click={nextRound(game, gameRef)}>Suivant</button>
    <button on:click={restart(gameRef)}>Nouvelle partie</button>
</Doc>
