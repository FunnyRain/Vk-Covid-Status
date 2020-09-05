const request = require(`request`)
const {
    token,
    status_id,
    time
} = require(`./config`)

setInterval(() => {
    let statusid = (status_id <= -1) ? Math.floor(Math.random() * Math.floor(38)) : status_id;
    request.post({
        url: `https://api.vk.com/method/users.setCovidStatus`,
        body: `?api_id=7362610&method=users.setCovidStatus&format=json&v=5.103&status_id=${statusid}&access_token=${token}&request_id=12`
    }, function (err, httpResponse, body) {
        if (err) console.log(err);
        if (body == '{"response":1}')
            console.log(`-> (${time} sec.) Status_id: ${statusid}`);
        // else
        //     console.log(`-> Error: ${body}`);
    })
}, time * 1000);