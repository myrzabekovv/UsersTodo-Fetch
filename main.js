

// // https://jsonplaceholder.typicode.com/users/

// const ul = document.querySelector('ul')

// const renderList = () => {
//   const render = document.createElement('div')
//   render.className = 'container-list'
//   render.textContent = 'Загрузка'
//   container-list.append(render)
// }

// const renderUsers = (lists) => {
//   lists.forEach((list) => {
//     const li = document.createElement('li')
//     li.textContent = list.title
//     ul.append(li)
//   })
// }

// const user1 = document.querySelector('.user1')
// const user2 = document.querySelector('.user2')
// const user3 = document.querySelector('.user3')
// const user4 = document.querySelector('.user4')
// const user5 = document.querySelector('.user5')
// const user6 = document.querySelector('.user6')

// user1.addEventListener('click', () => {

//   const getUser1 = () => {
//   fetch('https://jsonplaceholder.typicode.com/users/1/todos')
//   .then((response) => {
//     if (!response.ok) throw new Error('Oops!')
//     return response.json()
//   })
//   .then((lists) => {
//     renderUsers(lists)
//   })
//   .catch(() => {
//     renderError()
//   })
//   .finally(() => {

//   })
//   }
//   getUser1()
// })

// user2.addEventListener('click', () => {

//   const getUser2 = () => {
//   fetch('https://jsonplaceholder.typicode.com/users/2/todos')
//   .then((response) => {
//     if (!response.ok) throw new Error('Oops!')
//     return response.json()
//   })
//   .then((lists) => {
//     renderUsers(lists)
//   })
//   .catch(() => {
//     renderError()
//   })
//   .finally(() => {
    
//   })
//   }
//   getUser2()
// })

// user3.addEventListener('click', () => {

//   const getUser3 = () => {
//   fetch('https://jsonplaceholder.typicode.com/users/3/todos')
//   .then((response) => {
//     if (!response.ok) throw new Error('Oops!')
//     return response.json()
//   })
//   .then((lists) => {
//     renderUsers(lists)
//   })
//   .catch(() => {
//     renderError()
//   })
//   .finally(() => {
    
//   })
//   }
//   getUser3()
// })

const userList = document.querySelector('#users')
const todosList = document.querySelector('#todos')
const listUser = document.querySelector('.link-user')
const containerList = document.querySelector('.container-list')


const loader = document.createElement('span')
loader.textContent = 'Загрузка...'
containerList.append(loader)


const renderError = () => {
  const error = document.createElement('span')
  error.textContent = 'Произошла ошибка'
  error.style.color = 'red'
  containerList.append(error)
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      const li = document.createElement('li')
      li.classList.add('user-item')
      const button = document.createElement('button')
      button.textContent = user.username
      console.log(user.id)
      
      button.addEventListener('click', () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
          .then(response => response.json())
          .then(todos => {
            todosList.innerHTML = ''
            todos.forEach(todo => {
              const li = document.createElement('li')
              li.classList.add('todo-item')
              li.textContent = todo.title
              if (todo.completed) {
                li.classList.add('completed')
              }
              todosList.appendChild(li)
            })
          })
          .catch(() => {
            renderError()
          })
          .finally(() => {
            loader.remove()
          })
          listUser.textContent = `список ${user.username}`
      })
      li.append(button)
      userList.append(li)
    })
  })