import {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example7_pipe,
  example8,
  example9,
  example10,
  example11,
  example12,
  example13,
  example14,
} from '../examples';

describe('pick name examples', () => {
  var people = [
    {
      first_name: 'Josh',
      last_name: 'Thomas',
      age: 35,
      occupation: 'Developer',
    },
    {
      first_name: 'Lindsey',
      last_name: 'Thomas',
      age: 35,
      occupation: 'Project Manager',
    },
    { first_name: 'Ellie', last_name: 'Thomas', age: 2, occupation: 'Baby' },
    { first_name: 'Addie', last_name: 'Thomas', age: 1, occupation: 'Baby' },
  ];
  it('example1', () => {
    const result = example1(people);
    expect(result).toEqual(['Josh', 'Lindsey', 'Ellie', 'Addie']);
  });
  it('example2', () => {
    const result = example2(people);
    expect(result).toEqual(['Josh', 'Lindsey', 'Ellie', 'Addie']);
  });
  it('example3', () => {
    const result = example3(people);
    expect(result).toEqual(['Josh', 'Lindsey', 'Ellie', 'Addie']);
  });
  it('example4', () => {
    const result = example4(people);
    expect(result).toEqual(['Josh', 'Lindsey', 'Ellie', 'Addie']);
  });
  it('example5', () => {
    const result = example5(people);
    expect(result).toEqual(['Josh', 'Lindsey', 'Ellie', 'Addie']);
  });
  it('example6', () => {
    const result = example6(people);
    expect(result).toEqual(['Josh', 'Lindsey', 'Ellie', 'Addie']);
  });
});

describe('pick name and count characters examples', () => {
  var people = [
    {
      first_name: 'Josh',
      last_name: 'Thomas',
      age: 35,
      occupation: 'Developer',
    },
    {
      first_name: 'Lindsey',
      last_name: 'Thomas',
      age: 35,
      occupation: 'Project Manager',
    },
    { first_name: 'Ellie', last_name: 'Thomas', age: 2, occupation: 'Baby' },
    { first_name: 'Addie', last_name: 'Thomas', age: 1, occupation: 'Baby' },
  ];
  it('example7', () => {
    const result = example7(people);
    expect(result).toEqual([4, 7, 5, 5]);
  });
  it('example7_pipe', () => {
    const result = example7_pipe(people);
    expect(result).toEqual([4, 7, 5, 5]);
  });
  it('example8', () => {
    const result = example8(people);
    expect(result).toEqual([4, 7, 5, 5]);
  });
  it('example9', () => {
    const result = example9(people);
    expect(result).toEqual([4, 7, 5, 5]);
  });
  it('example10', () => {
    const result = example10(people);
    expect(result).toEqual([4, 7, 5, 5]);
  });
  it('example11', () => {
    const result = example11(people);
    expect(result).toEqual([4, 7, 5, 5]);
  });
});

describe('get full names of Developers with firstName at least 5 characters long sorted By last_name that are over 50', () => {
  var techPeople = [
    {
      first_name: 'Adele',
      last_name: 'Goldberg',
      age: 71,
      occupation: 'Developer',
    },
    {
      first_name: 'Audrey',
      last_name: 'Tang',
      age: 35,
      occupation: 'Developer',
    },
    {
      first_name: 'Bill',
      last_name: 'Gates',
      age: 61,
      occupation: 'Philanthropist',
    },
    {
      first_name: 'Gerald',
      last_name: 'Sussman',
      age: 70,
      occupation: 'Developer',
    },
    {
      first_name: 'Grace',
      last_name: 'Hopper',
      age: 85,
      occupation: 'Developer',
    },
    {
      first_name: 'Guy',
      last_name: 'Steele',
      age: 62,
      occupation: 'Developer',
    },
    {
      first_name: 'Jade',
      last_name: 'Raymond',
      age: 41,
      occupation: 'Executive',
    },
    { first_name: 'Jeff', last_name: 'Bezos', age: 53, occupation: 'CEO' },
    { first_name: 'Marissa', last_name: 'Mayer', age: 41, occupation: 'CEO' },
    { first_name: 'Mark', last_name: 'Zuckerberg', age: 32, occupation: 'CEO' },
    {
      first_name: 'Martin',
      last_name: 'Odersky',
      age: 58,
      occupation: 'Developer',
    },
    {
      first_name: 'Simon',
      last_name: 'Jones',
      age: 59,
      occupation: 'Developer',
    },
    { first_name: 'Susan', last_name: 'Wojcicki', age: 48, occupation: 'CEO' },
  ];
  it('example12', () => {
    const result = example12(techPeople);
    expect(result).toEqual([
      'Adele Goldberg',
      'Grace Hopper',
      'Simon Jones',
      'Martin Odersky',
      'Gerald Sussman',
    ]);
  });
  it('example13', () => {
    const result = example13(techPeople);
    expect(result).toEqual([
      'Adele Goldberg',
      'Grace Hopper',
      'Simon Jones',
      'Martin Odersky',
      'Gerald Sussman',
    ]);
  });
  it('example14', () => {
    const result = example14(techPeople);
    expect(result).toEqual([
      'Adele Goldberg',
      'Grace Hopper',
      'Simon Jones',
      'Martin Odersky',
      'Gerald Sussman',
    ]);
  });
});
