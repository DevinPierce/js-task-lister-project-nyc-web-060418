class TaskLister {
  constructor(listInstance) {
    // this.listInstance = listInstance
  }

  render() {
    return (`
      <form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list">
        ${this.createListDropMenu()}
        </select>
        <label for="new-task-description">Task description:</label>
        <input required="" type="text" id="new-task-description" placeholder="description">
        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task">
      </form>
      <div id="lists">
        ${this.createListDivs.bind(this)()}
      </div>`);
  }

  createListDropMenu() {
    return allList.reduce(function(agg, list){
      return agg += `
      <option value="${list.title}" selected="">
      ${list.title}
      </option>`
    },'')
  }
  createListDivs(){
    return allList.reduce(function(agg, list){
      return agg += `
      <div>
        <h2>${list.title}
          <button data-title="${list.title}" class="delete-list">
            X
          </button>
        </h2>
        <ul>
          ${this.createTaskLists(list)}
        </ul>
      </div>`
    },'')
  }
  createTaskLists(list) {
    // let card = list.querySelector('h2');
    // if (card.querySelector('button').dataset.title == selectList.value){
    if (list.tasks.length > 0){
    return list.tasks.reduce(function(agg, task) {
      return agg += `
      <li>
        Task: ${task.description}
        <button data-list-title="${list.title}" data-task-name="${task.description}" class="delete-task">
          X
        </button>
        <br>
        Priority: ${task.priority}
      </li>`
    }, '')
    } else {
      return ''
    }
    // }
  }
}
