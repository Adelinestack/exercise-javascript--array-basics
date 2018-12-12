// Créez un tableau de chaussures nommé shoesList
// Initialisez cette liste de chaussures avec 5 noms de marques qui vous plaisent.
const shoesList = ['Vans', 'Minelli', 'Jonak', 'Nike', 'Adidas'];
// Ajoutez une marque au début de la liste
const newShoesList = shoesList.unshift('Doc Martens');
// Affichez la liste et sa taille
console.log(shoesList + ' ' + shoesList.length);
// Supprimez la
const removedShoesList = shoesList.shift();
// Affichez la liste et sa taille
console.log(shoesList + ' ' + shoesList.length);
// Ajoutez une autre marque en fin de liste
const endShoesList = shoesList.push('Doc Martens');
// Affichez la liste et sa taille
console.log(shoesList + ' ' + shoesList.length);
// Supprimez la
const endRemovedShoesList = shoesList.pop();
// Affichez la liste et sa taille
console.log(shoesList + ' ' + shoesList.length);
// Coupez la liste au 3 élément
const cutShoesList = shoesList.slice(3);
// Affichez la liste et sa taille
console.log(cutShoesList + ' ' + cutShoesList.length);
// Créez un autre tableau de 5 marques de chaussures
const anotherShoesList = ['Timberland', 'Puma', 'André', 'Reebok', 'Zara'];
// Concaténez le dernier tableau de 3 marques avec ce dernier
const concatShoesList = anotherShoesList.concat(cutShoesList);
// Affichez le tableau final et sa taille
console.log(concatShoesList + ' ' + concatShoesList.length);
