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

  /**
   * 
   */
  exports.example1 = function(people) {
    var names = [];

    for (var i = 0; i < people.length; i += 1) {
      names.push(people[i].name);
    }
    return names;
  }

  /**
   * 
   */
  exports.example2 = function(people) {
    var names = [];

    people.forEach(function(person) {
      names.push(person.name);
    });
    return names;
  }

  /**
   * 
   */
  exports.example3 = function(people) {
    var names = people.map(function(person) {
      return person.name;
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
      return getAttribute(person, 'name');
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
    var getName = getAttribute('name');

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

    return people.map(getAttribute('name'));
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
      .map(getAttribute('name'))
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
      .map(getattribute('name'))
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

    var getNameLength = compose(strLength, getAttribute('name'));

    return people
      .map(getNameLength);
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

    getNameLength = compose(strLength, getAttribute('name'));

    return map(getNameLength, people);
  }
}));