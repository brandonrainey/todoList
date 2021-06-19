const item = document.querySelectorAll('.item');
const newList = document.querySelector('.newList'); //textbox to enter new todo title (left)
const newBtn = document.querySelector('.newBtn'); //button to add todo title (left)
const listTitle = document.querySelector('#listTitle'); //right side todo title
const newTodo = document.querySelector('.newTodo'); //new todo item textbox
const todoBtn = document.querySelector('.todoBtn');
let listArr = [];
var my_obj;


newBtn.addEventListener('click', () => {
   let newDiv = document.createElement('div');
   newDiv.textContent = `${newList.value}`;
   newDiv.classList = 'newItem';

   newDiv.addEventListener('click', () => {
        listTitle.textContent = newDiv.textContent;

        var br = document.createElement("br");
        document.querySelector('#listTitle').appendChild(br);

        const found = listArr.some(el => el.objTitle === newDiv.textContent);
        if (!found) listArr.push(Lists(newDiv.textContent));
            
//
    for (let obj_in_arrr of listArr) {
    if (obj_in_arrr.objTitle === listTitle.textContent) {
        my_obj = obj_in_arrr;
        break;
        }
    }
    for (let i = 0; i < my_obj['todos'].length; i++) {
        let newCheckbox = document.createElement('input');
        let label = document.createElement('label');
            label.textContent = my_obj.todos[i];
            
            newCheckbox.id = 'boxx';
            newCheckbox.type = 'checkbox';
            label.htmlFor = 'boxx';

            var br = document.createElement("br");
            
            


            document.querySelector('#listTitle').appendChild(newCheckbox);
            document.querySelector('#listTitle').appendChild(label);
            document.querySelector('#listTitle').appendChild(br);
 }
       
//





        })
        document.querySelector('.items').appendChild(newDiv);

   });
   


todoBtn.addEventListener('click', () => {
    let todoDiv = document.createElement('div');
    document.querySelector('#listTitle').appendChild(todoDiv);
    
    
    for (let obj_in_arr of listArr) {
        if (obj_in_arr.objTitle === listTitle.textContent) {
            my_obj = obj_in_arr;
            break;
        }
    }

    my_obj['todos'].push(newTodo.value);

    todoDiv.textContent = newTodo.value;

    
})



const Lists = (title) => {

    let objTitle = title;
    let todos = [];
    
    
    return {objTitle, todos}
};

