const nam = document.getElementById("name");
const tagsContainer  = document.querySelector(".tags")

const addName = ()=>{
    if(nam.value === ""){
        return null;
    }
    const div = document.createElement("div");

    div.setAttribute("class" ,"tag");
    div.innerText = nam.value;

    tagsContainer.prepend(div);
}