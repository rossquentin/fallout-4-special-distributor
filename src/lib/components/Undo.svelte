<script lang="ts">
	export let undo;
	export let canUndo;
</script>

<svelte:window
	on:keydown|preventDefault={(e) => {
		if (e.code === 'ArrowLeft' && $canUndo) {
			undo();
		}
	}}
/>

<button
	class="p-2 rounded-xl w-fit
    {$canUndo
		? 'bg-slate-700 hover:bg-slate-700/80  transition active:translate-y-0.5 stroke-white'
		: 'bg-slate-700/50 stroke-white/50'}"
	on:click|preventDefault={undo}
	disabled={!$canUndo}
	><svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M18 13C17.4904 11.9961 16.6247 11.1655 15.5334 10.6333C14.442 10.1011 13.1842 9.89624 11.9494 10.0495C9.93127 10.3 8.52468 11.6116 7 12.8186M7 10V13H10"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg></button
>
