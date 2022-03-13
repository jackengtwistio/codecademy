//shift
console.log(" ".charCodeAt());
class ShiftCipher {
  constructor(num) {
    this.num = num;
  }
  shiftNum(char, num) {
    let uniCode = char.charCodeAt();

    if (65 <= uniCode && uniCode <= 90) {
      if (97 <= uniCode + 32 + num && uniCode + 32 + num <= 122) {
        return uniCode + 32 + num;
      } else if (uniCode + 32 + num > 122) {
        return uniCode + 32 + num - 122 + 96;
      } else if (uniCode + 32 + num < 97) {
        return 122 - (96 - (uniCode + 32 + num));
      }
    }
    if (97 <= uniCode && uniCode <= 122) {
      if (65 <= uniCode - 32 + num && uniCode - 32 + num <= 90) {
        return uniCode - 32 + num;
      } else if (uniCode - 32 + num > 90) {
        console.log(char, uniCode - 32 + num - 90 + 64);
        return uniCode - 32 + num - 90 + 64;
      } else if (uniCode - 32 + num < 65) {
        return 90 - (64 - (uniCode - 32 + num));
      }
    }
    return uniCode;
  }

  encrypt(str) {
    let result = str
      .split("")
      .map((e) => String.fromCharCode(this.shiftNum(e, this.num)));
    console.log(result.join(""));
    return result.join();
  }
  decrypt(str) {
    let result = str
      .split("")
      .map((e) => String.fromCharCode(this.shiftNum(e, -this.num)));
    console.log(result.join(""));
    return result.join("");
  }
}
const cipher = new ShiftCipher(3);
cipher.encrypt("abcdefg");
cipher.encrypt("I love to codez!"); // returns 'K NQXG VQ EQFG!'
cipher.decrypt("K <3 OA RWRRA");
