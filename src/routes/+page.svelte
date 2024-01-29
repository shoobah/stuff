<script>
  import dummyData from '$lib/dummyData.json';
	import { createState } from '$lib/pager.svelte.js';
  let {form} = $props();
  let lastResult = $state(dummyData);
  let query = $state('');

  let pager = createState();

  if(form){
    lastResult = form;
  }

  function back(){
    if(pager.page>1){
      pager.decrement();
    }
  }

  function forward(){
    if(pager.page < Number.parseInt( lastResult.totalResults)/10){
      pager.increment();
    }
  }
</script>

<h1>Sök film</h1>
<form method="POST">
  <input type="text" name="title" value={query} />
  <button type="submit">Sök</button>
  <div>
    <button on:click={()=>back()}>Bakåt</button>
    <button on:click={()=>forward()}>Framåt</button>
    <div>{pager.page}</div>
  </div>
</form>
<div>
  <h2>Hittade {lastResult.totalResults} titlar</h2>
</div>

<div class="result-list">
  {#if lastResult && lastResult.Search}
      {#each lastResult.Search as movie}
      <div class="movie-info">
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
      </div>
      {/each}
  {:else}
    <p>Inga resultat</p>
  {/if}
</div>

<style>
  .result-list{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    container-type: inline-size;
    gap: 20px;
  }

  .movie-info{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .movie-info img{
    width: 100%;
    height: auto;
  }
  img{
    width: 100%;
    max-width: 400px;
    height: auto;
  }

  @media(max-width: 768px){
    .result-list{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>