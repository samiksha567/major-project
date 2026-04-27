let form = document.querySelector("form");
form.addEventListener("submit",function(event){
 event.preventDefault();
console.dir(form)
let user = document.querySelector("#user");
let pass= document.querySelector("#pass");
console.log(user.value);
console.log(pass.value);
alert(`Hi ${user.value},your password is set ${pass.value}`);
  });


const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});
