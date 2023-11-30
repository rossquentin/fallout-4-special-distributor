<script lang="ts">
	import Chart from '$lib/components/Chart.svelte';
	import Undo from '$lib/components/Undo.svelte';
	import Random from '$lib/components/Random.svelte';
	import Redo from '$lib/components/Redo.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';

	import undoable from '$lib/stores/undoable';
	import special from '$lib/stores/special';

	const [data, undo, redo, canUndo, canRedo] = undoable(special);
</script>

<div class="min-h-screen min-w-fit bg-slate-800 p-6 gap-10 flex items-center flex-col">
	<h1 class="text-3xl max-w-xs text-center">Fallout 4 Random SPECIAL Distributor</h1>
	<div class="flex flex-col gap-4 items-center">
		<div class="bg-slate-900 p-6 rounded-xl w-[800px]">
			<Chart {data} />
		</div>
		<div class="flex gap-4">
			<Tooltip content="Undo" subtext="(← Left arrow)">
				<Undo {undo} {canUndo} />
			</Tooltip>
			<Tooltip content="Randomize" subtext="(Space)">
				<Random {data} />
			</Tooltip>
			<Tooltip content="Redo" subtext="(→ Right arrow)">
				<Redo {redo} {canRedo} />
			</Tooltip>
		</div>
	</div>
</div>
