# assignment-1-next-level-batch-5

## 📘 Description
assignment-1's all problems is here...!!!
---

## 🧩 answer List:
```ts

 // -------------------------------✅ Problem 1: solution-1:---------------------------
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


    // ----------------------------✅ Problem 2: solution-2 -------------------------
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

    const concatenateArrays = <T>(...arrays: T[][]): T[] => {
        let fullArray: T[] = [];

        arrays.forEach((array1: T[]) => {
            fullArray.push(...array1)

        });

        return fullArray
    }

    const ifStirng = concatenateArrays<string>(["a", "b"], ["c"]); //output: [ 'a', 'b', 'c' ]
    console.log(ifStirng);
    const ifNumber = concatenateArrays<number>([1, 2], [3, 4], [5, 6]); // output: [ 1, 2, 3, 4, 5, 6 ] 
    console.log(ifNumber);

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

    // -----------------------------✅ Problem 6: solution-6----------------------

  interface Product {
        name: string;
        price: number;
    }
    const products: Product[] = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Quran", price: 1099 },
        { name: "Bag", price: 50 }
    ];

    const getMostExpensiveProduct = (products: Product[]): Product | null => {

        if(products.length == 0){ return null};
        
        const expensiveProdectIs: Product = products.reduce((maxExpensiveProduct: Product, currectExpensiveProduct: Product): Product => {
            const expensive = currectExpensiveProduct.price > maxExpensiveProduct.price ? currectExpensiveProduct : maxExpensiveProduct;
            return expensive;

        })
        return expensiveProdectIs;
    }

    const theExpensiveProductIs = getMostExpensiveProduct(products);
    console.log(theExpensiveProductIs) // output:  { name: 'Quran', price: 1099 }

    const ifArrayIsEmpty = getMostExpensiveProduct([]);
    console.log(ifArrayIsEmpty) // output: null




   // -----------------------------✅ Problem 7: solution-7----------------------




   // -----------------------------✅ Problem 8: solution-8----------------------

    const squareAsync = (value: number): Promise<number> => {

        return new Promise<number>((resolve, reject) => {

            if (value > 0) {
                setTimeout(() => {
                    resolve(value * value);
                }, 1000);

            }

            else if (value <= 0) {
                setTimeout(() => {
                    reject(`Error: Negative number not allowed`)
                }, 0);
            }
        })

    }

    const showOutput = async (value: number): Promise<number> => {
        const isValuePositive: number = await squareAsync(value);
        return isValuePositive;
    }

    showOutput(6).then(console.log) // output after 1s: 36
    showOutput(0).catch(console.error) // output: Error: Negative number not allowed
