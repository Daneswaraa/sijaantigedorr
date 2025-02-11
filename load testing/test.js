import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    iterations: 10,
    vu:1, // Menjalankan 10 request\
    // duration: '30s',
};

export default function () {
    http.get("10.201.1.138:800/eazyn/login.php"); // URL contoh untuk load testing
    sleep(1); // Delay 1 detik antar request
}
