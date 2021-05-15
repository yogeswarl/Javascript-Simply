## learning Typescript
A superset of javascript, Need to know about data types
### why typescript?
- Typescript does compile time execution.
- Larger codebases are easier to manage in typescript


## features
Once you declare a variable with a particular type, you cannot change it.
main reason to use TS is to make use of types to every variable
interfaces are a great use for repeated objects with same types. You can inherit the interface and reduce code.
Union operators are used for optional data types or values when fetching data or assigning a variable to a value
Document Object Model Elements are declared already by typescript


## notes
- adding a prefix `I` or a postfix `Interface` in Interfaces to identify them in large codebase
- if you are not returning anything from a function, use the void datatype
- using the `never` datatype to return nothing or throw errors.
- Type assertion for `unknown` is used when you are not sure of the data type of a variable, This is a better alternative for type `any`.
- Working with DOM, There are many common atributes to an element. But some elements have other attributes. You should declare them properly than to type assert the `any` type.
- when using event listeners you will have to declare the event.target from its generic type to its specific type.