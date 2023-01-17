// import { baseUrl } from "./src";
import { getData } from "./src/getData.js";
import { Login } from "./actions/Login.js";
import { Register } from "./actions/Register.js";


Register.register();
// let login = new Login;
// login.getJwtToken();
// document.addEventListener("DOMContentLoaded", getData);


// document.addEventListener("DOMContentLoaded", () => {
//     const baseUrl = 'http://localhost:8000/api';
//     axios.get(baseUrl + '/weather').then(function(res) {
//         console.log(res);
//         // show(res.data['hydra:member']);
//         const data = res.data['hydra:member'];

//         let item = document.getElementById('weather-list');
//         let data_item = '';

//         item.innerHTML = '';

//         for(let i=0;i<data.length;i++) {
//             data_item += `<ul><li>${data[i].city}: ${data[i].temp}, ${data[i].wind}</li></ul>`;
//         }
//         item.innerHTML = data_item;
//     })
//     .catch(function(err) {
//         console.log(err);
//     });
// });

// --- Register
// import { Register } from "./actions/Register";

// Register.register();
// function register()
// {
//     let params = new URLSearchParams();
//     const email = 'finy@agre.com';
//     const password = 'finy';
//     const config = {
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         }
//     };
//     params.append('email', email);
//     params.append('password', password);
//     axios.post('http://localhost:8000/register', params, config)
//         .then(res => {
//             console.log(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
// register();