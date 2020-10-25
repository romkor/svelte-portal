<script lang="ts">
  import Portal, { portal } from "svelte-portal/src/Portal.svelte";
  import Avatar from "./components/Avatar.svelte";
  import Cube from "./components/Cube.svelte";

  type PortalColor = "orange" | "blue";

  let visible = true;
  let color: PortalColor = "orange";

  function toggle() {
    visible = !visible;
  }
  function swap() {
    color = color === "orange" ? "blue" : "orange";
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Svelte-Portal</h1>
  <p>
    <Portal target={document.getElementById('avatar')}>
      <Avatar />
    </Portal>

    <button on:click={toggle}>{visible ? 'hide' : 'show'}</button>
    <button on:click={swap}>Swap cubes</button>
    {#if visible}
      <Portal>Portal content injected into the body</Portal>
      <div use:portal hidden>
        This is also injected into the body, but without a wrapper element
      </div>
    {/if}
  </p>
  <!-- 
    When `display: contents` is supported, the browser will ignore the wrapper div.
    That why the flex-direction different between the red and blue portals.
  -->
  <div use:portal={`.portal--${color}`} style="display: contents" hidden>
    <Cube />
    <Cube />
  </div>
</main>
