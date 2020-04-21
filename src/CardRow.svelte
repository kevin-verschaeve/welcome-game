<script>
    export let cards;
</script>

<div class="card-row" style="display: flex;">
    {#each cards as card}
        <div style="padding: 20px; width: 200px;">
            <slot {card}>{card.value}</slot>
        </div>
    {/each}
</div>
