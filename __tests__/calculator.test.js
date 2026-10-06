import { divide } from "../src/calculator";

describe('divide-funktio', () => {
  // 1. positiivinen testi, normaali jakolasku
  test('jakaa luvun 10 luvulla 2 ja palauttaa 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 2. syöte ei ole numero (merkkijono)
  test('syöte on merkkijono', () => {
    expect(() => { divide("10", 2); }).toThrow(TypeError);
    expect(() => { divide("10", 2); }).toThrow("Both arguments must be numbers");
  });

  // 3. syöte puuttuu 
  test('toinen syöte puuttuu', () => {
    expect(() => { divide(10, undefined); }).toThrow(TypeError);
    expect(() => { divide(10, undefined); }).toThrow("Both arguments must be numbers");
  });

  // 4. syöte on NaN
  test('syöte on NaN', () => {
    expect(() => { divide(NaN, 2); }).toThrow(TypeError);
    expect(() => { divide(NaN, 2); }).toThrow("Arguments cannot be NaN");
  });

  // 5. nollalla jakaminen
  test('jaetaan nollalla', () => {
    expect(() => { divide(10, 0); }).toThrow(RangeError);
    expect(() => { divide(10, 0); }).toThrow("Division by zero is not allowed");
  });
});