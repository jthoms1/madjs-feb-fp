var people = [
  { first_name: 'Josh',    last_name: 'Thomas', age: 35, occupation: 'Developer' },
  { first_name: 'Lindsey', last_name: 'Thomas', age: 35, occupation: 'Project Manager' },
  { first_name: 'Ellie',   last_name: 'Thomas', age: 2,  occupation: 'Baby'},
  { first_name: 'Addie',   last_name: 'Thomas', age: 1,  occupation: 'Baby'}
];
var examples = require('../examples');

describe('text examples', () => {
  it('example1', () => {
    const result = examples.example1(people);
    expect(result).toEqual(['Josh', 'Lindsey', 'Ellie', 'Addie']);
  });
  it('example2', () => {
    const result = examples.example2(people);
    expect(result).toEqual(['Josh', 'Lindsey', 'Ellie', 'Addie']);
  });
  it('example3', () => {
    const result = examples.example3(people);
    expect(result).toEqual(['Josh', 'Lindsey', 'Ellie', 'Addie']);
  });
  it('example4', () => {
    const result = examples.example4(people);
    expect(result).toEqual(['Josh', 'Lindsey', 'Ellie', 'Addie']);
  });
  it('example5', () => {
    const result = examples.example5(people);
    expect(result).toEqual(['Josh', 'Lindsey', 'Ellie', 'Addie']);
  });
  it('example6', () => {
    const result = examples.example6(people);
    expect(result).toEqual(['Josh', 'Lindsey', 'Ellie', 'Addie']);
  });
  it('example7', () => {
    const result = examples.example7(people);
    expect(result).toEqual([4, 7, 5, 5]);
  });
  it('example8', () => {
    const result = examples.example8(people);
    expect(result).toEqual([4, 7, 5, 5]);
  });
  it('example9', () => {
    const result = examples.example9(people);
    expect(result).toEqual([4, 7, 5, 5]);
  });
  it('example10', () => {
    const result = examples.example10(people);
    expect(result).toEqual([4, 7, 5, 5]);
  });
  it('example11', () => {
    const result = examples.example11(people);
    expect(result).toEqual([4, 7, 5, 5]);
  });
});
