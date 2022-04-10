<script lang="ts">
  let potion: ReturnType<typeof lib.createAlchemyPotion> | null = null

  function createPotion() {
    potion = lib.createAlchemyPotion()
  }
</script>

<button class="click-and-remove-link" on:click={createPotion}>
  <h6>Generate a random potion!</h6>
</button>

{#if potion}
  <div class="descriptive">
    <h6>{potion.titleReadout}</h6>
    {potion.descriptionReadout}
    <blockquote>{potion.effectReadout}</blockquote>
  </div>
{/if}
