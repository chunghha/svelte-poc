<script lang="ts">
  import { BarChartSimple } from '@carbon/charts-svelte';
  import { onMount } from 'svelte';
  let chart;
  function barMouseOver(e) {
    console.log(e.detail);
  }
  onMount(() => {
    return () => {
      if (chart) chart.services.events.removeEventListener('bar-mouseover', barMouseOver);
    };
  });
  $: if (chart) chart.services.events.addEventListener('bar-mouseover', barMouseOver);
</script>

<BarChartSimple
  bind:chart
  data={[
    { group: 'Qty', value: 65000 },
    { group: 'More', value: 29123 },
    { group: 'Sold', value: 35213 },
    { group: 'Restocking', value: 51213 },
    { group: 'Misc', value: 16932 }
  ]}
  options={{
    title: 'EventListener on mouseover',
    height: '400px',
    axes: {
      left: { mapsTo: 'value' },
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      bottom: { mapsTo: 'group', scaleType: 'labels' }
    }
  }}
/>
