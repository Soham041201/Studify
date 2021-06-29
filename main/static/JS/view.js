const deleteBtn=document.querySelector(".todolist");
deleteBtn.addEventListener("click",deleteItem);
function deleteItem(event)
{
    if(event.target.classList.contains("delete"))
    {
        const todo = event.target.parentElement;
        todo.remove();
    }
}
