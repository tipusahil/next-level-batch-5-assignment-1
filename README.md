
--------------------------blog 1 --------------------
1. What are some differences between interfaces and types in TypeScript?


1.✒️📌.answer: In TypeScript, we use both interface and type to define the structure of an object. But there are some key differences between them.

The main difference is: interface is specifically used for objects, whereas type can be used for anything—like functions, arrays, strings, numbers, primitives, etc.

In real-world development, both are used, and each has its own benefits.

Using interface, we can easily extend or create a duplicate structure using another interface. But in the case of type, to extend it we have to use the intersection (&) operator to combine.

Even though interface is powerful, type is more flexible.

Example of interface and type:
```
interface Admin {
  role: string;
}

interface SuperAdmin extends Admin {
  accessLevel: number;
}

type Manager = {
  role: string;
};

type TeamLead = Manager & {
  teamSize: number;
};

```
Now, if you're working on an industry-level project, you need to have a good understanding of both interface and type. This will help you increase flexibility in your work. Depending on how your project is structured, you will need to follow that approach and use them accordingly.
--------------------blog 2--------------------
2. What is the use of the keyof keyword in TypeScript?



2.✒️📌.answer: In TypeScript, keyof is used for many useful things.

keyof is a utility type in TypeScript that takes an object type and produces a union of its keys (property names). That means you can check which properties exist in an object type using keyof.

As a result, you can dynamically access property names of an object type.

Example:
```
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

type PersonKeys = keyof Person;
// Result: "name" | "age" | "isStudent"
```
So, by using keyof, we can write more dynamic and type-safe code when dealing with object properties.
