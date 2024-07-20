<script lang="ts">
	import { portal, type HTMLElementOrSelector } from './portal.js';

	export let target: HTMLElementOrSelector = 'body';
</script>

<div use:portal={target} hidden>
	<slot />
</div>
