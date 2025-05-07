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

