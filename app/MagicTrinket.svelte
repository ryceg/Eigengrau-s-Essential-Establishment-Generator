<script lang="ts">
  import { MagicItem } from "@lib"

  let trinket: MagicItem

  function createMagicWeapon() {
    trinket = lib.createMagic("trinket")
  }
</script>

<button class="click-and-remove-link" on:click={createMagicWeapon}>
  <h6>Create a magic trinket</h6>
</button>

{#if trinket}
  <div class="descriptive">
    <h6>{trinket.name}</h6>
    {trinket.description}
  </div>
{/if}
