let num = 0;
const delBtn = document.querySelector("#delete");
delBtn.addEventListener("click", popup);
const confirmMsg = document.querySelector("#confirmText");
const confirmBox = document.querySelector("#confirm");
const cancel = document.querySelector("#no");
cancel.addEventListener("click", function () {
   confirmBox.classList.add("hide");
});

async function getBoards() {
   const res = await axios.get(
      `https://api.trello.com/1/members/me/boards?fields=name,id,starred&key=${myKey}&token=${myToken}`
   );
   const list = document.querySelector("#boardList");
   for (const board of res.data) {
      // console.log(board);
      list.innerHTML += `<li 
            class=${board.starred ? "star" : "noStar"}
            id=${board.id}
          >
            ${board.name}
         ${board.starred ? " ⭐" : ""}
        <span>ID: ${board.id}</span></li>`;
   }
   //  Once the list has finished rendering, add the event listeners
   listen();
}
getBoards();

function listen() {
   // Select all the list elements with the class of nostar
   const listElements = document.querySelectorAll("li.noStar");
   //  Loop over the nodelist and add an event listener to all that toggles the selected class
   for (const li of listElements) {
      li.addEventListener("click", function () {
         this.classList.toggle("selected");
         countSelected();
         // Update button text to display number selected
         delBtn.textContent = `Delete ${num} Selected`;
      });
   }
}

// Count how many boards are selected
function countSelected() {
   const selected = document.querySelectorAll("li.selected");
   num = selected.length;
}

// Display the confirmation box
function popup() {
   confirmMsg.textContent = `Are you sure you want to delete these ${num} Trello boards?`;
   confirmBox.classList.remove("hide");
}
cancel.addEventListener("click", function () {
   confirmBox.classList.add("hide");
});

// TO DO
// when the delete button is clicked create an array with the IDs of the selected boards

// Add an safety message = eg are you sure you want to delete <num> boards?

// loop through the checked items and delete them

// add the IDs to an array first and then loop over the array?

// To delete a board
// `https://api.trello.com/1/boards/${boardId}?key=${myKey}&token=${myToken}`
