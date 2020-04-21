<script>
    export let cards;
</script>

<div class="card-row">
    {#each cards as card}
        <div>
            <slot {card}>{card.value}</slot>
        </div>
    {/each}
</div>
