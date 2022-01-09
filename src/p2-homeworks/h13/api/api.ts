import axios from "axios";

export const requestsAPI = {
    sendPost(checked: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{success: checked})
    }
}