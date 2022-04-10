<script lang="ts">
  let randomPotion: ReturnType<typeof lib.createAlchemyPotion> | null = null

  function createPotion() {
    randomPotion = lib.createAlchemyPotion()
  }
</script>

<button class="click-and-remove-link" on:click={createPotion}>
  <span>Generate a random potion!</span>
</button>

{#if randomPotion}
  <span id="randpotion">
    <div class="descriptive">
      <h6>{randomPotion.titleReadout}</h6>
      {randomPotion.descriptionReadout}
      <blockquote>{randomPotion.effectReadout}</blockquote>
    </div>
  </span>
{/if}
