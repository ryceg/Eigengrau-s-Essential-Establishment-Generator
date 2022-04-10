<script lang="ts">
  let rumour: ReturnType<typeof lib.createPubRumour>

  function createTrap() {
    rumour = lib.createPubRumour()
  }
</script>

<button class="click-and-remove-link" on:click={createTrap}>
  <h6>Create a pub rumour</h6>
</button>

{#if rumour}
  <div class="descriptive">
    {rumour}
  </div>
{/if}
