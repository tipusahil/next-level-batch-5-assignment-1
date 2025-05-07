# next-level-batch-5-assignment-1

## 📘 Description
assignment-1's all problems is here...
---

## 🧩 Problem List

### ✅ Problem 1: Check if a number is even or odd
```ts

 // -------------------------------------------------------------------solution-1:--------------------------------------------
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


    // --------------------------------------------------------------solution-2 ------------------------------------------------------
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

    const topRatingbook = filterByRating(books)
    console.log(topRatingbook)

