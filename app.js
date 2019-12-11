// Please write a web service that takes in two strings and returns a string indicating
// if the first string is before, after, or equal to the second string.
// Where "before", "after" and "equal" are based interpretation as software version numbers.

// Examples:
//  - 1.0.0 is "before" 1.0.1
//  - 2.0 is "after" 1.0.0

function compareSoftwareVersions(vers1, vers2) {
  // step 1: break out version strings to arrays
  let split_1 = vers1.split('.');
  let split_2 = vers2.split('.');

  // step 2: convert each indexed string value to an integer
  let version_1 = split_1.map(function(val) {
    return parseInt(val);
  })
  let version_2 = split_2.map(function(val) {
    return parseInt(val);
  })

  // step 3: if array lengths are unequal, append zeros in place of a missing index,
  // so that both arrays have the same length
  let length_ref = 0

  if (version_1.length > version_2.length) {
    length_ref = version_1.length
    let difference = length_ref - version_2.length

    for (let i = 0; i < difference; i++) {
      version_2.push(0);
    }
  } else if (version_2.length > version_1.length) {
    length_ref = version_2.length
    let difference = length_ref - version_1.length

    for (let j = 0; j < difference; j++) {
      version_1.push(0);
    }
  } else if (version_1.length === version_2.length) {
    length_ref = version_1.length;
  }

  // step 4: compare arrays (see helper function below),
  // if unequal, iterate through both concurrently,
  // comparing each indexed integer value until two values are unequal, and return result
  if (arraysAreIdentical(version_1, version_2)) {
    return 'equal';
  } else {
    for (let k = 0; k < length_ref; k++) {
      if (version_1[k] > version_2[k]) {
        return 'after';
      } else if (version_2[k] > version_1[k]) {
        return 'before';
      }
    }
  }

};

// side-step: this helper function confirms if two arrays are identical
function arraysAreIdentical(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// ************* some test case scenarios **************** //

// compareSoftwareVersions('1.9.9.9.0.0.0.0', '1.9.9.9')
//  returns => 'equal'

// compareSoftwareVersions('1.0.0', '1.0.01')
//  returns => 'before'

// compareSoftwareVersions('2.0.0', '1.9.003')
//  returns => 'after'
