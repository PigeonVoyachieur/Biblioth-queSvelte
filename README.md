Bibliothèque Svelte: 

Beaucoup de chose ne sont pas présentent comme les notes des livres, la barre de recherche, les commentaires sur les livres lus, ainsi que l'enregistrement de données dans le local storage.

Facilité, reprise de certaines parties de codes d'autres exercice comme dans FormAddBook.svelte où tous vient quasiments d'un ancien exercice.

Difficulté, dans l'ajout des des parties avancées, car à chaque ajouts tentés, cela ne marcher plus à cause de cette ligne: $: filteredBooks = books.filter(book => showRead ? readBooks.has(book.key) : !readBooks.has(book.key));

J'ai donc essayé plusieurs solutions comme avec un store.js et d'exporter les fonctions mais cela n'a pas régler le problèmes, j'ai essayé de contourner en créeant une autre fonction mais qui n'a pas marché non plus,j'ai essayé aussi de la transformé avec $derived ou même $effect grâce à la doc de Svelte, même avec l'aide de la doc et de plusieurs ia (ChatGPT et Copilot) je n'ai pas réussi à régler le problème. Le problèmes se déclencher à chaque ajout, par exemple un input pour la barre de recherche, ou encore un input pour renseignez un commentaire sur les livres lus et il y avait tous le temps le problèmes.
  
