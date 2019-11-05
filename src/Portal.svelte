<script>
  import { onMount, onDestroy } from "svelte";

  export let host = document.body;

  let portal;
  let componentInstance;

  onMount(() => {
    portal = document.createElement("div");
    portal.className = "svelte-portal";
    host.appendChild(portal);
    portal.appendChild(componentInstance);
  });

  onDestroy(() => {
    host.removeChild(portal);
  });
</script>

<div bind:this={componentInstance}>
  <slot />
</div>
