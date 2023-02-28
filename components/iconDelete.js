const iconDelete = () => {
    const i =document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");

    i.addEventListener("click", taskDelte);

    return i;
}

const taskDelte = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
}

export default iconDelete;