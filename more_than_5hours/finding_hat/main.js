const prompt = require("prompt-sync")({ sigint: true });
const hat = "^";
const hole = "o";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(length) {
    this._length = length;
    this._field = Field.fieldGenerator(length);
    this._rowIndex = new Number(0);
    this._colIndex = new Number(0);
  }
  static fieldGenerator(length) {
    let field = [];
    for (let i = 0; i < length; i++) {
      field.push([]);
      for (let j = 0; j < length; j++) {
        field[i].push(hole);
      }
    }
    let rowIndex = 0;
    let colIndex = 0;
    while (field[length - 1][length - 1] !== fieldCharacter) {
      const randNum = Math.random() * 100;
      switch (true) {
        //decide move direction
        case randNum < 20:
          if (rowIndex > 0) {
            rowIndex--;
          }
          break;
        case randNum < 40:
          if (colIndex > 0) {
            colIndex--;
          }
          break;
        case randNum < 70:
          if (rowIndex < length - 1) {
            rowIndex++;
          }
          break;
        default:
          if (colIndex < length - 1) {
            colIndex++;
          }
      }
      field[rowIndex][colIndex] = fieldCharacter;
    }
    field[0][0] = pathCharacter;
    field[length - 1][length - 1] = hat;
    return field;
  }
  indexUpdate(dire) {
    this._field[this._rowIndex][this._colIndex] = fieldCharacter;
    switch (dire) {
      case "e":
        if (
          this._rowIndex - 1 < 0 ||
          this._field[this._rowIndex - 1][this._colIndex] === hole
        ) {
          this._over = true;
          console.log("out of board, game over");
          process.exit(1);
        }
        this._rowIndex--;
        break;
      case "d":
        if (
          this._rowIndex + 1 < 0 ||
          this._field[this._rowIndex + 1][this._colIndex] === hole
        ) {
          this._over = true;
          console.log("out of board, game over");
          process.exit(1);
        }
        this._rowIndex++;
        break;
      case "s":
        if (
          this._colIndex - 1 < 0 ||
          this._field[this._rowIndex][this._colIndex - 1] === hole
        ) {
          this._over = true;
          console.log("out of board, game over");
          process.exit(1);
        }
        this._colIndex--;
        break;
      case "f":
        if (
          this._colIndex + 1 < 0 ||
          this._field[this._rowIndex][this._colIndex + 1] === hole
        ) {
          this._over = true;
          console.log("out of board, game over");
          process.exit(1);
        }
        this._colIndex++;
    }
    this._field[this._rowIndex][this._colIndex] = pathCharacter;
  }
  move() {
    let field = this._field.map((e) => e.join(" "));
    field = field.join("\n");
    console.log(field);
    let direction = prompt("d:down, e:up, s:left, f:right");
    this.indexUpdate(direction);
  }
  main() {
    while (!this._over) {
      this.move();

      if (
        this._rowIndex === this._length - 1 &&
        this._colIndex === this._length - 1
      ) {
        this._over = true;
        console.log("you won!");
        process.exit(0);
      }
    }
  }
}

const test = new Field(11);
console.log(test._field);

test.main();
