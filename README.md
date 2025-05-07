# next-level-batch-5-assignment-1

## 📘 Description
assignment-1's all problems is here...
---

## 🧩 answer List:
```ts

 // ----------------------------------✅ Problem 1: solution-1:--------------------------------------------
    const formatString = (input: string, toUpper?: boolean): string => {
        if (toUpper) {
            return input.toUpperCase();
        } else {
            return input.toLowerCase();
        }
    }

    const inputValue1 = formatString("assalamu alaikum")
    console.log(inputValue1)//  output: assalamu alaikum

    const inputValue2 = formatString("assalamu alaikum", true)
    console.log(inputValue2)//  output: ASSALAMU ALAIKUM

    const inputValue3 = formatString("assalamu alaikum", false)
    console.log(inputValue3)//  output: assalamu alaikum


    // -----------------------------✅ Problem 2: solution-2 ------------------------------------------------------
    const books = [
        { title: "Unlock the Power of JavaScript", rating: 4.5 },
        { title: "Fun with HTML, CSS & JavaScript", rating: 3.2 },
        { title: "React Explained Simply", rating: 5.0 },
        { title: "Programming Life Story", rating: 3.0 },
        { title: "Think in a Coder’s Way", rating: 4.0 },
    ];


    type TypeAlias = { title: string; rating: number };

    const filterByRating = (items: TypeAlias[]): TypeAlias[] => {
 const topRatingbook1: TypeAlias[] = items.filter((singeBook: TypeAlias) => parseInt(singeBook.rating) >= 4);
        return topRatingbook1;
    }

    // -----------------------------✅ Problem 3: solution-3----------------------



    // -----------------------------✅ Problem 4: solution-4----------------------

   class Vehicle {
        private _make: string; // encapsulation kora hoise.ja shudo main class theke access kora jai.
        public year: number;
        constructor(_make: string, year: number) {
            this._make = _make;
            this.year = year;
        }

        getInfo() {
            console.log(`The Vehicle make: "${this._make}, & year: ${this.year}"`);
        }

    }

    class Car extends Vehicle { // child class

        constructor(_make: string, year: number, private model: string) {
            super(_make, year);
        }

        getModel() {
            console.log(`the "model is : ${this.model}" `);
        }

    }

    const myCar = new Vehicle('Toyota', 2025);
    const myCarModel = new Car("Toyota", 2024, "Primio");

    myCar.getInfo();// output: The Vehicle make: "Toyota, & year: 2025"
    myCarModel.getModel(); // outpu: the "model is : Primio"





    // -----------------------------✅ Problem 5: solution-5----------------------

    type Type_literal = string | number;

    const processValue = (value: Type_literal): Type_literal => {
        if (typeof value === "string") {
            console.log(value.length);
            // return value.length;
        } else if (typeof value === "number") {
            console.log(value * value);
            // return value * value;
        }
    }

    const ifTheValueIsString = processValue('hello');//  output: 5 
    // console.log(ifTheValueIsString) // output: 5  

    const ifTheValueIsNumber = processValue(5);// ouptut: 25
    // console.log(ifTheValueIsNumber)// ouptut: 25

