import { calculatePrice } from './price';

describe('calculatePrice()', () => {
  it('връща базова цена за адрес', () => {
    expect(calculatePrice(2, 'to_address')).toBe(4.00);
  });
  it('връща по-ниска цена за офис', () => {
    expect(calculatePrice(2, 'to_office')).toBeCloseTo(3.20);
  });
});
