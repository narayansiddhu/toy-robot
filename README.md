# toy-robot
This application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units

## Description

- Toy Robot Game is an interactive CLI application.
- The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.    
- There are no other obstructions on the table surface.   
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.   

### Environments

Cross-platform. The application can be directly run on  OS X, Microsoft Windows, Linux platforms without special preparation.

The application uses no any third-party modules or packages that should be installed with it.

### Application Installation Instructions

No installation needed. No changes will be made to your system.
To get the application, just clone a repo, then `cd` its directory and you are ready to run the app:

```
$ git clone git@github.com:narayansiddhu@gmail.com/toy-robot.git
$ cd toy-robot
```

### Operating Instructions

You have two options to send commands to the robot.   
The first option is to type in commands in command prompt.   
The second option is to provide a file with commands.   

To operate the robot by typing commands, start the app from the command prompt with no arguments provided and begin type in commands:

```
$ npm start

Welcome to my robotic world!

I will take your orders within the constraints.
Feel free to begin by placing me on the table - PLACE X, Y, F (case insensitive, spaces are acceptable instead of commas). 'q' to exit.
> PLACE 1 1 SOUTH
> REPORT
I am at: 1, 1 towards SOUTH
```

To operate the robot using a file, create a file with commands within files directory, e.g. `game1.txt`, with the following contents:

```
PLACE 0,0,NORTH
MOVE
REPORT
LEFT
MOVE
REPORT
```

Then run the application providing it the file as the first argument:

```
$ npm start game1

Welcome to my robotic world!

I will take your orders within the constraints.
Feel free to begin by placing me on the table - PLACE X, Y, F (case insensitive, spaces are acceptable instead of commas). 'q' to exit.
> PLACE 0,0,NORTH
> MOVE
> REPORT
I am at: 0, 1 towards NORTH
> LEFT
> MOVE
Uh oh! No more moves in that direction, else I fall :(.
> REPORT
I am at: 0, 1 towards WEST
```

