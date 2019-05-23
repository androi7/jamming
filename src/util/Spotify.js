const client_id = '7955f14ccbde43e296449c75b89f4022';
const redirect_uri = 'http://localhost:3000/';
const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=playlist-modify-public&redirect_uri=${redirect_uri}&response_type=token`;
let accessToken = '';
let expired = '';

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else {
            window.location = spotifyUrl;
            const accessTokenUrl = window.location.href.match(/access_token=([^&]*)/);
            const expiresIn = window.location.href.match(/expires_in=([^&]*)/);
            accessToken = accessTokenUrl.toString().split("=")[1];
            expired = expiresIn.toString().split("=")[1];
            console.log("Access Token: " + accessToken);
        }
    },

    search(term) {
        fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {Authorization: `Bearer${accessToken}`}
        }).then((response) => { return response.json()})
            .then((resJson) => {

            });
    }
};

module.exports = { Spotify };