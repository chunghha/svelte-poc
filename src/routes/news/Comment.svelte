<script lang="ts">
  export let comment;
</script>

<article>
  <p class="meta">{comment.user} {comment.time_ago}</p>

  <p class="content">{comment.content}</p>

  <div class="replies">
    {#each comment.comments as child}
      <svelte:self comment={child} />
    {/each}
  </div>
</article>

<style>
  article {
    border-top: 1px solid salmon;
    margin: 1em 0 0 0;
    padding: 1em 0 0 0;
    font-size: 1rem;
  }

  .content {
    color: var(--cds-text-01);
  }

  .meta {
    color: var(--cds-text-02);
    font-weight: 700;
  }

  .replies {
    padding: 0 0 0 1em;
  }
</style>
