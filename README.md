# DevFishLib v1.0
Basic but useful JavaScript library I mostly made for myself. 
If you are someone who wishes to use this for whatever reason, here are some small tips on how it works

- All functions are called with `DFL.` and then the function
- All functions will need you to refer an element. When you do, it works the same as `document.querySelector()`
- Example: `const btn = DFL.getElem("#btn")`
- The "a" at the beginning of some functions such as `aClass` or `aAttribute` mean "add"
- The "r" at the beginning of some functions such as `rClass` or `rAttribute` mean "remove"
