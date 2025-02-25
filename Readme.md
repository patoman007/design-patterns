# Design Patterns 
-----

At any given moment, someone struggles with the same software design problems you have. 
And, chances are, someone else has already solved your problem.

This repo aim to be a quick software design concepts reference.

The examples are implemented using Typescript.

## Design Principles

- Identify the aspects of your application that vary and separate them  from what stays the same.
- Program to an super type (interface), not an implementation.
- Favor composition over inheritnce.
- Strive for loosely coupled designs between objects that interact.
- Classes should be open for extension, but closed for modification.
- __Dependency Inversion Principle:__ Depend upon abstractions. 
Do not depend upon concrete classes.
- __Least Knowledge__ Talk only to your immediate friends.
It means be careful of the number of classes it interacts with.
This principle prevents us from creating designs that have a large number of classes coupled
together so that changes in one part of the system cascade to other parts.
- __Single Responsability__ A class should have only one reason to change.
Every responsability of a class is an area of potential change. More than one
responsability means more than one area of change. This principle guide us to
keep each class to a single responsability.

## Design Patterns

- ### __Strategy Pattern__
  Define a family of algorithms, encapsulates each one, and make them interchangeable. 
  Strategy  lets the alghoritm vary independently from clients that use it

- ### __Observer Pattern__
  Defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

- ### __Decorator Pattern__
  Attach additional responsabilities to an object dinamically.
  Provide a flexible alternative to subclassing for extending functionality.

- ### __Singleton Pattern__
  Ensureas a class has only one instance, and provides a global point of access to it.

- ### __Command Pattern__
  Encapsulates a request as an object, thereby letting you parametize other objects with different requests, queue or log requests, and support undoable options.

- ### __Adapter Pattern__
  Converts the interface of a class into another interface the client expect.
  Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

- ### __Facade Pattern__
  Provides a unified interface to a set of interfaces in a subsystem.
  Facade defines a higher level interface that make the subsystem easier to use.

- ### __Template Method Pattern__
  Define the skeleton of an algorithm in a operation, deferring some steps to subclasses.
  Lets subclasses redefine certain steps of an algorithm without changing it structure.

- ### __Iterator Pattern__
  It provides a way to access the elements of an aggregate object sequentially without exposing 
  its underlying representation.

- ### __Composite Pattern__
  It allows you to compose objects into tree structures to represent part-whole 
  hieranchies. Composite let clients treat individual objects and compositions of
  objects uniformly.

# License

This project is available under the MIT license. See the __LICENSE__ file for more info.