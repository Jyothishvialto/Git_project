import promptSync from 'prompt-sync';

const prompt = promptSync(); 

class SimplePrinter {
  s: string;

  constructor(s: string) {
    this.s = s;
  }

  countUniqueTurns() {
    const seen = new Set();
    for (let i = 0; i < this.s.length; i++) {
      if (!seen.has(this.s[i])) {
        seen.add(this.s[i]);
      }
    }
    return seen.size;
  }
}

const input = prompt('Enter a string: ');
const printer = new SimplePrinter(input);
const result = printer.countUniqueTurns();
console.log('Output:', result);