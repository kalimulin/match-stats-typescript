import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read() {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((item: string): string[] => item.split(','))
    .map(this.mapRow);
  }
}