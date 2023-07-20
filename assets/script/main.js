// event handeler for the need button
let cartList = {
  item: null,
  domEl: {}
}
const haveButton = document.querySelector('.have')
const needButton = document.querySelector('.need')

function addNeedIterm () {
  const needIterm = document.querySelector('.iterms').value
  if (cartList.item) {
    cartList.domEl.innerHTML = needIterm
    cartList = {
      item: null,
      domEl: {}
    }
    document.querySelector('.iterms').value = ''
    return
  }

  if (needIterm !== '') {
    // creating an li tag and giving a class name
    const li = document.createElement('li')
    li.className = 'list-of-needs'
    document.querySelector('.need-ul').appendChild(li)

    // creating a p tag that will contain the text
    const need = document.createElement('p')

    need.innerHTML = needIterm

    need.addEventListener('click', () => {
      document.querySelector('.iterms').value = need.innerHTML
      cartList.item = need.innerHTML
      cartList.domEl = need
    })

    need.className = 'ptag'
    li.appendChild(need)

    // creating a div that will contain the two buttons

    // creating a check button
    const checkBtn = document.createElement('button')
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkBtn.className = 'checkbtn'
    li.appendChild(checkBtn)

    // creating a delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deleteBtn.className = 'deletebtn'
    li.appendChild(deleteBtn)

    // function to delete iterm
    deleteBtn.addEventListener('click', function () {
      li.remove()
    })

    // checked function. changes the color text to green
    checkBtn.addEventListener('click', function () {
      const itermContainer = document.querySelector('need-ul')
      itermContainer[0] = li.style.textDecoration = 'line-through'
    })
    document.querySelector('.iterms').value = ''
  }
}
needButton.addEventListener('click', addNeedIterm)

// Event handeler for the have button
function addHaveIterm () {
  let haveIterm = document.querySelector('.iterms').value

  // we test if there is a text in the cartList object if yes the next line send it to the input field and clear the input field after
  if (cartList.item) {
    cartList.domEl.innerHTML = haveIterm
    cartList = {
      item: null,
      domEl: {}
    }
    document.querySelector('.iterms').value = ''
    return
  }

  if (haveIterm !== '') {
    // creating an li tag
    const li = document.createElement('li')
    li.className = 'list-of-needs'
    document.querySelector('.have-ul').appendChild(li)

    // creating a p tag that will contain the text
    const have = document.createElement('p')
    have.innerHTML = haveIterm

    have.addEventListener('click', () => {
      document.querySelector('.iterms').value = have.innerHTML
      cartList.item = have.innerHTML
      cartList.domEl = have
    })
    have.className = 'ptag'
    li.appendChild(have)

    // creating a div that will contain the two buttons
    const actionbtn = document.createElement('div')
    actionbtn.className = 'divbtn'
    li.appendChild(actionbtn)

    // creating a check button
    const checkBtn = document.createElement('button')
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkBtn.className = 'checkbtn'
    actionbtn.appendChild(checkBtn)

    // creating a delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deleteBtn.className = 'deletebtn'
    actionbtn.appendChild(deleteBtn)

    haveIterm = ''

    // delete iterm function
    deleteBtn.addEventListener('click', function () {
      li.remove()
    })

    checkBtn.addEventListener('click', function () {
      const itermContainer = document.querySelector('need-ul')
      itermContainer[0] = li.style.textDecoration = 'line-through'
    })
    document.querySelector('.iterms').value = ''
  }
}
haveButton.addEventListener('click', addHaveIterm)
