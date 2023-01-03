let workshop = {
    instructor: 'Ben',
    ask(question) {
        setTimeout(() => {
            console.log(this.instructor + ', ' + question)
        }, 1000)
    }
}

workshop.ask('Why are there so many different rules?') // This runs correctly. 

/*
Arrow functions don't have `this` so it resolves 'lexically' so it's looking in
its enclosing scope. So, it goes up a scope into the ask function which is being called
in line 10. The function asks definition of the `this` keyword is set in line 10.
For more information and confirmation on arrow functions not having `this` see the specs:
https://www.ecma-international.org/ecma-262/9.0/index.html#sec-arrow-function-definitions-runtime-semantics-evaluation
Part of the spec copied below:
"An ArrowFunction does not define local bindings for arguments, super, this, or new.target. 
Any reference to arguments, super, this, or new.target within an ArrowFunction 
must resolve to a binding in a lexically enclosing environment."
*/

// Arrow Functions Gotcha
// Uncomment and play around with the code below. 
// Ask yourself: "What is `this` here?" and "What are the scopes in the below code?"
// let workshop1 = {
//     instructor: 'Ben',
//     ask: (question) => { // What happens here?
//        console.log(this.instructor + ', ' + question)
//     }
// }

// workshop1.ask('What happened to this?')

// workshop.ask.call(workshop, 'Still no this'?)
