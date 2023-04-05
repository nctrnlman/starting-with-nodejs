perjumlahan = (angka1, angka2) => {
  return `Perjumlahan ${angka1} dan ${angka2} adalah ${angka1 + angka2}`;
};
pengurangan = (angka1, angka2) => {
  return `Pengurangan ${angka1} dan ${angka2} adalah ${angka1 - angka2}`;
};

module.exports = {
  perjumlahan,
  pengurangan,
};
