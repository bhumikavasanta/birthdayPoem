import _ from 'lodash';
/**
 * Function to covert bytes to KB or MB based on file size.
 * For example:
 * Input: 5000000 results in Output: "5 MB".
 */

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};

// Function to get maximum number in an array.
export const getMaxNumber = (arrayInput) => {
  if (!arrayInput || arrayInput.length === 0) {
    return 0;
  }

  let max = parseInt(arrayInput[0], 10);

  // eslint-disable-next-line no-restricted-syntax
  for (const val of arrayInput) {
    if (parseInt(val, 10) > max) {
      max = parseInt(val, 10);
    }
  }

  return max;
};

// Function to get datatype of an element.
const getType = (element) => Object.prototype.toString.call(element);

/**
 * Function to check if incoming element is empty or not.
 * For example:
 * undefined, null, [], {}, "", "  " and considered empty.
 */
export const isEmpty = (element) => {
  if (
    // undefined
    typeof element === 'undefined'
    // Empty string
    || (typeof element === 'string' && !element.trim().length)
    // null
    || getType(element) === '[object Null]'
    // Empty object
    || (getType(element) === '[object Object]' && !Object.keys(element).length)
    // Empty array
    || (getType(element) === '[object Array]' && !element.length)
  ) {
    return true;
  }

  return false;
};

// Function to trim non empty strings
export const trim = (element) => {
  if (isEmpty(element) || typeof element !== 'string') {
    return '';
  }
  return element.trim();
};

export const isNotEmpty = (element) => !isEmpty(element);

export const addCharacterSuffix = (value, character) => `${value}${character}`;

// Function return total number of elements in an object.
export const size = (obj) => (isNotEmpty(obj) ? Object.keys(obj).length : 0);

// Function to format date to local string format
export const dateFormatting = (dateString) => {
  const date = new Date(dateString);
  // to convert UTC time to client timezone time
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  const timeStr = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  // The getMonth() method returns the month (from 0 to 11) for the specified date.
  // To show the current month on UI, addition of 1 is done
  return `${timeStr} ${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;
};
// Function to show only 30 chars of a string
export const stringFormatting = (element, length) => {
  const len = length || 30;
  if (isEmpty(element)) return 'NA';

  return element.length > len ? `${element.slice(0, len - 3)}...` : element;
};

export const getSheetName = (name, index = 0) => {
  if (isEmpty(name)) return `Sheet ${index}`;

  return name.trim().replace(/\s+/g, ' ').slice(0, 30);
};

// Function to count active filters to show in badges
// It accepts dictionary Object and returns number of active filters
export const getBadgeCount = (filters) => {
  let count = 0;
  Object.keys(filters).forEach((val) => {
    if (filters[val]) count += 1;
  });
  return count;
};

export const splitFileNameAndExt = (fullFileName) => {
  const op = {
    ext: '',
    fileName: '',
  };

  const splitRes = fullFileName.split('.');

  if (isEmpty(splitRes) || splitRes.length < 2) {
    return op;
  }

  return {
    ext: splitRes.pop(),
    fileName: splitRes.join('.'),
  };
};

export const hasSpecialCharacter = (fileName) => fileName.match(/[\\\/:*?"<>|.]/);

export const fileNameDateFormat = () => {
  const date = new Date();
  const dateStr = `${`0${date.getMonth() + 1}`.slice(
    -2,
  )}-${`0${date.getDate()}`.slice(
    -2,
  )}-${date.getFullYear()}_${`0${date.getHours()}`.slice(
    -2,
  )}.${`0${date.getMinutes()}`.slice(-2)}.${`0${date.getSeconds()}`.slice(-2)}`;
  return dateStr;
};

export const getPermissionArray = () => (localStorage.getItem('permissions')
  ? Array.from(localStorage.getItem('permissions').split(','))
  : []);

export const cleanNumber = (value) => {
  const temp = value.toString();
  if (temp) {
    const cleanedValue = temp.replaceAll(/[-,]/g, '');
    return cleanedValue;
  }
  return temp;
};
export const formatZipCode = (zipCode) => {
  if (zipCode.length < 6) {
    return zipCode.replace(/[\s.]/g, '');
  }
  if (zipCode.length > 5) {
    let temp = zipCode.replace('-', '');
    temp = `${temp.substring(0, 5)}-${temp.substring(5, temp.length)}`;
    return temp.replace(/[\s.]/g, '');
  }
  return zipCode;
};

export const formatPhoneNo = (value) => {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNo = value.replace(/[^\d]/g, '');

  // phoneNoLength is used to know when to apply our formatting for the phoneNo
  const phoneNoLength = phoneNo.length;

  // we need to return the value with no formatting if its less than four digits
  if (phoneNoLength < 4) return phoneNo;

  // if phoneNoLength is greater than 4 and less the 6 we start to return
  // the formatted number
  if (phoneNoLength < 7) {
    return `${phoneNo.slice(0, 3)}-${phoneNo.slice(3)}`;
  }

  // finally, if the phoneNoLength is greater then 6, we add the last
  // bit of formatting and return it.
  return `${phoneNo.slice(0, 3)}-${phoneNo.slice(3, 6)}-${phoneNo.slice(6, 10)}`;
};

export const formatSSN = (value) => {
  if (!value) return value;
  const ssn = value.replace(/[^\d]/g, '');
  const ssnLength = ssn.length;
  if (ssnLength < 4) return ssn;
  if (ssnLength < 6) {
    return `${ssn.slice(0, 3)}-${ssn.slice(3)}`;
  }
  return `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5, 10)}`;
};
export const validateZip = (value) => {
  if (value.length !== 5 && value.length !== 10) {
    return true;
  }
  return false;
};

export const validateIsEmpty = (value) => {
  if (!value) {
    return true;
  }
  return false;
};

export const validateNumber = (value) => {
  if (!_.isFinite(+value) && value) {
    return true;
  }
  return false;
};

export const validateMinimum = (value) => {
  if (value < 50000) {
    return true;
  }
  return false;
};

export const validateMaximum = (value) => {
  if (value > 10000000) {
    return true;
  }
  return false;
};

export const validateCity = (value) => {
  if (value.search(/^[a-zA-Z ]*$/) === -1) {
    return true;
  }
  return false;
};

export const validateEmail = (value) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g;
  if (!emailRegex.test(value)) {
    return true;
  }
  return false;
};
