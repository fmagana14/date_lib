class D {
  /**This is a Docstring */
  constructor(...args) {
    this._date = new Date(...args);
  }
  get year() {
    // getter starts with get
    return this._date.getFullYear(); // returns full year
  }
  // get yr
  get yr() {
    return this._date.getFullYear().toString().slice(-2);
  }
  // get month
  get month() {
    const months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[this._date.getMonth()]; // Could be -1 if it's 1 - 12
  }
  // get mon
  get mon() {
    return this._date.getMonth();
  }
  // get day
  get day() {
    const day = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return day[this._date.getDay()];
  }
  //  get dy
  get dy() {
    return this.day().slice(3);
  }
  // get date
  get date() {
    return this._date.getDate();
  }
  // hours
  get hour() {
    return this._date.getHours();
  }
  //  get mins
  get mins() {
    return this._date.getMinutes();
  }
  // get secs
  get secs() {
    return this._date.getSeconds();
  }
  format(str = "Y M D H") {
    // create var to store output
    // loop over each character adding each corresponding data point
    let output = "";
    console.log(str);
    // check param here

    for (let i = 0; i < str.length; i += 1) {
      const letter = str[i];
      console.log("*1", letter);
      if (letter == "Y") {
        output += this.year;
      } else if (letter == "y") {
        output += this.yr;
      } else if (letter == "M") {
        output += this.month;
      } else if (letter == "m") {
        output += this.mon;
      } else if (letter == "L") {
        output += this.day;
      } else if (letter == "l") {
        output += String(this.date).padStart(2, "0");
      }
      // WTF!!!!!!!!!!!!!!!!!!
      else if (letter == "D") {
        // console.log("Is this thing on?");
        output += this.date;
      } else if (letter == "d") {
        output += this.date;
      } else if (letter == "H") {
        output += this.hour;
      } else if (letter == "h") {
        output += this.hour;
      } else if (letter == "I") {
        console.log("min");
        output += this.mins;
      } else if (letter == "i") {
        console.log("min");
        output += this.mins;
      } else if (letter == "S") {
        output += this.secs;
      } else if (letter == "s") {
        output += this.secs;
      } else {
        output += letter;
      }
    }
    // return result
    return output;
  }
}
// With no parameters:
const a = new D();
// Create a date from a string (single parameter)
const b = new D("9/26/1965");
// Create a date from some numbers (list of parameters)
const c = new D(1970, 1, 1, 0, 0, 0);
// With a Date
// const d = new D(new Date())

// Externally year looks like a property!
const d = new D(2017, 0, 2, 3, 4, 5);
console.log(d.year); // no parenthese!
console.log(d.format()); // 2017 January 02
console.log(d.format("y/m/d")); // 17/Jan/2
console.log(d.format("H:I:S")); // 03:04:05
console.log(d.format("h:i:s")); // 3:4:5
console.log(d.format("Y-M-D h:I:S")); // 2017-January-02 3:04:05
