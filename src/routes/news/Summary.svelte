<script lang="ts">
  export let item;
  export let i;
  export let offset;

  function comment_text() {
    const c = item.comments_count;
    return `${c} ${c === 1 ? 'comment' : 'comments'}`;
  }

  $: url = item.type === 'ask' ? `https://news.ycombinator.com/${item.url}` : item.url;
</script>

<article>
  <span>{i + offset + 1}</span>
  <h2><a target="_blank" href={url} class="item">{item.title}</a></h2>
  <p class="time"><a href="#/item/{item.id}" class="comment">{comment_text()}</a> by {item.user} {item.time_ago}</p>
</article>

<style>
  article {
    position: relative;
    padding: 0 0 0 2em;
    border-bottom: 1px solid var(--cds-interactive-01);
  }

  h2 {
    font-size: 1em;
    margin: 0.5em 0;
  }

  span {
    position: absolute;
    left: 0;
  }

  .item {
    color: var(--cds-link-02);
    font-size: large;
    font-weight: 700;
  }

  .comment {
    color: var(--cds-text-02);
    font-weight: 700;
  }

  .time {
    color: var(--cds-interactive-04);
    font-weight: 500;
  }
</style>
