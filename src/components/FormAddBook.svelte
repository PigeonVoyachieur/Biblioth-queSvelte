<script lang="ts">
    // Déclaration des variables
    let title: string = "";
    let author: string = "";
    let description: string = "";
    let publicationDate: string = "";
    let message: string = "";
    
    let recentBooks: { title: string; author: string; description: string; publicationDate: string }[] = [];

    export function submit(): void {
        const dateRegex = /^\d{4}$/;
 
        if (!title) {
            alert("Veuillez renseigner un titre pour ajouter un livre !");
            return;
        }

        if (!author) {
            alert("Veuillez renseigner un auteur pour ajouter un livre !");
            return;
        }

        if (!dateRegex.test(publicationDate)) {
            alert("Veuillez entrer une date de publication valide (Année) !");
            return;
        }

        recentBooks = [
            ...recentBooks,
            { title, author, description, publicationDate }
        ];

        message = `Le livre nommé "${title}" de ${author} a bien été ajouté.`;

        title = '';
        author = '';
        description = '';
        publicationDate = '';
    }
</script>

<h2> Ajouter un livre</h2>
<form on:submit={submit}>
    <input type="text" bind:value={title} placeholder="Titre du livre" required />
    <input type="text" bind:value={author} placeholder="Auteur du livre" required />
    <input type="text" bind:value={description} placeholder="Description du livre" />
    <input type="text" bind:value={publicationDate} placeholder="Date de publication du livre" required />

    <button type="submit">Ajouter</button>
</form>

<p>{message}</p>


<h2>Ajouts Récents</h2>
<div class="card-container">
    {#each recentBooks as book}
        <div class="book-card">
            <div class="book-title">{book.title}</div>
            <div class="book-author">Auteur: {book.author}</div>
            <div class="book-pub-date">Date de publication: {book.publicationDate}</div>
            <div class="book-description">Description: {book.description || 'Aucune description.'}</div>
        </div>
    {/each}
</div>

<style>
    
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 400px;
        margin: 20px auto;
        padding: 20px;
        background: #aba7a7;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    input {
        padding: 10px;
        font-size: 16px;
        border: 1px solid rgba(219, 215, 215, 0.905)7a7;
        border-radius: 5px;
        transition: border-color 0.3s ease-in-out;
    }

    input:focus {
        border-color: #ae00ff;
        outline: none;
        box-shadow: 0 0 5px #ae00ff;
    }

    button {
        padding: 10px;
        font-size: 16px;
        color: white;
        background: #ae00ff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background 0.3s ease-in-out;
    }

    button:hover {
        background: #7a26a0;
    }

    p {
        text-align: center;
        font-weight: bold;
        color: green;
        margin-top: 10px;
    }

    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .book-card {
        border: 1px solid #ddd;
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
    .book-pub-date,
    .book-description {
        font-size: 1em;
        color: #555;
        margin-bottom: 4px;
    }

</style>
