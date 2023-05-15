const input=document.getElementById('input')
const form= document.querySelector('form')
const ul =document.querySelector('#List')
function List(input){
    const workList=document.createElement('li')
    workList.className="list-group-item"
    workList.innerHTML=`<div d-flex justify-content-spacebetween>
  <div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
  </div>
  <h4>${input}</h4>
</div> 
<div>
<button type="submit">Edit</button>
<button class='delete-btn' type="submit">Delete</button>

</div>
</div>
  `
    ul.append(workList)
 const deleteButton = workList.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
      workList.remove();
    });
}


form.addEventListener('submit',(event) => {
    event.preventDefault()
    List(input.value);

})