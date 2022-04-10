<script lang="ts">
  import { MagicItem } from "@lib"

  let weapon: MagicItem

  function createMagicWeapon() {
    weapon = lib.createMagic("weapon")
  }
</script>

<button class="click-and-remove-link" on:click={createMagicWeapon}>
  <h6>Create a magic weapon</h6>
</button>

{#if weapon}
  <div class="descriptive">
    <h6>{weapon.name}</h6>
    {weapon.description}
  </div>
{/if}

<style>
  button {
    margin: 0;
    border: none;
  }
</style>
