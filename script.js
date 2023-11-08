let continuer = true;

do {
  let operand = prompt("Choisissez l'opérateur à utiliser (+, -, *, /), ou tapez q pour quitter :");

  if (operand === "q") {
    continuer = false;
    alert("Merci d'avoir utilisé la calculatrice !");
    break;
  } else if (operand !== "+" && operand !== "-" && operand !== "*" && operand !== "/") {
    alert("Entrez un opérateur valide.");
    continue;
  } else {
    let num1 = parseFloat(prompt("Entrez un premier nombre :"));
    let num2 = parseFloat(prompt("Entrez un second nombre :"));
    switch (operand) {
      case "+":
        let result1 = num1 + num2;
        alert(`Le résultat de ${num1} + ${num2} est égal à ${result1}.`);
        break;

      case "-":
        let result2 = num1 - num2;
        alert(`Le résultat de ${num1} - ${num2} est égal à ${result2}.`);
        break;

      case "/":
        let result3 = num1 / num2;
        num1 === 0 || num2 === 0 ? alert("Vous ne pouvez pas diviser par 0 !") : alert(`Le résultat de ${num1} / ${num2} est égal à ${result3}.`);
        break;

      case "*":
        let result4 = num1 * num2;
        alert(`Le résultat de ${num1} * ${num2} est égal à ${result4}.`);
        break;

      default:
        alert("Opération non valide.");
        break;
    }

    do {
      let choix = prompt("Voulez-vous faire un autre calcul ? o/n");
      if (choix === "o") {
        break;
      } else if (choix === "n") {
        continuer = false;
        alert("Merci d'avoir utilisé la calculatrice !");
        break;
      } else {
        alert("tapez o ou n");
      }
    } while (continuer);
  }
} while (continuer);
