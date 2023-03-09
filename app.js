window.addEventListener("load", solve);

function solve() {
  let publishButton = document.getElementById("form-btn");
  publishButton.addEventListener("click", initiateFunc);
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let storyTitle = document.getElementById("story-title");
  let genre = document.getElementById("genre");
  let story = document.getElementById("story");

  function initiateFunc(event) {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let storyTitleValue = storyTitle.value;
    let genreValue = genre.value;
    let storyValue = story.value;
    if(!firstNameValue||!lastNameValue||!ageValue||!storyTitleValue||!genreValue||!storyValue) {
      return
    }
    publishFunc(firstNameValue, lastNameValue, ageValue, storyTitleValue, genreValue, storyValue) 
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    genre.value = "";
    story.value = "";
  }

  function publishFunc(firstNameValue, lastNameValue, ageValue, storyTitleValue, genreValue, storyValue) {
    //debugger
    let li = document.createElement("li");
    li.classList.add("story-info");
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let saveButton = document.createElement("button");
    saveButton.classList.add("save-btn");
    saveButton.textContent = "Save Story";
    saveButton.addEventListener("click", saveFunc);
    let editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit Story";
    editButton.addEventListener("click", editFunc);
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete Story";
    deleteButton.addEventListener("click", deleteFunc);
    document.getElementById("preview-list").appendChild(li);
    li.appendChild(article);
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    li.appendChild(saveButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    h4.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
    p1.textContent = `Age: ${ageValue}`;
    p2.textContent = `Title: ${storyTitleValue}`;
    p3.textContent = `Genre: ${genreValue}`;
    p4.textContent = `${storyValue}`;
    publishButton.setAttribute("disabled",true)
  }

  function editFunc(event) {
    //debugger
    let fullName = event.target.parentElement.children[0].children[0].textContent.replace("Name: ", "");
    let names = fullName.split(" ");
    firstName.value = names[0];
    lastName.value = names[1];
    age.value = event.target.parentElement.children[0].children[1].textContent.replace("Age: ", "");
    storyTitle.value = event.target.parentElement.children[0].children[2].textContent.replace("Title: ", "");
    genre.value = event.target.parentElement.children[0].children[3].textContent.replace("Genre: ","");
    story.value = event.target.parentElement.children[0].children[4].textContent;
    event.target.parentElement.remove();
    publishButton.disabled = false;
  }

  function saveFunc(event) {
    // debugger
    let h1 = document.createElement("h1");
    h1.textContent = "Your scary story is saved!";
    let divMain = event.target.parentElement.parentElement.parentElement.parentElement;
    event.target.parentElement.parentElement.parentElement.parentElement.children[0].remove();
    // event.target.parentElement.parentElement.parentElement.parentElement.children[1].remove();
    divMain.appendChild(h1);
  }

  function deleteFunc(event) {
    // debugger
    let list = event.target.parentElement;
    list.remove();
    publishButton.disabled = false;
  }
}
