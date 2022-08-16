const form = document.querySelector('#fieldFirst');
const input = document.querySelector('input');
const main = document.querySelector('.main');
const ul = document.querySelector('#fieldList');

  //////////////////
 // 1. create li //
//////////////////
function createLi() {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = input.value;
  const label = document.createElement('label');
  label.textContent = 'confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const editBtn = document.createElement('button');
  editBtn.textContent = 'edit';
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'remove';
  const down = document.createElement('button');
  down.className = 'down';
  const up = document.createElement('button');
  up.className = 'up';

  li.appendChild(span);
  li.appendChild(label);
  label.appendChild(checkbox);
  li.appendChild(editBtn);
  li.appendChild(down);
  li.appendChild(up);
  li.appendChild(removeBtn);

  return li;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const li = createLi();

  if(document.getElementById("addBtn").value.length === 0) {
    alert('Enter The Task Please!!!');
  } else {
    ul.appendChild(li);
    const addInput = document.querySelector('#addBtn');
    addInput.value = '';
  }
}); 

  ////////////////////////////
 // 2. Add responded class //
////////////////////////////
ul.addEventListener('change', (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const li = checkbox.parentNode.parentNode;
  if(checked) {
    li.className = 'responded';
  } else {
    li.className = '';
  }
});

  ///////////////////////
 // 3. Button actions //
///////////////////////
ul.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if(button.textContent === 'remove') {
      ul.removeChild(li);
    } 
    else if(button.textContent === 'edit') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';
    } 
    else if(button.textContent === 'save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'edit';
    }
    else if (button.className === 'down') {
      const nextLi = li.nextElementSibling;
        if (nextLi) {
          ul.insertBefore(nextLi, li);
        }
    } 
    else if (button.className === 'up') {
      const prevLi = li.previousElementSibling;
        if (prevLi) {
          ul.insertBefore(li, prevLi);
        }
    }
  }
});


  ///////////////////////////////////
 // 4. create and append elements //
///////////////////////////////////
const div = document.createElement('div');
div.className = 'showHide';
const filterLabel = document.createElement('label');
filterLabel.textContent = 'Show Unchcked Tasks';
const filterCheckbox = document.createElement('input');
filterCheckbox.type = 'checkbox';

div.appendChild(filterLabel);
filterLabel.appendChild(filterCheckbox);
main.insertBefore(div, ul);

filterCheckbox.addEventListener('change', (event) => {
  const isChecked = event.target.checked;
  const lis = ul.children;

  if(isChecked) {
    for(let i = 0; i < lis.length; i++) {
      var li = lis[i];

      if(li.className === 'responded') {
        li.style.display = 'none';
      } else {
        li.style.display = '';
      }
    }
  } 
    else {
    for(let i = 0; i < lis.length; i++) {
      var li = lis[i];
      li.style.display = '';
    }
  }
});


