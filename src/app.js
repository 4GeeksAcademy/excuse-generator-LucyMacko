/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};

const generateExcuse = () => {
  let who = ["The dog", "My grandma", "A turtle", "The burgler"];
  let action = ["destroyed", "chewed", "tore", "cut"];
  let what = ["my homework", "the bills", "the cake "];
  let when = [
    "before the class",
    "after school",
    "when I finished",
    "during my lunch",
    "yesterday"
  ];
  return (
    who[Math.floor(Math.random() * action.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)]
  );
};
