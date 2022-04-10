<script>
  import MagicPotion from "./MagicPotion.svelte"
  import MagicArmour from "./MagicArmour.svelte"
  import MagicWeapon from "./MagicWeapon.svelte"
  import MagicTrinket from "./MagicTrinket.svelte"
  import Trap from "./Trap.svelte"
  import PubRumour from "./PubRumour.svelte"
</script>

<div>
  <div>
    <MagicPotion />
  </div>

  <div>
    <MagicArmour />
  </div>

  <div>
    <MagicWeapon />
  </div>

  <div>
    <MagicTrinket />
  </div>

  <div>
    <Trap />
  </div>

  <div>
    <PubRumour />
  </div>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }

  div > :global(button) {
    padding: 8px;
    margin: 8px 0;
    border: none;
    text-align: left;
  }

  div > :global(button:not(:hover)) {
    background: none;
  }
</style>
