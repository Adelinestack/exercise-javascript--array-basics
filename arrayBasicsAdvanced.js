const shoesList = ['Vans', 'Minelli', 'Jonak', 'Nike', 'Adidas'];

// Utilisez la méthode interne filter pour filtrer votre tableau
const result = shoesList.filter(function(word) {
  return word.length > 4;
});
console.log(result);

// Utilisez la méthode interne find pour chercher un élément du tableau
const result2 = shoesList.find(function(word) {
  return word.length > 4;
});
console.log(result2);
// Expliquez la différence
// filter : retourne un tableau d'éléments trouvés
// find : retourne le 1er élément trouvé
