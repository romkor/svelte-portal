<script>
	import { fade } from 'svelte/transition';
	import Portal from '../src/lib/Portal.svelte';

	export let modalVisible = true;
	export let containerVisible = true;
</script>

{#if containerVisible}
	<div out:fade={{ duration: 100 }} on:outroend>
		{#if modalVisible}
			<Portal target="#modals">
				<div id="modal" />
			</Portal>
		{/if}
	</div>
{/if}
<div id="modals" />
