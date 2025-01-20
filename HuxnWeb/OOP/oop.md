<!-- * object oriented programming is porgramming model/style organized around objects rather then 'actions and data then logic -->

<!-- ^ JavaScript is a versatile and dynamic programming language that supports multiple paradigms, including procedural, functional, and object-oriented programming. While JavaScript is not a purely object-oriented language like Java or C++, it provides the tools and features to implement OOP concepts effectively. -->

<!-- * OOP in JavaScript refers to the practice of designing and structuring code around objects and their interactions. It is a programming paradigm that allows developers to model real-world entities and their relationships using objects and classes. -->

<!-- & keyword This -->
<!-- * the js this keyword referes to the object it belongs to .it has different values depending upon the use  -->

## in method this referes to the owner object

## Alone this refers to the global object

## In a function this refers to the global object

<!-- ! This in a method-->

in an object method ,this refers to the 'owner' of the method

fullname: function(){
return this.firstName +" "+this.lastName
}

# keyword This

> The JavaScript this keyword refers to the object it belongs to. It has different values depending on where it is used

|               |                                   |
| ------------- | --------------------------------- |
| In a method   | this refers to the owner object.  |
| Alone         | this refers to the global object. |
| In a function | this refers to the global object. |

### This in a Method

> In an object method, this refers to the "owner" of the method.

```js
fullName : function() {
  return this.firstName + " " + this.lastName;
}
```

### this Alone

> When used alone, the owner is the Global object, so this refers to the Global object.

```js
let x = this;
```

### this in a Function (Default)

> In a JavaScript function, the owner of the function is the default binding for this.
> So, in a function, this refers to the Global object [object Window].

```js
function myFunction() {
  return this;
}
```
