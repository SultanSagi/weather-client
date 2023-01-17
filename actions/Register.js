import { baseUrl, email, password } from "../src/config.js";

export class Register {
    static register()
    {
        let params = new URLSearchParams();
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        };
        params.append('email', email);
        params.append('password', password);
        axios.post(baseUrl+'/register', params, config)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}