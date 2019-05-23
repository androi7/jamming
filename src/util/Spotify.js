const client_id = '7955f14ccbde43e296449c75b89f4022';
const redirect_uri = 'http://localhost:3000/';
const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=playlist-modify-public&redirect_uri=${redirect_uri}&response_type=token`;
let accessToken = '';
let expired = '';

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenUrl = window.location.href.match(/access_token=([^&]*)/);
        const expiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenUrl && expiresIn) {
            accessToken = accessTokenUrl.toString().split("=")[1];
            expired = expiresIn[1];
            console.log("Test: "+window.location.href);
            window.setTimeout(() => accessToken = '', expired * 1000);
            window.history.pushState('Access Token', null, '/');
            console.log("Access Token: " + accessToken);
            console.log("Expired: " + expired + "expiresIn: "+expiresIn);
        } else {
            window.location = spotifyUrl;
        }

    },

    search(term) {
        console.log('Search Bearer: '+accessToken);
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {Authorization: `Bearer ${accessToken}`}
        }).then((response) => { return response.json()})
            .then((resJson) => {
                return resJson.tracks.items.map((track) => {
                    return {
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    }
                });
            });
    }
};

module.exports = { Spotify };