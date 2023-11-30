<script lang="ts">
	export let content: string = 'Text';
	export let subtext: string = 'Text';

	let show = false;
</script>

<div class="relative w-12 h-0">
	<div on:mouseenter={() => (show = true)} on:mouseleave={() => (show = false)}>
		<slot />
	</div>
	{#if show}
		<div
			class=" caret -translate-x-1/2 translate-y-3 left-1/2 p-4 py-2 absolute rounded-xl bg-slate-900 text-white flex flex-col items-center before:border-x"
		>
			<p class="text-sm whitespace-nowrap">{content}</p>
			<p class="text-xs text-slate-300 whitespace-nowrap">{subtext}</p>
		</div>
	{/if}
</div>


<style>
    .caret:before {
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        @apply border-b-[8px] border-b-slate-900;
        top: -8px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>