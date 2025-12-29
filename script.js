const person = new Set();

function registration(submitBtn, event){
    submitBtn.addEventListener('click', function(event){
        event.preventDefault();
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const age = document.getElementById("age").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const date = new Date();
        console.log("Registration form submitted");
        const Person = new Object({
            firstName: fname,
            lastName: lname,
            age: age,
            email: email,
            phone: phone,
            Date: date
        });
        console.log(Person);
    });
};
const submitBtn = document.getElementById("registerBtn");
registration(submitBtn);