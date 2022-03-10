// Returns a random DNA base
const dnaBases = ["A", "T", "C", "G"];
const returnRandBase = () => {
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, strandDNA) {
  return {
    _num: num,
    _strandDNA: strandDNA,
    get num() {
      return this._num;
    },
    get strandDNA() {
      return this._strandDNA;
    },
    mutate() {
      let randNum = Math.floor(Math.random() * 15);
      DNABeingChanged = this._strandDNA[randNum];
      differentDNAs = dnaBases.filter((d) => d !== DNABeingChanged);
      this._strandDNA[randNum] = differentDNAs[Math.floor(Math.random() * 3)];
    },
    compareDNA(another) {
      let sameDNAsCount = 0;
      for (let i = 0; i < 15; i++) {
        if (another._strandDNA[i] === this._strandDNA) {
          sameDNAsCount++;
        }
      }
      return `specimen ${this._num} and specimen ${this._num} have ${
        (sameDNAsCount / 15) * 100
      }% DNA in common`;
    },
    willLikelySurvive() {
      let CGcount = 0;
      for (let d of this._strandDNA) {
        if (d === "C" || d === "G") {
          CGcount++;
        }
      }
      // console.log("CGcount: ", CGcount);
      return CGcount >= 15 * 0.6;
    },
  };
}
pAequors = [];
while (pAequors.length < 30) {
  // console.log(pAequors);
  let newQAequor = pAequorFactory(pAequors.length, mockUpStrand());
  if (newQAequor.willLikelySurvive()) {
    pAequors.push(newQAequor);
    // console.log(pAequors);
  }
}
console.log(pAequors);
