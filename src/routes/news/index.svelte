<script lang="ts">
  import { Content, Grid, RadioButton, RadioButtonGroup, Row, Theme } from 'carbon-components-svelte';
  import ColorSwitch16 from 'carbon-icons-svelte/lib/ColorSwitch16';
  import { onMount } from 'svelte';
  import Item from './Item.svelte';
  import List from './List.svelte';

  let item;
  let page;
  let theme;

  async function hashchange() {
    // the poor man's router!
    const path = window.location.hash.slice(1);

    if (path.startsWith('/item')) {
      const id = path.slice(6);
      item = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`).then(r => r.json());

      window.scrollTo(0, 0);
    } else if (path.startsWith('/top')) {
      page = +path.slice(5);
      item = null;
    } else {
      window.location.hash = '/top/1';
    }
  }

  onMount(hashchange);
</script>

<svelte:window on:hashchange={hashchange} />

<Theme bind:theme />

<main>
  <Content style="padding: 1rem">
    <Grid fullWidth>
      <Row>
        <div style="padding: 0 0.8rem 0 1.5rem;"><ColorSwitch16 /></div>
        <RadioButtonGroup legendText="Carbon theme" bind:selected={theme}>
          {#each ['white', 'g10', 'g80', 'g90', 'g100'] as value}
            <RadioButton labelText={value} {value} />
          {/each}
        </RadioButtonGroup>
      </Row>
      <hr />
      {#if item}
        <Item {item} returnTo="#/top/{page}" />
      {:else if page}
        <List {page} />
      {/if}
    </Grid>
  </Content>
</main>

<style>
  main {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    min-height: 101vh;
    padding: 1em;
  }

  main :global(.meta) {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0 0 1em 0;
  }
</style>
