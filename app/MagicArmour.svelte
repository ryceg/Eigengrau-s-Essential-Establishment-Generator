<script lang="ts">
  import { MagicItem } from "@lib"

  let armour: MagicItem

  function createMagicWeapon() {
    armour = lib.createMagic("armour")
  }
</script>

<button class="click-and-remove-link" on:click={createMagicWeapon}>
  <h6>Create a magic armour</h6>
</button>

{#if armour}
  <div class="descriptive">
    <h6>{armour.name}</h6>
    {armour.description}
  </div>
{/if}

<style>
  button {
    padding: 0;
    margin: 8px 0;
    border: none;
  }
</style>
