<script lang="ts">
  let randomPotion: ReturnType<typeof lib.createAlchemyPotion> | null = null

  function createPotion() {
    randomPotion = lib.createAlchemyPotion()
  }
</script>

<button class="click-and-remove-link" on:click={createPotion}>
  <h6>Generate a random potion!</h6>
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

<style>
  button {
    margin: 0;
    border: none;
  }
</style>
