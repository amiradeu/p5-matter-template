# Project Template

A simple base startup files for P5.js & Matter.js experiments.

## Libraries

-   [p5](https://github.com/processing/p5.js/) : Drawing on canvas
-   [Matter](https://github.com/liabru/matter-js) : 2D Physics engine
-   [Tweakpane]() : Debugging
-   [Vite]() : package manager

## How to use

Matter is mainly used as a physics engine, thus the whole physics canvas is hidden from view with css but remain interactable. Toggle the opacity line to show/hide the physics appearance.

```
.matter-canvas-wrapper {
    ...
    /* hide physics debug */
    /* opacity: 0; */
}
```
