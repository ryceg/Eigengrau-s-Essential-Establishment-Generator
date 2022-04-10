<script lang="ts">
  import { Trap } from "@lib"

  let trap: Trap

  function createTrap() {
    trap = lib.createTrap()
  }
</script>

<button class="click-and-remove-link" on:click={createTrap}>
  <h6>Create a trap</h6>
</button>

{#if trap}
  <div class="descriptive">
    {trap.description}
  </div>
{/if}
