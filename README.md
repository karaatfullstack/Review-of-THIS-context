# Review of "this" context 

A function's `this` references the execution context for that call, determined ENTIRELY by how the function was called.

This means that a "this-aware" function can have a different context each time it's called.

## There are 4 ways to call a function

- Implicitly
- Explicitly
- Using `new`
- Default

## There is an order of precedence in which `this` is determined

1. Is the function called by new?
2. Is the function called by `call()` or `apply()`
    2b. `bind()` uses `apply()`
3. Is the function called on a context object?
4. DEFAULT: global object (except in `strict` mode)

## How `new` works

Below is also noted in the JavaScript file

```javascript
function ask(question) {
  console.log(this.instructor + ', ' + question)
}

let newEmptyObject = new ask('Is this new?')
```

1. Creates brand new empty object out of thin air
2. The newly created object (1) gets linked to another object
3. The newly created object (1) gets passed in as 'this' context to function call
4. If that function does not already return its own object, the new keyword assumes you meant to return the new object that was passed in -> implies 'return this'

## Arrow Functions (Come back to this)

It's best to get the rules down pat and then go into the `this-arrow-functions.js` to go into arrow functions to review.
