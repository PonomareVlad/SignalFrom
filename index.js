const fetch = require('node-fetch');

const apiUrl = 'https://api.telegram.org/bot' + process.env['TELEGRAM_BOT_TOKEN'] + '/';
const userId = process.env['TELEGRAM_USER_ID'];

export default async (req, res) => {

    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    await sendMessage(userId, 'Triggered').then(() => res.status(200).send('true'));

};

async function sendMessage(chatId, message) {

    try {

        let targetUrl = apiUrl + 'sendMessage?chat_id=' + encodeURI(chatId) + '&parse_mode=HTML&text=' + encodeURI(message);

        const response = await fetch(targetUrl);

        const json = await response.json();

        console.debug('Message sent: ', json);

    } catch (e) {

        console.debug('Message sent error: ', e);

    }

    return true;

}