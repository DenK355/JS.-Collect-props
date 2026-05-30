'use strict'
class Person {
    constructor(firstName, lastName, nickName, email){

        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.email = email;

    }
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const firstName = document.getElementById('name').value;
    const lastName = document.getElementById('last-name').value;
    const nickName = document.getElementById('nick-name').value;
    const email = document.getElementById('email').value;

    const person = new Person(firstName, lastName, nickName, email);

    localStorage.setItem('person', JSON.stringify(person));
})


