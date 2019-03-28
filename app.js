const axios = require('axios');

axios.get("http://api.teamcrcl.com/v2/analytics/users/count?client_id=J8i9eWzp8N6SDBVEMurw6I5bIHgjfQcpUfp2JCD5&&client_secret=DRgUKgGuNsziqycNn8Ow9GnYLklsAaGW840xFvbplZTLsl5arKDXlAVPgN0ZLPSpKqwxSCnDCx83zFM3R5gUtmCi4kdVcRrSXhdNVoNxVIJjthrELIaQqtTTTYBBGdfa")
    .then(response => {
        // stats[index]['body'] = response[item['key']].toString()

        console.log(response.data['Total Users'])

    })
    .catch(error => {
        console.log("Error parsing data", error);
    });
