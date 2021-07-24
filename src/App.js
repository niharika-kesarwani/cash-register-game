import { React, useState } from "react";
import "./styles.css";

export default function App() {
  const [n2000, set2000] = useState(0);
  const [n500, set500] = useState(0);
  const [n100, set100] = useState(0);
  const [n20, set20] = useState(0);
  const [n10, set10] = useState(0);
  const [n5, set5] = useState(0);
  const [n1, set1] = useState(0);
  const [bill, setBill] = useState(0);
  const [cash, setCash] = useState(0);

  function numofNotes(num, note) {
    var index = 0;
    while (num >= note) {
      index++;
      num = num - note;
    }
    return index;
  }

  function buttonHandler() {
    var diff = cash - bill;
    if (diff < 0) {
      alert("Please enter the cash amount greater then the bill amount!");
    }
    if (diff >= 2000) {
      set2000(numofNotes(diff, 2000));
      diff = diff - numofNotes(diff, 2000) * 2000;
    } else {
      set2000(0);
    }
    if (diff >= 500) {
      set500(numofNotes(diff, 500));
      diff = diff - numofNotes(diff, 500) * 500;
    } else {
      set500(0);
    }
    if (diff >= 100) {
      set100(numofNotes(diff, 100));
      diff = diff - numofNotes(diff, 100) * 100;
    } else {
      set100(0);
    }
    if (diff >= 20) {
      set20(numofNotes(diff, 20));
      diff = diff - numofNotes(diff, 20) * 20;
    } else {
      set20(0);
    }
    if (diff >= 10) {
      set10(numofNotes(diff, 10));
      diff = diff - numofNotes(diff, 10) * 10;
    } else {
      set10(0);
    }
    if (diff >= 5) {
      set5(numofNotes(diff, 5));
      diff = diff - numofNotes(diff, 5) * 5;
    } else {
      set5(0);
    }
    if (diff >= 1) {
      set1(numofNotes(diff, 1));
      diff = diff - numofNotes(diff, 1) * 1;
    } else {
      set1(0);
    }
  }

  function billHandler(event) {
    setBill(event.target.value);
  }

  function cashHandler(event) {
    setCash(event.target.value);
  }

  return (
    <div className="App">
      <h1></h1>
      <input id="billbtn" type="number" onChange={billHandler}></input>
      <input id="cashbtn" onChange={cashHandler}></input>
      <hr />
      <button id="calculate" onClick={buttonHandler}>
        Calculate
      </button>
      <hr />
      <div>Result: </div>
      <hr />
      <div id="note2000">2000: {n2000}</div>
      <hr />
      <div id="note500">500: {n500}</div>
      <hr />
      <div id="note100">100: {n100}</div>
      <hr />
      <div id="note20">20: {n20}</div>
      <hr />
      <div id="note10">10: {n10}</div>
      <hr />
      <div id="note5">5: {n5}</div>
      <hr />
      <div id="note1">1: {n1}</div>
    </div>
  );
}
