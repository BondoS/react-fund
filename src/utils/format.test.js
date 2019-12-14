import germanFormat from './format';

describe('German currency format', () => {
  it('Hundreds with decimals', () => {
    expect(germanFormat('651.3754')).toEqual('651,38 €');
  });
  it('Thousands with decimals', () => {
    expect(germanFormat('9923.22')).toEqual('9.923,22 €');
  });
  it('Thousands without decimals', () => {
    expect(germanFormat('10000')).toEqual('10.000,00 €');
  });
  it('Millions with decimals', () => {
    expect(germanFormat('1000000')).toEqual('1.000.000,00 €');
  });
  it('Millions without decimals', () => {
    expect(germanFormat('1000000.92')).toEqual('1.000.000,92 €');
  });
});
