const newListTitle = document.getElementById('new-list-title');
const listSubmit = document.getElementById('create-list-form').querySelector('input[type="submit"]')
const appContent = document.getElementById('app-content');


let taskSubmit = ()=> document.getElementById('create-task-form').querySelector('input[type="submit"]')

let createNewTask = (event) => {
  event.preventDefault();
  let selectList = document.getElementById('parent-list');
  let description = document.getElementById('new-task-description');
  let priority = document.getElementById('new-task-priority');
  let newTask = new Task(selectList.value, description.value, priority.value);

  //render again
  let app = new TaskLister()
  appContent.innerHTML = app.render();

  taskSubmit().addEventListener('click', createNewTask);
}

listSubmit.addEventListener('click', function(event){
  event.preventDefault();
  let newList = new List(newListTitle.value)
  let app = new TaskLister(newList)
  appContent.innerHTML = app.render();

  taskSubmit().addEventListener('click', createNewTask);
  newListTitle.value = ''
})

appContent.addEventListener('click', function (event) {
  if (event.target.className === 'delete-list'){
    let list = List.findListByName(event.target.dataset.title)
    allList = allList.filter( (l) => {return l.title !== list.title})

    //render again
    let app = new TaskLister()
    appContent.innerHTML = app.render();

    taskSubmit().addEventListener('click', createNewTask);
  } else if (event.target.className === 'delete-task'){
    // let list = List.findListByName(event.target.dataset.title)
    let list = List.findListByName(event.target.dataset.listTitle)
    let taskName = event.target.dataset.taskName
    list.tasks = list.tasks.filter( (t) => {return t.description !== taskName})


    //render again
    let app = new TaskLister()
    appContent.innerHTML = app.render();

    taskSubmit().addEventListener('click', createNewTask);
  }
})
