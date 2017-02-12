(function (root, factory) {
  if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('lodash/fp'));
  } else {
    // Browser globals
    root.e = {};
    factory(root.e, root._);
  }
}(this, function (exports, lodashfp) {
  var curry = lodashfp.curry;
  var compose = lodashfp.compose;
  var map = lodashfp.map;
  var reduce = lodashfp.reduce;
  var filter = lodashfp.filter;
  var get = lodashfp.get;
  var propEq = lodashfp.propEq;

  /**
   * 
   */
  exports.example1 = function(people) {
    var names = [];

    for (var i = 0; i < people.length; i += 1) {
      names.push(people[i].first_name);
    }
    return names;
  }

  /**
   * 
   */
  exports.example2 = function(people) {
    var names = [];

    people.forEach(function(person) {
      names.push(person.first_name);
    });
    return names;
  }

  /**
   * 
   */
  exports.example3 = function(people) {
    var names = people.map(function(person) {
      return person.first_name;
    });
    return names;
  }

  /**
   * 
   */
  exports.example4 = function(people) {
    function getAttribute(obj, attributeName) {
      return obj[attributeName];
    }

    return people.map(function(person) {
      return getAttribute(person, 'first_name');
    });
  }

  /**
   * 
   */
  exports.example5 = function(people) {
    function getAttribute(attributeName) {
      return function(obj) {
        return obj[attributeName];
      }
    }
    var getName = getAttribute('first_name');

    return people.map(getName);
  }

  /**
   * 
   */
  exports.example6 = function(people) {
    function getAttribute(attributeName) {
      return function(obj) {
        return obj[attributeName];
      }
    }

    return people.map(getAttribute('first_name'));
  }

  /**
   * 
   */
  exports.example7 = function(people) {
    function strLength(str) {
      return str.length;
    }

    function getAttribute(attributeName) {
      return function(obj) {
        return obj[attributeName];
      }
    }

    return people
      .map(getAttribute('first_name'))
      .map(strLength);
  }

  /**
   * 
   */
  exports.example8 = function(people) {
    function strlength(str) {
      return str.length;
    }

    var getattribute = curry(function(attributename, obj) {
      return obj[attributename];
    });

    return people
      .map(getattribute('first_name'))
      .map(strlength); 
  }

  /**
   * 
   */
  exports.example9 = function(people) {
    function strLength(str) {
      return str.length;
    }

    var getAttribute = curry(function(attributename, obj) {
      return obj[attributename];
    });

    return people
      .map(compose(strLength, getAttribute('first_name')));
  }

  /**
   * 
   */
  exports.example10 = function(people) {
    function strLength(str) {
      return str.length;
    }

    var getAttribute = curry(function(attributeName, obj) {
      return obj[attributeName];
    });

    return map(
      compose(
        strLength,
        getAttribute('first_name')
      ),
      people);
  }

  /**
   * 
   */
  exports.example11 = function(people) {
    function strLength(str) {
      return str.length;
    }

    var mapToNameLength = map(
      compose(
        strLength,
        get('first_name')
      ));

    return mapToNameLength(people);
  }

  /**
   * get all people full names over 2 that are Developers with firstName at least 3 characters long sorted By LastName
   */
  exports.example12 = function(people) {
    function strLength(str) {
      return str.length;
    }

    var foundPeople = [];

    for (var i = 0; i < people.length; i += 1) {
      if ((people[i].occupation === 'Developer') &&
        (people[i].age > 50) &&
        (strLength(people[i].first_name >= 5)))
      {
        foundPeople.push(people[i])
      }
    }

    foundPeople.sort(function(a, b) {
      var nameA = a.last_name;
      var nameB = b.last_name;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    for (var j = 0; j < foundPeople.length; i += 1) {
      foundPeople[i] = foundPeople[i].first_name + ' ' + foundPeople[i].last_name;
    }

    return foundPeople;
  }

  exports.example13 = function(people) {
    function strLength(str) {
      return str.length;
    }
    function compareBy(attrName) {
      return function(a, b) {
        var nameA = a[attrName];
        var nameB = b[attrName];
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
      .filter(function(person) {
        return (person.occupation === 'Developer' &&
          person.age > 50 &&
          strLength(person.first_name) >= 5)
      })
      .sort(compareBy('last_name'))
      .map(person => person.full_name + ' ' + person.last_name);
  }

  exports.example14 = function(people) {
    return compose(
      filter(
        compose(
          propEq('occupation', 'Developer'),
          propEq('age', 50),
        )
      ),
      sortBy(pick('last_name')),
      map(pick('full_name', 'last_name').join(' ')),
    )
  }
}));