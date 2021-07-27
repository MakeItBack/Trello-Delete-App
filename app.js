let num = 0;
const delBtn = document.querySelector("#delete");
delBtn.addEventListener("click", popup);
const confirmMsg = document.querySelector("#confirmText");
const confirmBox = document.querySelector("#confirm");
const cancel = document.querySelector("#no");
cancel.addEventListener("click", function () {
   confirmBox.classList.add("hide");
});
const confirmDelBtn = document.querySelector("#yes");
confirmDelBtn.addEventListener("click", yesDelete);
const headerText = document.querySelector("#headerText");

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

async function yesDelete() {
   // select all the li elements that are selected and save them to an array (use spread syntax on nodelist) and map to just pull outthe IDs
   const delIDArr = [...document.querySelectorAll("li.selected")].map(
      (li) => li.id
   );
   //  hide popup again and temporarily update text in header
   confirmBox.classList.add("hide");
   headerText.textContent = "Deleting! Page will reload when complete";
   headerText.style.color = "green";
   //  Console message
   console.log(`DELETING THESE ${num} boards:`, delIDArr);
   //  Loop through array and delete one by one
   for (const boardID of delIDArr) {
      try {
         console.log("Deleting: ", boardID);
         const res = await axios.delete(
            `https://api.trello.com/1/boards/${boardID}?key=${myKey}&token=${myToken}`
         );
         console.log("SUCCESS! Status code: ", res.status);
      } catch (err) {
         console.log(err);
      }
   }
   // Reload page when complete
   location.reload();
}
