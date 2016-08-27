# Bowling Challenge

## Summary ##

* **Frames:** There are 10 frames
* **Frame:** Each frame has 2 rolls.
* **Roll:** Each roll has 10 pins.
* **Score:** Player scores the number of pins knockeddown 
    * **strike:** A player knocked-down all the 10 pins in a first roll, scores equals 10 plus the number of pins knocked down in the next two rolls.
    * **spare:** A player knocked-down ten pins in two rolls, scores equals 10 plus the number of pins knocked down in the next roll.


## Structure ##
Below is project proposed Structure
* -src
* --_actions
* --_reducers
* --_constants
* --_components
* --_root
* --_store
* --lib 

## Description ##

What i intend to do was clear from my states and actions. I structure my states into frames, game , player and roll. These are explain Below

* **Frames:** We have 10 frames and each frame consists of 2 rolls. Its therefore necessary to keep track of the current frame. This you can use to mark the beginning and end of the game.
* **Player:** The player state or reducer is where i intend to add new player, monitor and store my players score, set if the player has strike or spare etc. This is a very important reducer in this project.
* **Game:** The game store/state or reducer is necessary here because i believe, a player should have the option of restarting or replaying the game, The system on the other hand should be able to keep record for the existing session.
* **Roll:** Roll store or reducer does not hold much. Its where i intend to mark the beginning and ending of each user rolls. A frame has two rolls and this state should help us determine when to move to the next.


I added a react-redux as can be noticed in my package because i intended to use that to connect my react components to redux store https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options. This in conjunction with reselect is how i work with props and redux in react https://github.com/reactjs/reselect .

I don't have a visual effect for a roll to hit or push pins, but i intend to use a random nmber generator class to determined scores here. And my score to detrmine the remaining pins as expected. 

The _actions folder is where i keep my redux actions to be dispatch and the _constant folder hold my constants. The _components folder holds my reatc building blocks or tiny components. The _root folder is my entry point usually. The main container lies there. Incase of multiple container or pages app, i sually have another folder called conatiners. These are alot that cannot and beyond what i could achieved within the expected time.
