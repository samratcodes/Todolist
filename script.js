const input = document.getElementById("input");
const form = document.querySelector("form");
const ul = document.querySelector("#List");
function List(input) {
  const workList = document.createElement("li");
  workList.className = "list-group-item";
  workList.innerHTML = `<div d-flex justify-content-spacebetween>
  <div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
  </div>
  <input class="list-item-context" value=${input} readonly style="border:none; outline:none; margin-left:16px;"/>
</div> 
<div>
<button type="submit" class="edit-btn">Edit</button>
<button class='delete-btn' type="submit">Delete</button>

</div>
</div>
  `;
  ul.append(workList);
  const deleteButton = workList.querySelector(".delete-btn");
  const editButton = workList.querySelector(".edit-btn");
  const checkButton = workList.querySelector(".form-check-input");

  //detete btn action
  deleteButton.addEventListener("click", () => {
    workList.remove();
  });

  //edit btn action
  editButton.addEventListener("click", () => {
    workList.querySelector(".list-item-context").toggleAttribute("readonly");
    workList.querySelector(".list-item-context").focus();
  });

  //check btn action
  checkButton.addEventListener("click", () => {
    const listItem = workList.querySelector(".list-item-context");

    if (listItem.style.textDecoration === "") {
      listItem.style.textDecoration = "line-through";
    } else {
      listItem.style.textDecoration = "";
    }
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //check case for empty empty input field
  if (input.value === "") {
    return;
  } else {
    List(input.value);
    // clearing input field after submit button click
    input.value = "";
  }
});
