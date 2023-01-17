import { baseUrl } from "./config.js";
import { show } from "./view.js";


export const getData = () => {
    axios.get(baseUrl + '/api/weather').then(function(res) {
        // console.log(res);
        show(res.data['hydra:member']);
    })
    .catch(function(err) {
        console.log(err);
    });
}