export default test = {
  //hot
  Ulaanbaatar: {
    name: "Ulaanbaatar",
    img: "ulaanbaatar.jpg",
    adjacent: [
      "Baganuur",
      "Baganhangai",
      "Bayngol",
      "Baynzurkh",
      "Nalaih",
      "Songinohairhan",
      "Sukhbaatar",
      "Khan-Uul",
      "Chingeltei",
      "Apartment",
    ],
  },
  //duureg
  Baynzurkh: {
    name: "Baynzurkh",
    img: "baynzurkh.jpg",
    adjacent: ["Ulaanbaatar", "Jukov", "13"],
  },
  //olon niited tanigdsan bairshil
  Jukov: {
    name: "Jukov",
    img: "jukov.jpg",
    adjacent: ["Baynzurkh", "13", "RomeoJuliet"],
  },
  //Tuhain bairshiliin hothon
  RomeoJuliet: {
    name: "RomeoJuliet",
    img: "romeojuliet.jpg",
    adjacent: ["Jukov", "Gadaa", "Dotor"],
  },
};
