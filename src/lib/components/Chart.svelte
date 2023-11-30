<script lang="ts">
	import Chart, { Tooltip } from 'chart.js/auto';
	import ChartDataLabels from 'chartjs-plugin-datalabels';
	import { onMount } from 'svelte';
	export let data;

	let ctx: HTMLCanvasElement;
	let specialChart: Chart;

	$: if (specialChart) {
		specialChart.data.labels = Object.keys($data);
		specialChart.data.datasets[0].data = Object.values($data);
		specialChart.update();
	}

	Tooltip.positioners.custom = function (elements, eventPosition) {
		if (elements.length) {
			const { x, y, base } = elements[0].element;
			const height = !base ? 0 : base - y;
			return {
				x: eventPosition.x,
				y: y
			};
		}

		return {
			x: eventPosition.x,
			y: eventPosition.y
		};
	};

	onMount(() => {
		specialChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: Object.keys($data),
				datasets: [
					{
						data: Object.values($data),
						backgroundColor: 'rgb(27,255,128)',
						borderRadius: 5,
						borderSkipped: false
					}
				]
			},
			plugins: [ChartDataLabels],
			options: {
				responsive: true,
				interaction: {
					mode: 'index'
				},
				layout: {
					padding: {
						top: 0,
						bottom: 0,
						left: 0,
						right: 25
					}
				},
				indexAxis: 'y',
				scales: {
					x: {
						min: 0,
						max: 10,
						ticks: {
							stepSize: 10,
							color: 'white'
						},
						grid: {
							display: false
						},
						border: {
							display: false
						}
					},
					y: {
						ticks: {
							color: 'white'
						},
						grid: {
							display: false
						},
						border: {
							display: false
						}
					}
				},
				plugins: {
					datalabels: {
						anchor: 'end',
						align: 'end',
						color: 'white'
					},
					legend: {
						display: false
					},
					tooltip: {
						enabled: true,
						position: 'custom'
					}
				}
			}
		});
	});
</script>

<canvas bind:this={ctx} />
