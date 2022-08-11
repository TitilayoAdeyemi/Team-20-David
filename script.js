var form = document.getElementById('addForm');
var list = document.getElementById('list_id');

// form submit event
form.addEventListener('submit', addItem);
//Delete event
list.addEventListener('click', removeItem);
//filter event
var filter = document.getElementById("filter")
filter.addEventListener('keyup', filterItems)

//function to add item
function addItem(e){
    e.preventDefault();
    // Get input value
    var newItem = document.getElementById("input_bar").value;

    //create new li element
    var li = document.createElement('li')
    //Add a class
    li.className="list_item"
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //append li to list
    list.appendChild(li)
    // Create delete button element
    var deleteBtn = document.createElement("button")
    //Add class to delete button
    deleteBtn.className = "delete_button";
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    alert(`${newItem} has joined Team 20-David!`)
}

//Remove an item
function removeItem(e){
    if (e.target.classList.contains('delete_button')){
        if (confirm("Are you sure you want to delete?")){
            var li = e.target.parentElement;
            list.removeChild(li)
        }
    }
}

//Filter Items
function filterItems(e){
    //convert text to lower case
    var text = e.target.value.toLowerCase();
    //Get list
    var items = list.getElementsByTagName('li');
    //convert to an Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
       // console.log(itemName)
        if (itemName.toLowerCase().indexOf(text) != -1){
           item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })

}