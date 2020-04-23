function animalSort(arr) {
  const sortedByLegs = arr.sort(function (a, b) {
    if (a.numberOfLegs !== b.numberOfLegs) {
      return a.numberOfLegs - b.numberOfLegs;
    } else if (a.numberOfLegs === b.numberOfLegs) {
      let aName = a.name.toLowerCase();
      let bName = b.name.toLowerCase();
      return aName < bName ? -1 : aName > bName ? 1 : 0;
    }
  });

  return sortedByLegs;
}

export { animalSort };
