<script lang="ts">
    import List from "../components/List.svelte";
    import FormAddBook from "../components/FormAddBook.svelte";
</script>

<div class="hero">
    <h1>Bienvenue dans votre bibliothèque</h1>
    <p>Découvrez, ajoutez et gérez vos livres facilement.</p>
</div>

<FormAddBook />
<br><br>
<List />

<style>
    .hero {
        background: #aba7a7;
        padding: 50px;
        text-align: center;
        border-bottom: 2px solid #ddd;
    }

    .hero h1 {
        font-size: 3em;
        color: #333;
        margin-bottom: 10px;
    }

    .hero p {
        font-size: 1.2em;
        color: #555;
    }
</style>

