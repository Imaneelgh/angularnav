declare module 'range-parser' {
    function rangeParser(size: number, str: string): Array<{ start: number, end: number }>;
    export = rangeParser;
  }
  