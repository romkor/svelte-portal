<script>
  import { onMount, onDestroy } from "svelte";

  let portal;
  let componentInstance;

  onMount(() => {
    portal = document.createElement("div");
    portal.className = "svelte-portal";
    document.body.appendChild(portal);
    portal.appendChild(componentInstance);
  });

  onDestroy(() => {
    document.body.removeChild(portal);
  });
</script>

<div bind:this={componentInstance}>
  <slot />
</div>
