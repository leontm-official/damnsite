
fetch("https://discord.com/api/guilds/763856190693572678/widget.json")
    .then(res => res.json())
    .then(data => {
        document.getElementById("discord").innerHTML = "Der Discord Server heißt <strong>" + data.name + "</strong> <a id='link' href='discord.html'>Mehr über den Discord Server der Damn Army</a>"
    });
const optionsTTV = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'twitch-data1.p.rapidapi.com',
        'X-RapidAPI-Key': '40e11f4107msh0e53b58956ea300p1a0387jsn3edb477d2f16'
    }
};
    
fetch('https://twitch-data1.p.rapidapi.com/twitch/user/damnchaotix', optionsTTV)
    .then(res => res.json())
    .then(data => {
        document.getElementById("twitch").innerHTML = "Damn heißt auf Twitch <strong>" + data.display_name + "</strong> <a id='link' href='twitch.html'>Mehr Infos über den Twitch Kanal von Damn</a>"
    });
const optionsYT = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-data-scraper.p.rapidapi.com',
        'X-RapidAPI-Key': '40e11f4107msh0e53b58956ea300p1a0387jsn3edb477d2f16'
    }
};
    
fetch('https://youtube-data-scraper.p.rapidapi.com/channel/bs/UCv2AU57WX19Zwt85TxSuVPQ', optionsYT)
    .then(res => res.json())
    .then(data => {
        document.getElementById("youtube").innerHTML = "Der YouTube Kanal von Damn heißt <strong>" + data.channel.title + "</strong> <a id='link' href='youtube.html'>Mehr Infos über Damns YouTube Kanal</a>"
    })

const optionsIG = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com',
        'X-RapidAPI-Key': '40e11f4107msh0e53b58956ea300p1a0387jsn3edb477d2f16'
    }
};
    
fetch('https://instagram-scraper-2022.p.rapidapi.com/ig/info/?id_user=40640989528', optionsIG)
    .then(response => response.json())
    .then(data => document.getElementById("insta").innerHTML="Damns Insta Account heißt <strong>" + data.user.username + "</strong> <a id='link' href='instagram.html'>Mehr...</a>")
    .catch(err => console.error(err));
    
const optionsTT = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'tiktok28.p.rapidapi.com',
        'X-RapidAPI-Key': '40e11f4107msh0e53b58956ea300p1a0387jsn3edb477d2f16'
    }
};
    
fetch('https://tiktok28.p.rapidapi.com/profile/damnchaotix?schemaType=1', optionsTT)
    .then(response => response.json())
    .then(data => {
        document.getElementById("tiktok").innerHTML = "Damns TikTok Kanal hat <strong>" + data.stats.followerCount + " Follower</strong> <a id='link' href='tiktok.html'>Mehr TikTok Infos</a>"
    })
    

