class User {
  constructor() {}

  async login(u, p) {
    this.username = u;
    this.password = p;

    let acctual_data = JSON.stringify(this);

    try {
      let res = await fetch(
        `https://masai-api-mocker.herokuapp.com/auth/login`,
        {
          method: "POST",

          body: acctual_data,

          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let convert = await res.json();

      let Transfer = convert.error;

      if (Transfer == false) {
        window.location.href = "index.html";
      }
    } catch (error) {
      console.log("error:", error);
    }
  }
}
var name1=document.getElementById("btn")
name1.addEventListener("click",function (){
  Login()
})
let U1 = new User();

const Login = () => {
  const Name = document.getElementById("username").value;

  const Pass = document.getElementById("password").value;

  let Detail = U1.login(Name, Pass);

  console.log(Detail);
};

import navbar from "./components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
