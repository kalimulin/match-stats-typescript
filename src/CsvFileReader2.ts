import fs from 'fs';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './util';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  public read() {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((item: string): string[] => item.split(','))
    .map(this.mapRow);
  }

  mapRow(row: string[]): MatchData {
    
  }
}