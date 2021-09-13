import {
  curry,
  map,
  filter,
  get,
  pick,
  sortBy,
  flow,
  lt,
  join,
  conforms,
  values,
  isEqual,
} from 'lodash/fp';

/**
 * const people = [
 *   { first_name: 'Josh',    last_name: 'Thomas', age: 35, occupation: 'Developer' },
 *   { first_name: 'Lindsey', last_name: 'Thomas', age: 35, occupation: 'Project Manager' },
 *   { first_name: 'Ellie',   last_name: 'Thomas', age: 2,  occupation: 'Baby'},
 *   { first_name: 'Addie',   last_name: 'Thomas', age: 1,  occupation: 'Baby'}
 * ];
 */
/**
 *
 */
const example1 = (people) => {
  const names = [];

  for (let i = 0; i < people.length; i += 1) {
    names.push(people[i].first_name);
  }
  return names;
};

/**
 *
 */
const example2 = (people) => {
  const names = [];

  people.forEach((person) => {
    names.push(person.first_name);
  });
  return names;
};

/**
 *
 */
const example3 = (people) => {
  const names = people.map((person) => {
    return person.first_name;
  });
  return names;
};

/**
 *
 */
const example4 = (people) => {
  function getAttribute(obj, attributeName) {
    return obj[attributeName];
  }

  return people.map((person) => {
    return getAttribute(person, 'first_name');
  });
};

/**
 *
 */
const example5 = (people) => {
  function getAttribute(attributeName) {
    return (obj) => {
      return obj[attributeName];
    };
  }
  const getName = getAttribute('first_name');

  return people.map(getName);
};

/**
 *
 */
const example6 = (people) => {
  function getAttribute(attributeName) {
    return (obj) => {
      return obj[attributeName];
    };
  }

  return people.map(getAttribute('first_name'));
};

/**
 *
 */
const example7 = (people) => {
  function strLength(str) {
    return str.length;
  }

  function getAttribute(attributeName) {
    return (obj) => {
      return obj[attributeName];
    };
  }

  return people.map(getAttribute('first_name')).map(strLength);
};

const example7_pipe = (people) =>
  people.map((obj) =>
    obj
    |> %['first_name']
    |> %.length
  );

/**
 *
 */
const example8 = (people) => {
  function strlength(str) {
    return str.length;
  }

  const getattribute = curry((attributename, obj) => {
    return obj[attributename];
  });

  return people.map(getattribute('first_name')).map(strlength);
};

/**
 *
 */
const example9 = (people) => {
  function strLength(str) {
    return str.length;
  }

  const getAttribute = curry((attributename, obj) => {
    return obj[attributename];
  });

  return people.map(flow(getAttribute('first_name'), strLength));
};

/**
 *
 */
const example10 = (people) => {
  function strLength(str) {
    return str.length;
  }

  const getAttribute = curry((attributeName, obj) => {
    return obj[attributeName];
  });

  return map(flow(getAttribute('first_name'), strLength), people);
};

/**
 *
 */
const example11 = (people) => {
  function strLength(str) {
    return str.length;
  }

  const mapToNameLength = map(flow(get('first_name'), strLength));

  return mapToNameLength(people);
};


/**
 * const techPeople = [
 *   { first_name: 'Adele',   last_name: 'Goldberg',   age: 71, occupation: 'Developer' },
 *   { first_name: 'Audrey',  last_name: 'Tang',       age: 35, occupation: 'Developer' },
 *   { first_name: 'Bill',    last_name: 'Gates',      age: 61, occupation: 'Philanthropist' },
 *   { first_name: 'Gerald',  last_name: 'Sussman',    age: 70, occupation: 'Developer' },
 *   { first_name: 'Grace',   last_name: 'Hopper',     age: 85, occupation: 'Developer' },
 *   { first_name: 'Guy',     last_name: 'Steele',     age: 62, occupation: 'Developer' },
 *   { first_name: 'Jade',    last_name: 'Raymond',    age: 41, occupation: 'Executive' },
 *   { first_name: 'Jeff',    last_name: 'Bezos',      age: 53, occupation: 'CEO' },
 *   { first_name: 'Marissa', last_name: 'Mayer',      age: 41, occupation: 'CEO' },
 *   { first_name: 'Mark',    last_name: 'Zuckerberg', age: 32, occupation: 'CEO' },
 *   { first_name: 'Martin',  last_name: 'Odersky',    age: 58, occupation: 'Developer' },
 *   { first_name: 'Simon',   last_name: 'Jones',      age: 59, occupation: 'Developer' },
 *   { first_name: 'Susan',   last_name: 'Wojcicki',   age: 48, occupation: 'CEO' }
 * ];
 */

/**
 * - get the full names
 *   of all Developers
 *   over 50 years of age
 *   with a first name at least 5 characters long
 *   and sort the list by last name
 */
const example12 = (people) => {
  function strLength(str) {
    return str.length;
  }

  const foundPeople = [];
  const foundPeopleNames = [];

  for (let i = 0; i < people.length; i += 1) {
    if (
      people[i].occupation === 'Developer' &&
      people[i].age > 50 &&
      strLength(people[i].first_name) >= 5
    ) {
      foundPeople.push(people[i]);
    }
  }

  foundPeople.sort((a, b) => {
    const nameA = a.last_name;
    const nameB = b.last_name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  for (let j = 0; j < foundPeople.length; j += 1) {
    foundPeopleNames[j] =
      foundPeople[j].first_name + ' ' + foundPeople[j].last_name;
  }

  return foundPeopleNames;
};

/**
 * - get the full names
 *   of all Developers
 *   over 50 years of age
 *   with a first name at least 5 characters long
 *   and sort the list by last name
 */
const example13 = (people) => {
  function strLength(str) {
    return str.length;
  }
  function compareBy(attrName) {
    return (a, b) => {
      const nameA = a[attrName];
      const nameB = b[attrName];
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    };
  }

  return people
    .filter((person) => {
      return (
        person.occupation === 'Developer' &&
        person.age > 50 &&
        strLength(person.first_name) >= 5
      );
    })
    .sort(compareBy('last_name'))
    .map((person) => person.first_name + ' ' + person.last_name);
};

/**
 * - get the full names
 *   of all Developers
 *   over 50 years of age
 *   with a first name at least 5 characters long
 *   and sort the list by last name
 */
const example14 = (people) => {
  function strLength(str) {
    return str.length;
  }
  return flow(
    filter(
      conforms({
        occupation: isEqual('Developer'),
        age: lt(50),
        first_name: flow(strLength, lt(4)),
      })
    ),
    sortBy(get('last_name')),
    map(flow(pick(['first_name', 'last_name']), values, join(' ')))
  )(people);
};

export {
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
};
