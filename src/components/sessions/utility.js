export const colors = (number) => {
  switch (number) {
    case 3:
      return ["#fa6764", "#e1e83b", "#00c9a7"];
    case 4:
      return ["#fa6764", "#f1a54f", "#e1e83b", "#00c9a7"];
    case 5:
      return ["#fa6764", "#f1a54f", "#e1e83b", "#44db20", "#00c9a7"];
    case 6:
      return ["#fa6764", "#f1a54f", "#edc945", "#e1e83b", "#44db20", "#00c9a7"];
    case 7:
      return [
        "#fa6764",
        "#f1a54f",
        "#edc945",
        "#e1e83b",
        "#afe432",
        "#44db20",
        "#00c9a7",
      ];
    case 8:
      return [
        "#fa6764",
        "#f68459",
        "#f1a54f",
        "#edc945",
        "#e1e83b",
        "#afe432",
        "#44db20",
        "#00c9a7",
      ];
    case 9:
      return [
        "#fa6764",
        "#f68459",
        "#f1a54f",
        "#edc945",
        "#e1e83b",
        "#afe432",
        "#44db20",
        "#17d724",
        "#00c9a7",
      ];
    default:
      return ["#fa6764", "#00c9a7"];
  }
};

export const utility = {
  colors,
};
