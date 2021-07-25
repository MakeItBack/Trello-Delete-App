async function getBoards(){
    const res = await axios.get(`https://api.trello.com/1/members/me/boards?fields=name,id,starred&key=${myKey}&token=${myToken}`);
    const main = document.querySelector('#boardList');
  for (const board of res.data){
      console.log(board)
      main.innerHTML += 
        `<li>${board.starred ? `<input type="checkbox" disabled>` : `<input type="checkbox">`}
        ${board.name}
        ${board.starred ? " ⭐" : ""}
        <span>ID: ${board.id}</span></li>`
  }
}
getBoards();

// TO DO
// when the delete button is clicked, loop through the checked items and delete them
// add the IDs to an array first and then loop over the array?
// Add an safety message = eg are you sure you want to delete 12 boards?




// To delete a board
// `https://api.trello.com/1/boards/${boardId}?key=${myKey}&token=${myToken}`
