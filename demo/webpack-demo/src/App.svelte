<script>
  import Portal from "svelte-portal";

  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>

<Portal>Hello from Portal</Portal>
