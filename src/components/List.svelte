<script lang="ts">
    import { onMount } from "svelte";
  
    let books = [];
    let readBooks = new Set();
    let showRead = false;
  
    onMount(async () => {
      const response = await fetch("https://openlibrary.org/search.json?q=test");
      const data = await response.json();
      books = data.docs.slice(0, 10);
    });

    function markAsRead(bookKey) {
      readBooks = new Set(readBooks); 
      readBooks.add(bookKey);
    }

    function deleteBook(bookKey) {
      books = books.filter(book => book.key !== bookKey);
      readBooks = new Set(readBooks);
      readBooks.delete(bookKey);
    }

    $: filteredBooks = books.filter(book => showRead ? readBooks.has(book.key) : !readBooks.has(book.key));
</script>


<button class="button-filter" on:click={() => showRead = !showRead}>
    {showRead ? 'Afficher les livres non lus' : 'Afficher les livres lus'}
</button>

  
  <div class="card-container">
    {#each filteredBooks as book}
      <div class="book-card">
        {#if book.cover_i}
          <img class="book-cover" alt="Cover" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />
        {/if}
        <div class="book-title">{book.title}</div>
        <div class="book-author">Auteur: {book.author_name ? book.author_name.join(', ') : 'Inconnu'}</div>
        <div class="book-pub-date">Date de publication: {book.first_publish_year || 'Inconnu'}</div>
  
        {#if readBooks.has(book.key)}
          <span class="badge">Lu</span>
        {/if}
  
        {#if !readBooks.has(book.key)}
          <button on:click={() => markAsRead(book.key)}>Marquer comme lu</button>
        {/if}
        <button on:click={() => deleteBook(book.key)}>Supprimer</button>
      </div>
    {/each}
  </div>
  
<style>
    .book-card {
        border: 1px solid #dd7fefd7;
        border-radius: 8px;
        padding: 16px;
        margin: 16px;
        width: 250px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease;
    }

    .book-card:hover {
        transform: scale(1.05);
    }

    .book-title {
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: 8px;
    }

    .book-author,
    .book-pub-date {
        font-size: 1em;
        color: #555;
        margin-bottom: 4px;
    }

    .badge {
        background-color: #4CAF50;
        color: white;
        padding: 5px;
        border-radius: 3px;
        margin-top: 10px;
        display: inline-block;
    }

    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    button {
        margin-top: 10px;
        padding: 8px;
        border: none;
        background-color: #ae00ff;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        align-content: center;
    }

    button:hover {
        background-color: #7a26a0;
    }

    button.button-filter {
        display: block;
        margin: 20px auto;
        padding: 10px 16px;
        font-size: 16px;
        border: none;
        background-color: #ae00ff;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        transition: background 0.3s ease-in-out;
    }

    button.button-filter:hover {
        background-color: #7a26a0;
    }


</style>
  