"use strict"

document.addEventListener("DOMContentLoaded", () => {
    
    const addItemQuantity = document.querySelector("#add-item-quantity")
    const addItemUnit = document.querySelector("#add-item-unit")
    const addItemName = document.querySelector("#add-item-name")
    
    const addItemDropdown = document.querySelector("#unit-dropdown")
    let dropdownHeight = addItemDropdown.clientHeight
    addItemDropdown.style.maxHeight = "0"
    addItemUnit.addEventListener("focus", () => {
        addItemDropdown.style.maxHeight = dropdownHeight + "px"
    })
    addItemUnit.addEventListener("blur", () => {
        addItemDropdown.style.maxHeight = "0"
    })

    const dropdownUnitButtons = document.querySelectorAll(".dropdown__unit")
    for (const dropdownUnitButton of dropdownUnitButtons) {
        dropdownUnitButton.addEventListener("click", () => {
            const dropdownUnit = dropdownUnitButton.innerText
            addItemUnit.value = dropdownUnit
            addItemDropdown.style.maxHeight = "0"
        })
    }
    
    const itemList = document.querySelector("#item-list")

    const submitItem = document.querySelector("#submit-item")
    submitItem.addEventListener("click", () => {
        event.preventDefault()

        if (addItemQuantity.value.trim() !== "" && addItemUnit.value.trim() !== "" && addItemName.value.trim() !== "") {
            const newItem = document.createElement("li")
            newItem.classList.add("item-list__item")
        
            const newItemQuantity = document.createElement("div")
            newItemQuantity.classList.add("item-list__property", "item-list__property--quantity")
            newItemQuantity.appendChild(document.createTextNode(addItemQuantity.value.trim()))
            addItemQuantity.value = ""
            
            const newItemUnit = document.createElement("div")
            newItemUnit.classList.add("item-list__property", "item-list__property--unit")
            newItemUnit.appendChild(document.createTextNode(addItemUnit.value.trim()))
            addItemUnit.value = ""
    
            const newItemName = document.createElement("div")
            newItemName.classList.add("item-list__property", "item-list__property--name")
            newItemName.appendChild(document.createTextNode(addItemName.value.trim()))
            addItemName.value = ""
        
            const removeItemButton = document.createElement("button")
            removeItemButton.classList.add("item-list__remove-item")
            removeItemButton.addEventListener("click", () => {
                removeItemButton.parentElement.remove()
            })
    
            newItem.appendChild(newItemQuantity)
            newItem.appendChild(newItemUnit)
            newItem.appendChild(newItemName)
            newItem.appendChild(removeItemButton)
    
            itemList.appendChild(newItem)
        }
    })

    const deleteListItemButtons = document.querySelectorAll(".item-list__remove-item")
    for (const deleteListItemButton of deleteListItemButtons) {
        deleteListItemButton.addEventListener("click", () => {
            deleteListItemButton.parentElement.remove()
        })
    }

})