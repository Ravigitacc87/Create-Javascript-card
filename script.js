parentObj = document.getElementById("parent")
nameObj = document.getElementById("name")
leadObj = document.getElementById("lead")
boxObj = document.getElementById("box")
addObj = document.getElementById("add")
editObj = document.getElementById("edit")

updateObj = null


imdb = [
    {
        name: "Avengers",
        lead: "Tony Stark,Capitan America",
        box: "100M",
    },
    {
        name: "Spiderman",
        lead: "Peter Parker",
        box: "80M",
    },
    {
        name: "Black Widow",
        lead: "Natasha romanoff",
        box: "70M",
    }
]
render()
function render() {
    parentObj.innerHTML = '';
    for (i = 0; i < imdb.length; i++) {
        parentObj.innerHTML += `<div class=card >
        <div class=name>${imdb[i].name}</div>
        <div class=lead>${imdb[i].lead}</div>
        <div class=box>${imdb[i].box}</div>
        <div class=change>
        <button onclick='editmovie(${i})'>Edit</button>
        <button onclick='delmovie(${i})'>Delete</button>
        </div>
        </div>
        `
    }
}
function addmovie() {
    tempmovie = { name: nameObj.value, lead: leadObj.value, box: boxObj.value }
    imdb.push(tempmovie)
    render()
    clear()
}
function clear() {
    nameObj.value = ''
    leadObj.value = ''
    boxObj.value = ''
}
function delmovie(ind) {
    option = confirm(`remove ${imdb[ind].name}`)
    if (option) {
        imdb.splice(ind, 1)
        render()
    }
}
function editmovie(ind) {
    nameObj.value = imdb[ind].name
    leadObj.value = imdb[ind].lead
    boxObj.value = imdb[ind].box

    updateObj = ind

    addObj.style.display = "none"
    editObj.style.display = "block"

}
function cancle() {
    addObj.style.display = "block"
    editObj.style.display = "none"
    clear()
}
function update() {
    tempmovie = { name: nameObj.value, lead: leadObj.value, box: boxObj.value }
    imdb[updateObj] = tempmovie
    addObj.style.display = "block"
    editObj.style.display = "none"
    render()
    clear()
}
