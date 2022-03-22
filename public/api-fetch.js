const Contentdisplay = document.querySelector("#Content")
var count = 1;

function showList(){
    const range = document.getElementById("Range").value
    if(/^[0-9]+\-[0-9]+$/.test(range)){
        const lower = range.split("-")[0]
        const higher = range.split("-")[1]
        if(lower > higher){
            if(lower < 10){
                fetch("http://localhost:1234/charactergen/" + higher + "-" + lower)
                .then(response => response.json())
                .then(data => {
                    if(count > 1){
                        Contentdisplay.innerHTML = "";
                        count = 1;
                    }
                    data.forEach(person => {
                        const name = "<h2>" + person.name + "</h2>"
                        Contentdisplay.insertAdjacentHTML("beforeend", name)
                        count++
                    })
                })
                .catch(err => console.log(err))
            }else{
                alert("Range cannot go above 9!")
            }
        }else{
            if(higher < 10){
            fetch("http://localhost:1234/charactergen/" + lower + "-" + higher)
                .then(response => response.json())
                .then(data => {
                    if(count > 1){
                        Contentdisplay.innerHTML = "";
                        count = 1;
                    }
                    data.forEach(person => {
                        const name = "<h2>" + count + ". " + person.name + ", " + person.last_name + "</h2>"
                        const address = "<h3>" + person.address + ", " + person.country + "</h3>"
                        Contentdisplay.insertAdjacentHTML("beforeend", name)
                        Contentdisplay.insertAdjacentHTML("beforeend", address)
                        count++
                    })
                })
                .catch(err => console.log(err))
        }else{
            alert("Range cannot go above 9!")
        }
    }
    }else{
        fetch("http://localhost:1234/charactergen")
            .then(response => response.json())
            .then(data => {
                if(count > 1){
                    Contentdisplay.innerHTML = "";
                    count = 1
                }
                data.forEach(person => {
                    const name = `<h2>` + count + `. ` + person.name + `, ` + person.lastname + `</h2>`
                    const address = `<h3>` + person.address + `, ` + person.country + `</h3>`
                    Contentdisplay.insertAdjacentHTML("beforeend", name)
                    Contentdisplay.insertAdjacentHTML("beforeend", address)
                    count++
                })
            })
            .catch(err => console.log(err)) 
    }
    
}
