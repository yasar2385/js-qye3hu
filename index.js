// Import stylesheets
import './style.css';

var _gID = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
var isNumber = true;
var fnTag = `<div class="fn highlightAff" data-new="new" data-name="fn" ${
  isNumber ? 'id=' : ''
}><div class="p" data-name="p" id="${_gID}">&#x00A0;</div></div>`;

console.log(fnTag);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

document.getElementById('body1').innerHTML = '<i>yasar</i>';

//document.getElementById('man').style.textDecoration = 'underline';
//document.getElementsByClassName('manger')[0].style.color = 'blue';

document.getElementsByTagName('ul');
console.log(
  document.getElementById('man'),
  document.getElementsByClassName('manger'),
  document.querySelectorAll('.staff')
);
var Arr = ['Yasar', 'Develope', '9104228'];

var Emplyes = {
  9104228: {
    name: 'Yasar',
    role: 'Develope',
    team: 'RND',
  },
  9104229: {
    name: 'Yasar',
    role: 'Develope',
    team: 'RND',
  },
};
console.log(Arr, Emplyes);
//Array
//JSON
//Events
document.querySelectorAll('.staff').forEach((el) => {
  el.style.color = el.getAttribute('role') == 'manger' ? 'red' : 'green';
});
// id  == #id
//class == .class
//[attr='Value']
var ALLOW_BROWSER_VER = {
  Chrome: {
    min: 72,
    max: 97,
  },
  Firefox: {
    min: 66,
    max: 97,
  },
  Safari: {
    min: 14.1,
    max: 16.3,
  },
  'Microsoft Edge': {
    min: 80,
    max: 97,
  },
  Blink: {
    min: '',
    max: '',
  },
};
window.IMPACT = {
  USER_ENV_INFO: {
    screenResolution: '1366 x 768',
    browser: 'Safari',
    browserVersion: '108.1.2',
    browserMajorVersion: 108,
    mobile: false,
    os: 'Windows',
    osVersion: '10_13_6',
    cookies: true,
    flashVersion: 'no check',
  },
};

var _ = IMPACT.USER_ENV_INFO;
var IsSafar = _.browser == 'Safari' ? true : false;
var validate_json = ALLOW_BROWSER_VER[_.browser];
console.log([validate_json, _.browserVersion, _.browserMajorVersion]);
browser_id.textContent = _.browser;
let fetch = validate_json.min.toString().includes('.')
  ? 'browserMajorVersion'
  : 'browserVersion';
if (validate_json && validate_json.min > _[fetch]) {
  console.log('alert');
  console.log(_[fetch]);
} else {
  console.log(_[fetch]);
}
console.log('14.1' > '14.1.2');
console.log('14'.localeCompare('14.1.2'));
console.log('14'.localeCompare('14.1'));
console.log('14'.localeCompare('13.1.2'));
var split = _.browserVersion.split('.');
console.log(split[0]);

console.log('80'.localeCompare('108.0.1462.54'));
let currentVersion = validate_json.min.toString();
console.log('===>' + currentVersion.split('.')[0].length);
console.log('===>' + _.browserMajorVersion.toString().length);
console.log(
  currentVersion.split('.')[0].length - _.browserMajorVersion.toString().length
);
console.log('===>');
while (
  validate_json.min.toString().split('.')[0].length -
  _.browserMajorVersion.toString().length
)
  currentVersion = '0' + currentVersion;
console.log(currentVersion);
