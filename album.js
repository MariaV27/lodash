request("http://jsonplaceholder.typicode.com/albums")
    .then(function(response){
        var albums = JSON.parse(response);
        var result = {};

        _.each(albums, function(album){
            if(result[album.userId]){
                result[album.userId].push(album);
            } else {
                result[album.userId] = [album];
            }
        })

        // loop over array of objects
            // check user_id and create new key if unique
                // add album object to new hash
        console.log(result[7]);
    });