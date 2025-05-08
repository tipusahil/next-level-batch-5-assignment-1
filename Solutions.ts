
    const formatString = (input: string, toUpper?: boolean): string => {
        if (toUpper) {
            return input.toUpperCase();
        } else {
            return input.toLowerCase();
        }
    }

    const inputValue1 = formatString("assalamu alaikum")
    console.log(inputValue1)

    const inputValue2 = formatString("assalamu alaikum", true)
    console.log(inputValue2)

    const inputValue3 = formatString("assalamu alaikum", false)
    console.log(inputValue3)


// -----


    const books = [
        { title: "Unlock the Power of JavaScript", rating: 4.5 },
        { title: "Fun with HTML, CSS & JavaScript", rating: 3.2 },
        { title: "React Explained Simply", rating: 5.0 },
        { title: "Programming Life Story", rating: 3.0 },
        { title: "Think in a Coder’s Way", rating: 4.0 },
    ];


    type TypeAlias = { title: string; rating: number };

    const filterByRating = (items: TypeAlias[]): TypeAlias[] => {
 const topRatingbook1: TypeAlias[] = items.filter((singeBook: TypeAlias) => singeBook.rating >= 4);
        return topRatingbook1;
    }

 // -----

    const concatenateArrays = <T>(...arrays: T[][]): T[] => {
        let fullArray: T[] = [];

        arrays.forEach((array1: T[]) => {
            fullArray.push(...array1)

        });

        return fullArray
    }

    const ifStirng = concatenateArrays<string>(["a", "b"], ["c"]); 
    console.log(ifStirng);
    const ifNumber = concatenateArrays<number>([1, 2], [3, 4], [5, 6]); 
    console.log(ifNumber);


  // -----

    class Vehicle {
        private _make: string; 
        public year: number;
        constructor(_make: string, year: number) {
            this._make = _make;
            this.year = year;
        }

        getInfo() {
             return `Vehicle Make: ${this._make}, Year: ${this.year}.`;
        }
    }

    class Car extends Vehicle {

        constructor(_make: string, year: number, private model: string) {
            super(_make, year);
        }

        getModel() {
            return `The "Model is : ${this.model}" `;
        }

    }

    const myCar = new Car("Toyota", 2024, "Primio");

    console.log(myCar.getInfo()); 
    console.log(myCar.getModel());



   // ------

    type TypeUnion = string | number;

    const processValue = (value: TypeUnion): TypeUnion => {

        return typeof value ==="string" ? value.length : value * 2;
        
    }

    console.log(processValue('alhadulillah'))
    console.log(processValue(7))

    // -------

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
    console.log(theExpensiveProductIs)

    const ifArrayIsEmpty = getMostExpensiveProduct([]);
    console.log(ifArrayIsEmpty)




   // -------

enum Day {
    Monday = "Monday",
    Tuesday = " Tuesday",
    Wednesday = " Wednesday",
    Thursday = " Thursday",
    Friday = " Friday",
    Saturday = " Saturday",
    Sunday = " Sunday"
}
const getDayType = (day : Day) :string => {
if(day ===Day.Friday || day ===Day.Saturday){
    return "Weekend"
} else {
    return "Weekday"
}
}

console.log(getDayType(Day.Friday))
console.log(getDayType(Day.Monday))


   // -----

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

    showOutput(6).then(console.log) 
    showOutput(0).catch(console.error) 
