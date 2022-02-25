let todos = []

const createTask = (e) => {
    e.preventDefault()
    let message = document.getElementById('text')
    let task = document.getElementById('text2')

    // console.log(message.value)

    if (message.value.length >= 3) {
        let todo = {
            id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
            message: message.value,
            task: task.value,
            status: false,
            date: new Date()

        }
        todos.push(todo)
        console.log(todos)
        message.value = ''
        task.value = ''

        renderTodos()
    } else {
        alert('Minimum length is 3 symbols')
    }




}



const renderTodos = () => {
    const output = document.getElementById('output')
    output.innerHTML = ''

    todos.map(todo => {
        // console.log(todo)
        let block = document.createElement('div')
        block.style.background = todo.status === true ? 'green' : 'coral'

        let mess = document.createElement('h2')
        let task = document.createElement('p')
        let date = document.createElement('p')

        let donePhrase = document.createElement('p')

        let del = document.createElement('button')
        let edit = document.createElement('button')
        let changeTask = document.createElement('button')
        let done = document.createElement('button')

        done.style.display = todo.status ? 'none' : 'inline'

        todo.status === true ? donePhrase.textContent = 'The task todo was complate!' : null

        // if (todo.status === true) {donePhrase.textContent = `The task todo was complate!`} 
        // else {donePhrase.textContent = null
        // }

        mess.textContent = `Name: ${todo.message}`
        task.textContent = `Task: ${todo.task}`

        let current_date = todo.date
        date.textContent = `
        Todo was created ${current_date.getDate()} -
        ${current_date.getMonth()+1}  
        - ${current_date.getFullYear()} 
        ${current_date.getHours()} : ${current_date.getMinutes()} : ${current_date.getSeconds()}
      `



        del.textContent = 'Delete'
        edit.textContent = 'Edit'
        changeTask.textContent = 'Change task'
        done.textContent = 'Done'



        done.addEventListener('click', () => {
            doneTodo(todo.id)
            console.log(todo.id)
        })

        del.addEventListener('click', () => {
            // deleteTodo(todo.id)
            if (todo.status === true) {
                deleteTodo(todo.id)
            } else {
                alert('Todo is not done!')

            }

        })

        edit.addEventListener('click', () => {
            editTodo(todo.id)
        })

        changeTask.addEventListener('click', () => {
            changeTodo(todo.id)
        })




        block.append(mess, task, date, donePhrase, del, edit, changeTask, done)
        output.append(block)


    })
}

const doneTodo = (id) => {
    todos.map(el => {
        // console.log(el)
        if (id == el.id) {
            el.status = true
            renderTodos()
        }
    })
}


const deleteTodo = (id) => {
    todos = todos.filter(el => el.id != id)
    renderTodos()
}

const editTodo = (id) => {
    todos.map(el => {
        if (id = el.id) {
            let newMassage = prompt('Edit Todo')
            if (newMassage == null || newMassage == '' || newMassage.trim() == '') {
                el.message
            } else if (newMassage.length <= 3) {
                alert('Minimum length is 3 symbols')

            } else {


                el.message = newMassage
                renderTodos()
            }
        }
    })
}

const changeTodo = (id) => {
    todos.map(el => {
        if (id = el.id) {
            let newTask = prompt('Task Todo')
            if (newTask == null || newTask == '' || newTask.trim() == '') {
                el.task
            } else if (newTask.length <= 3) {
                alert('Minimum length is 3 symbols')

            } else {


                el.task = newTask
                renderTodos()
            }
        }
    })
}






// ===new Date===
// console.log(new Date())
// console.log(new Date().getDate())
// console.log(new Date().getMonth()+1)
// console.log(new Date().getFullYear())
// console.log(new Date().getHours())
// console.log(new Date().getMinutes())
// console.log(new Date().getSeconds())