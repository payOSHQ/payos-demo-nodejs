# Instructions
## Requirements
* Created [payOS](https://my.payos.vn) payment channel
## Run project
Rename the file `.env.example` to a file named `.env`.

Fill in the fields `PAYOS_CLIENT_ID`, `PAYOS_API_KEY`, `PAYOS_CHECKSUM_KEY` which are in the file named `.env` with the payment channel information you created on payOS.

Run following commands:
```bash
npm i
npm start
```

After NodeJS project started, visit http://localhost:3030 to access the demo page using payOS payment method implemented in NodeJS.

In addition to the demo page using payOS payment method, we also implemented some APIs to call from client and webhook to process data received from payOS.

APIs are implemented in the `controllers/order-controller.js` file. Webhook is implemented in the `controllers/payment-controller.js` file.



