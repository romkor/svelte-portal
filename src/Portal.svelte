<script>
  import { onMount, onDestroy } from "svelte";

  export let target = document.body;

  let portal;
  let componentInstance;

  onMount(() => {
    portal = document.createElement("div");
    portal.className = "svelte-portal";
    target.appendChild(portal);
    portal.appendChild(componentInstance);
  });

  onDestroy(() => {
    target.removeChild(portal);
  });
</script>

<div bind:this={componentInstance}>
  <slot />
</div>
