const num = 4;

const starFormatOne = () => {
  star = "";
  for (i = 1; i <= num; i++) {
    for (j = 1; j <= i; j++) {
      star += "*";
    }
    star += "\n";
  }
  return star;
};
console.log("============ This is star format 1 ============ ");
console.log(starFormatOne());

const starFormatTwo = () => {
  for (i = 1; i <= num; i++) {
    for (j = 1; j <= num + 1 - i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};
console.log("============ This is star format 2 ============ ");
starFormatTwo();

const starFormatThree = () => {
  for (i = 1; i <= num; i++) {
    for (j = 1; j <= i; j++) {
      process.stdout.write("*");
      if (i === 5) {
      }
    }
    process.stdout.write("\n");
  }

  for (i = 1; i <= 3; i++) {
    for (j = 1; j <= 4 - i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};
console.log("============ This is star format 3 ============ ");
starFormatThree();

const starFormatFour = () => {
  for (i = 1; i <= num; i++) {
    for (j = 1; j <= 5 - i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
  for (i = 1; i <= 3; i++) {
    for (j = 1; j <= 1 + i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};
console.log("============ This is star format 4 ============ ");
starFormatFour();

const starFormatFive = () => {
  star = "";
  for (i = 1; i <= 3; i++) {
    for (k = 1; k <= 3 - i; k++) {
      star += " ";
    }
    for (j = 1; j <= 2 * i - 1; j++) {
      star += "*";
    }
    star += "\n";
  }
  for (i = 1; i <= 2; i++) {
    for (j = 1; j <= i; j++) {
      star += " ";
    }
    for (k = 1; k <= 4 / i - 1; k++) {
      star += "*";
    }
    star += "\n";
  }
  return star;
};
console.log("============ This is star format 5 ============ ");
console.log(starFormatFive());
