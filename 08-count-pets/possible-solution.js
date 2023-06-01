function countCats(pets) {
  const byCategory = (category) => (pet) =>
    pet.category === category;
  return pets.filter(byCategory("CAT")).length;
}
