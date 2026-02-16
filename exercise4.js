const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
// BUG: this.classList.add('active') throws an error
// The issue is that `this` in the arrow function refers to the global object
//  not the box element.
// In an arrow function, `this` is lexically bound, meaning it takes the value of `this` from the surrounding context. Since the surrounding context is the global scope, `this` does not refer to the box element as intended.
// To fix this, we use `event.currentTarget` instead of `this`.

event.currentTarget.classList.add('active');
//This returns the element that the event listener is attached to, 
// which is the box element in this case.
//this solves the issue because it correctly references the box element allowing me to add the 'active' class without errors.
});
