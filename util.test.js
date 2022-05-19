const { generateText } = require('./util');

test('should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
    const text2 = generateText('Anna', 28);
    expect(text2).toBe('Anna (28 years old)');
});

test('should output data-less text', () => {
    const text = generateText('', '');
    expect(text).toBe(' ( years old)');
    const text2 = generateText();
    expect(text2).toBe('undefined (undefined years old)');
});