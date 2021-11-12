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
  <p class="meta"><a href="#/item/{item.id}" class="comment">{comment_text()}</a> by {item.user} {item.time_ago}</p>
</article>

<style>
  article {
    position: relative;
    padding: 0 0 0 2em;
    border-bottom: 1px solid #d08770;
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
    color: #3b4252;
    font-size: large;
    font-weight: 700;
  }

  .comment {
    color: #5e81ac;
    font-weight: 700;
  }
</style>
