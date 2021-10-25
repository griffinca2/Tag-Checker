const checkTags = require('../tags.js');

 test('All tags are correct.', () => {
  expect(checkTags('<A></A>')).toBe("Correctly tagged paragraph.");
});

test('All tags are correct For multiple tags.', () => {
    expect(checkTags('<A><B></B></A>'))
    .toBe("Correctly tagged paragraph.Correctly tagged paragraph.");
});

test('Tags are incorrectly nested.', () => {
    expect(checkTags('<A><B><C></A></B></C>'))
    .toBe("Expected C Found A.Correctly tagged paragraph.Expected A Found C.");
});

test('Extra closing tag.', () => {
    expect(checkTags('<B>This should be in boldface, but there is an extra closing tag</B></C'))
    .toBe("Correctly tagged paragraph.Expected # Found C.");
});

test('Missing closing tag.', () => {
    expect(checkTags('<B><C>This should be centred and in boldface, but there is a missing closing tag</C>'))
    .toBe("Correctly tagged paragraph.Expected B Found #.");
});

test('Invalid tags, extra tags, special characters.', () => {
    expect(checkTags('<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence'))
    .toBe("Correctly tagged paragraph.Expected * Found B.Expected d Found #.Expected \\6 Found #.Expected \\g Found #.Expected B Found #.");
});

test('Extra tag symbols.', () => {
    expect(checkTags('<<<<<A><B><</B>>>>></A>'))
    .toBe("Correctly tagged paragraph.Correctly tagged paragraph.");
});

test('Special characters.', () => {
    expect(checkTags('<#><@></@></#>'))
    .toBe("Correctly tagged paragraph.Correctly tagged paragraph.");
});

test('Tag values > 1.', () => {
    expect(checkTags('<ABCD><EFGH></EFGH></ABCD>'))
    .toBe("Correctly tagged paragraph.Correctly tagged paragraph.");
});