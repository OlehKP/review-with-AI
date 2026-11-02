let ListItems = []
let shoppingList = document.querySelector("#shopping-list")
let newItem

function addItem() {
    shoppingList.innerHTML = ""
    newItem = document.querySelector("#newItem")
    if (newItem.value) {
        ListItems.push(newItem.value)
    } else {
        alert("Das Textfeld darf nicht leer sein")
    }

    for (let item of ListItems) {
        shoppingList.innerHTML += `<li class="notDone" onclick="this.classList.toggle('notDone') ; updateCounts()">${item}</li>`;
        newItem.value = ""
    }
    updateCounts()
}

const deleted = document.querySelector(".result");
let deletedItem;
function deleteItem() {
    ListItems.pop()

    shoppingList.innerHTML = ""
    for (let item of ListItems) {
        shoppingList.innerHTML += `<li class="notDone" onclick="this.classList.toggle('notDone'); updateCounts()">${item}</li>`;
    }
    updateCounts()
}

function deleteList() {
    ListItems.splice(0, ListItems.length)
    shoppingList.innerHTML = ""
    updateCounts()
}

function updateCounts() {
    let items = shoppingList.querySelectorAll("li");
    let boughtCount = 0;
    let openCount = 0;

    for (let item of items) {
        if (item.classList.contains("notDone")) {
            openCount++;
        } else {
            boughtCount++;
        }
    }

    document.querySelector("#boughtCount").textContent = boughtCount;
    document.querySelector("#openCount").textContent = openCount;
}

