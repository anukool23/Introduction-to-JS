let search = document.getElementById("search")
let submit = document.getElementById("submit")
let result = document.getElementById("result")

submit.addEventListener("click", function(){
    var keyWord  = search.value
    console.log(keyWord)
    findProduct(keyWord)
})

function fetchData(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let dataArr=[
                {product : "cap" , price : 100},
                {product : "shirt" , price : 200},
                {product : "shirt" , price : 300},
                {product : "cap" , price : 400},
                {product : "shirt" , price : 500},
                {product : "shirt" , price : 600},
                {product : "cap" , price : 700},
                {product : "shirt" , price : 800},
                {product : "shirt" , price : 900}
            ];
            resolve(dataArr);
            
        }, 3000);
    })
}

function findProduct(name){
    fetchData()
    .then(function(dataArr){
        let narr = dataArr.filter(function(ele){
            return ele.product === name
        })
        showData(narr)
        console.log(narr)
          
    })
    .catch(function(){
        console.log("404 Not Found")
    })
    .finally(function(){
        console.log("Search successful")
    })
}

function showData(narr){
    result.innerHTML = ""; // Clear previous results
    narr.forEach(function(item){
        let p = document.createElement('p');
        p.textContent = `Product: ${item.product}, Price: ${item.price}`;
        result.appendChild(p);
    });
}