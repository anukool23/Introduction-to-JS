let data = fetch(`https://reqres.in/api/users`)

data.then(function(res){
    //console.log(res.json())
    return res.json()
})
.then(function(re){
    console.log(re.data)
})