<script>
    import { Doc } from "sveltefire";
    export let params;

    const nextRound = (game, gameRef) => {
        game.secondRow.map(c => game.deck.unshift(c));
        game.secondRow = game.firstRow;
        game.firstRow = game.deck.splice(game.deck.length - 3, game.deck.length);

        gameRef.set(game);
    };
</script>

<Doc path={`games/${params.game}`} let:data={game} let:ref={gameRef}>
    <div id="first" style="display: flex;">
        {#each game.firstRow as card}
            <div style="padding: 20px; border: 1px solid black; width: 200px;">
                {card.value}
            </div>
        {/each}
    </div>

    <div id="second" style="display: flex;">
        {#each game.secondRow as card}
            <div style="padding: 20px; border: 1px solid black; width: 200px;">
                <img src="actions/{card.action}.png" alt="{card.action}" style="max-width: 100%;">
            </div>
        {/each}
    </div>

    <button on:click={nextRound(game, gameRef)}>Suivant</button>
</Doc>
