const express = require('express');
const dotenv = require('dotenv');
const PayOS = require('@payos/node');

const app = express();
const PORT = process.env.PORT || 3030;
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3030';
const YOUR_PAYOS_CLIENT_ID = process.env.PAYOS_CLIENT_ID;
const YOUR_PAYOS_API_KEY = process.env.PAYOS_API_KEY;
const YOUR_PAYOS_CHECKSUM_KEY = process.env.PAYOS_CHECKSUM_KEY;

const payos = new PayOS(YOUR_PAYOS_CLIENT_ID, YOUR_PAYOS_API_KEY, YOUR_PAYOS_CHECKSUM_KEY);

app.post('/create-payment-link', async (req, res) => {
    const body = {
        orderCode: Number(String(Date.now()).slice(-6)),
        amount: 1000,
        description: 'Thanh toan don hang',
        returnUrl: `${YOUR_DOMAIN}/success.html`,
        cancelUrl: `${YOUR_DOMAIN}/cancel.html`
    };

    try {
        const paymentLinkResponse = await payos.createPaymentLink(body);
        res.redirect(paymentLinkResponse.checkoutUrl);  
    } catch (error) {
        console.error(error);
        res.send('Something went error');
    }
});

app.listen(PORT, function () {
    console.log(`Server is listening on port ${PORT}`);
});