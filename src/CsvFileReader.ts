import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  public read() {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    }).split('\n').map(item => item.split(','));
  }
}