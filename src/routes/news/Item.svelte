<script lang="ts">
  import Comment from './Comment.svelte';

  export let item;
  export let returnTo;

  $: url = !item.domain ? `https://news.ycombinator.com/${item.url}` : item.url;
</script>

<a href={returnTo}>&laquo; back</a>

<article>
  <a href={url}>
    <h1>{item.title}</h1>
    {#if item.domain}
      <small class="small">{item.domain}</small>
    {/if}
  </a>

  <p class="item">submitted by {item.user} {item.time_ago}</p>
</article>

<div class="comments">
  {#each item.comments as comment}
    <Comment {comment} />
  {/each}
</div>

<style>
  article {
    margin: 0 0 1em 0;
  }

  a {
    color: var(--cds-support-03);
    font-weight: 700;
    display: block;
    margin: 0 0 1em 0;
  }

  h1 {
    color: var(--cds-text-01);
    font-size: 1.4em;
    margin: 0;
  }

  small {
    color: var(--cds-text-02);
  }

  .item {
    color: var(--cds-interactive-04);
  }
</style>
