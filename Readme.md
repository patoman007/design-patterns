# Design Patterns 
-----

At any given moment, someone struggles with the same software design problems you have. 
And, chances are, someone else has already solved your problem.

This repo aim to be a quick software design concepts reference.

The examples are implemented on Typescript.

## Design Principles

- Identify the aspects of your application that vary and separate them  from what stays the same.
- Program to an super type (interface), not an implementation.
- Favor composition over inheritnce.
- Strive for loosely coupled designs between objects that interact.
- Classes should be open for extension, but closed for modification.
- __Dependency Inversion Principle:__ Depend upon abstractions. 
Do not depend upon concrete classes.

## Design Patterns

- ### __Strategy Pattern__
  Define a family of algorithms, encapsulates each one, and make them interchangeable. 
  Strategy  lets the alghoritm vary independently from clients that use it

- ### __Observer Pattern__
  Defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

- ### __Decorator Pattern___
  Attach additional responsabilities to an object dinamically.
  Provide a flexible alternative to subclassing for extending functionality.

- ### __Singleton Pattern___
  Ensureas a class has only one instance, and provides a global point of access to it.

# License

This project is available under the MIT license. See the __LICENSE__ file for more info.