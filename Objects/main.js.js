console.log("console testing...");
// list Object
let person = [
  {
    name: "Ali Hasan",
    education: "BS",
    rank: "Programmer",
    age: 19,
    field: "Artifica Inteligence",
  },
  {
    name: "Waqas",
    education: "PHD",
    rank: "Lead Scientist",
    age: 28,
    field: [
      "Neural Network",
      "Web Tecnology",
      "Artifical Inteligence",
      "Complex Algorithim Design",
    ],
  },
  {
    name: "Adullah",
    education: "BS SE",
    rank: "Comlex Algoritim Designer",
    age: 25,
    field: ["Data Science", "Deep Learning", "Machine Learning"],
  },
];
//Apply Some Logic Operation On Object
person.forEach((element, index) => {
  // Here i am use nestid if condition  statement | if outer (if) is true the inner if is checked and vice versa
  //Condition 1 for Eligible Crieteria
  if (person[index].education == "PHD") {
    if (person[index].field === "Neural Network") {
    }
    console.log(`Congratulation! ${person[index].name} you are Elect in NASA`);
  }
  //Condition 2 for Eligible Crieteria
  if (person[index].education == "BS") {
    if (person[index].field === "Artifica Inteligence") {
    }
    console.log(
      `Congratulation! ${person[index].name} you are Elect in Google`
    );
  }
  //Condition 3 for Eligible Crieteria
  if (person[index].education == "BS SE") {
    if (person[index].field === "Artifica Inteligence") {
    }
    console.log(
      `Congratulation! ${person[index].name} you are Elect in Microsoft`
    );
  }
});
