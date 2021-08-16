// Import stylesheets
import './style.css';


var _gID = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
var isNumber = true;
var fnTag =  `<div class="fn highlightAff" data-new="new" data-name="fn" ${isNumber?('id='):('')}><div class="p" data-name="p" id="${_gID}">&#x00A0;</div></div>`;

console.log(fnTag)

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
  '9104228': {
    name: 'Yasar',
    role: 'Develope',
    team: 'RND'
  },
  '9104229': {
    name: 'Yasar',
    role: 'Develope',
    team: 'RND'
  }
};
console.log(Arr,Emplyes)
//Array
//JSON
//Events
document.querySelectorAll('.staff').forEach(el => {
  el.style.color = el.getAttribute('role') == 'manger' ? 'red' : 'green';
});
// id  == #id
//class == .class
//[attr='Value']
