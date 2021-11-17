const fetch = require('node-fetch');

function meme(logging) {
    fetch('')
        .then(res => req.json())
        .then(res => {
            let memeObj = {
                link: res.link,
                caption: res.caption,
                likes: res.likes,
                dislikes: res.dislikes,
                link: res.url
            };
            if (logging) console.log('DiscordFUN > Executed meme function');
            return memeObj;
        })
}

module.exports = meme;