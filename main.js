// event handeler for the need button
let cartList = {
  item: null,
  domEl: {},
};

function addNeedIterm() {
  let need_iterm = document.querySelector(".iterms").value;
  if(cartList.item) {
    cartList.domEl.innerHTML = need_iterm;
    cartList = {
      item: null,
      domEl: {},
    };
    document.querySelector(".iterms").value = ''
    return;
  }

  if (need_iterm !== "") {
    // creating an li tag and giving a class name
    let li = document.createElement("li");
    li.className = "list-of-needs";
    document.querySelector(".need_ul").appendChild(li);

    // creating a p tag that will contain the text
    let need = document.createElement("p");

    need.innerHTML = need_iterm;

    need.addEventListener("click", () => {
      document.querySelector(".iterms").value = need.innerHTML;
      cartList.item = need.innerHTML;
      cartList.domEl = need;
    });

    need.className = "ptag";
    li.appendChild(need);

    // creating a div that will contain the two buttons

    // creating a check button
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.className = "checkbtn";
    li.appendChild(checkBtn);

    //creating a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.className = "deletebtn";
    li.appendChild(deleteBtn);

    // function to delete iterm
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });

    document.querySelector(".iterms").value = ''
  }
}

// Event handeler for the have button
function addHaveIterm() {
  let have_iterm = document.querySelector(".iterms").value;

  // we test if there is a text in the cartList object if yes the next line send it to the input field and clear the input field after
  if(cartList.item) {
    cartList.domEl.innerHTML = have_iterm;
    cartList = {
      item: null,
      domEl: {},
    };
    document.querySelector(".iterms").value = ''
    return;
  }

  if (have_iterm !== '') {
    // creating an li tag
    let li = document.createElement("li");
    li.className = "list-of-needs";
    document.querySelector(".have_ul").appendChild(li);

    // creating a p tag that will contain the text
    let have = document.createElement("p");
    have.innerHTML = have_iterm;

    have.addEventListener('click', () => {
      document.querySelector(".iterms").value = have.innerHTML;
      cartList.item = have.innerHTML;
      cartList.domEl = have;
    });

    have.className = "ptag";
    li.appendChild(have);

    // creating a div that will contain the two buttons
    const actionbtn = document.createElement("div");
    actionbtn.className = "divbtn";
    li.appendChild(actionbtn);

    // creating a check button
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.className = "checkbtn";
    actionbtn.appendChild(checkBtn);

    // creating a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.className = "deletebtn";
    actionbtn.appendChild(deleteBtn);

    have_iterm = "";

    // delete iterm function
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });

    // check iterms function
    // checkBtn.addEventListener('click', function () {
    //   let itermContainer = document.querySelector('need_ul')
    //   itermContainer[0] = li.style.textDecoration = "line-through"
    // })

    // edit function
    // creating an empty object
    document.querySelector(".iterms").value = ''
    
  }
}
