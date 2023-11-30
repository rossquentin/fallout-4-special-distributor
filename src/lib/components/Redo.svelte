<script lang="ts">
	export let canRedo;
	export let redo;
</script>

<svelte:window
	on:keydown|preventDefault={(e) => {
		if (e.code === 'ArrowRight' && $canRedo) {
			redo();
		}
	}}
/>

<button
	class="p-2 rounded-xl bg-slate-700
	{$canRedo
		? 'bg-slate-700 hover:bg-slate-700/80  transition active:translate-y-0.5 stroke-white'
		: 'bg-slate-700/50 stroke-white/50'}"
	on:click|preventDefault={redo}
	disabled={!$canRedo}
	><svg
		class="w-8 h-8 stroke-white"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M6 13C6.50963 11.9961 7.37532 11.1655 8.46665 10.6333C9.55797 10.1011 10.8158 9.89624 12.0506 10.0495C14.0687 10.3 15.4753 11.6116 17 12.8186M17 10V13H14"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg></button
>
