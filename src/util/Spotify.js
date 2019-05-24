const Spotify = (function() {
    const client_id = '7955f14ccbde43e296449c75b89f4022';
    const redirect_uri = 'https://androi7.github.io/jamming/'; //http://localhost:3000/
    const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=playlist-modify-public&redirect_uri=${redirect_uri}&response_type=token`;
    let accessToken = '';
    let expired = '';

    function getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenUrl = window.location.href.match(/access_token=([^&]*)/);
        const expiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenUrl && expiresIn) {
            accessToken = accessTokenUrl.toString().split("=")[1];
            expired = expiresIn[1];
            console.log("Test: "+window.location.href);
            (async () => {
                await new Promise(r => setTimeout(r, expired*1000));
                accessToken = '';
            })();
            //window.setTimeout(() => accessToken = '', expired * 1000);
            window.history.pushState('Access Token', null, '/');
            console.log("Access Token: " + accessToken);
            console.log("Expired: " + expired + "expiresIn: "+expiresIn);
        } else {
            window.location = spotifyUrl;
        }

    }

    async function search(term) {
        console.log('Search Bearer: '+ accessToken);
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                                        headers: {Authorization: `Bearer ${accessToken}`}
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.tracks.items.map((track) => {
                    return {
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
        /*
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
            */
    }

    function savePlaylist(playlist, trackURIs) {
        console.log(trackURIs);
        if (!(playlist && trackURIs)) {
            return;
        }

        const headerAuth = {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        };
        let userId = '';
        let playlistID = '';

        // first variant
        /*
        fetch('https://api.spotify.com/v1/me', {
            headers: headerAuth
        }).then((response) => response.json())
            .then((resJson) => {
                userId = resJson.id;
                console.log("User name: " + resJson['display_name']);
                console.log("User id: " + userId);
                return resJson['display_name'];
            }).then(() => {
            fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'POST',
                headers: headerAuth,
                body: JSON.stringify({name: playlist})
            }).then((response) => response.json())
                .then((resJson) => playlistID = resJson.id)
                .then(() => {
                    fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                        method: 'POST',
                        headers: headerAuth,
                        body: JSON.stringify({uris: trackURIs})
                    }).then((response) => response.json)
                        .then(resJson => resJson['snapshot_id']);
                })
        });
        */

        // second variant
        (async () => {
            try {
                const response1 = await fetch('https://api.spotify.com/v1/me', {
                    headers: headerAuth
                });
                if (response1.ok) {
                    const jsonResponse1 = await response1.json();
                    userId = jsonResponse1.id;
                    console.log('Userid: ' + userId);
                }

                const response2 = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    method: 'POST',
                    headers: headerAuth,
                    body: JSON.stringify({name: playlist})
                });
                if (response2.ok) {
                    const jsonResponse2 = await response2.json();
                    playlistID = jsonResponse2.id;
                    console.log('playlistId: ' + playlistID);
                }

                const response3 = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                    method: 'POST',
                    headers: headerAuth,
                    body: JSON.stringify({uris: trackURIs})
                });
                if (response3.ok) {
                    const jsonResponse3 = await response3.json();
                    return jsonResponse3['snapshot_id'];
                }
            }
            catch (error) {
                console.log(error);
            }
        })();
    }

    return {
        getAccessToken: getAccessToken,
        search: search,
        savePlaylist: savePlaylist
    };

}());

module.exports = {
    Spotify
};