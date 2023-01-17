import { baseUrl, email, password } from "../src/config.js";

export class Login {
    getJwtToken() {
        const params = {
            "email": email,
            "password": password
        };
        const config = {
            headers: {
                'Accept': 'application/json',
            }
        };
        axios.post(baseUrl+'/authentication_token', params, config)
        .then(res => {
            // console.log(res.data.token);
            localStorage.setItem("jwt_token", res.data.token);
        })
        .catch(err => {
            console.log(err);
        });
    }
}