import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    iterations: 100,
    vu:2, // Menjalankan 10 request\
    // duration: '30s',
};
0
export default function () {
    http.get("http://10.201.1.138:800/eazyn/login.php"); // URL contoh untuk load testing
    res = res.submitform({
        formSelector: 'form',
        fields: {username:"mutiara", password: "123456"}
        
    });
}