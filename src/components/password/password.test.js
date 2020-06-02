import generatePassword from './password';

it('Can select the length of generated password', () => {
  expect(generatePassword(5).length).toBe(5);
  expect(generatePassword(8).length).toBe(8);
});

it('Can generate different password on each time', () => {
  const pass1 = generatePassword(5);
  const pass2 = generatePassword(5);
  expect(pass1).not.toBe(pass2);
});


describe('Check cases: ', () => {
  const checkIfHaveLower = pass => /[a-z]/.test(pass);
  const checkIfHaveUpper = pass => /[A-Z]/.test(pass);
  const checkIfHaveNumber = pass => /[0-9]/.test(pass);
  const checkIfHaveSymbol = pass => /[\W]/.test(pass);

  it('Can select one or multiple of: Include uppercase letters, Include lowercase letters, Include numbers, Include symbols', () => {
    const passLower = generatePassword(5, { lower: true });
    const passUpper = generatePassword(5, { upper: true });
    const passNumber = generatePassword(5, { number: true });
    const passSymbol = generatePassword(5, { symbol: true });

    expect(checkIfHaveLower(passLower)).toBe(true);
    expect(checkIfHaveUpper(passUpper)).toBe(true);
    expect(checkIfHaveNumber(passNumber)).toBe(true);
    expect(checkIfHaveSymbol(passSymbol)).toBe(true);
  });


  it('Can select multiple of cases', () => {
    const pass1 = generatePassword(5, { lower: true, upper: true});
    const pass2 = generatePassword(5, { number: true, symbol: true});
    expect(checkIfHaveLower(pass1) && checkIfHaveUpper(pass1)).toBe(true);
    expect(checkIfHaveNumber(pass2) && checkIfHaveSymbol(pass2)).toBe(true);

  });
})

