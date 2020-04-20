<script>
    import {Doc} from "sveltefire";
    import CardRow from "./CardRow.svelte";

    export let params;

    const nextRound = (game, gameRef) => {
        game.secondRow.map(c => game.deck.unshift(c));
        game.secondRow = game.firstRow;
        game.firstRow = game.deck.splice(game.deck.length - 3, game.deck.length);

        gameRef.set(game);
    };
</script>

<Doc path={`games/${params.game}`} let:data={game} let:ref={gameRef}>
    <CardRow cards={game.firstRow}/>

    <CardRow cards={game.secondRow} let:card>
        <img src="actions/{card.action}.png" alt="{card.action}" style="max-width: 100%;">
    </CardRow>

    <button on:click={nextRound(game, gameRef)}>Suivant</button>
</Doc>
