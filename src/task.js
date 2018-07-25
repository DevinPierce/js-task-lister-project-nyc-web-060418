class Task {
  constructor(listName, description, priority) {
    this.description = description
    this.priority = priority
    List.findListByName(listName).tasks.push(this)
  }


}
