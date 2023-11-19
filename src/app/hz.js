fetch('https://api.github.com/repos/CursedNet/TaskBoard/issues')
    .then(r => r.json())
    .then(function (results) {
        console.log(results.length)

        for (let i = 0; i < results.length; i++){
            console.log (results[i].title)
            console.log (results[i].created_at)
            console.log (results[i].body)
        }
    })