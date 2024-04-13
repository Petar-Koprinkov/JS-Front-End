function solve() {
    let baseUrl = "http://localhost:3030/jsonstore/games";
    
    const loadButton = document.getElementById("load-games");
    const addButton = document.getElementById("add-game");
    const editButton = document.getElementById("edit-game");
    const gameNameInputElement = document.getElementById("g-name");
    const gameTypeInputElement = document.getElementById("type");
    const gamePlayersInputElement = document.getElementById("players");
    const gameListElement = document.getElementById("games-list");

    let gameId = null;
    
    
    loadButton.addEventListener("click", loadGames);
    
    async function loadGames() {
        const response = await fetch(baseUrl);
        const data = await response.json();
        
        gameListElement.innerHTML = "";
        
        for (const game of Object.values(data)) {
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-btn");
            deleteButton.textContent = "Delete";
            
            const changeButton = document.createElement("button");
            changeButton.classList.add("change-btn");
            changeButton.textContent = "Change";
            
            const divButtonsContainer = document.createElement("div");
            divButtonsContainer.classList.add("buttons-container")
            divButtonsContainer.appendChild(changeButton);
            divButtonsContainer.appendChild(deleteButton);
            
            const pNameElement = document.createElement("p");
            pNameElement.textContent = game.name;
            
            const pPlayersElement = document.createElement("p");
            pPlayersElement.textContent = game.players;
            
            const pTypeElement = document.createElement("p");
            pTypeElement.textContent = game.type;
            
            const divContent = document.createElement("div");
            divContent.classList.add("content");
            divContent.appendChild(pNameElement);
            divContent.appendChild(pPlayersElement);
            divContent.appendChild(pTypeElement);
            
            const boardGameElement = document.createElement("div");
            boardGameElement.classList.add("board-game");
            boardGameElement.appendChild(divContent);
            boardGameElement.appendChild(divButtonsContainer);
            
            gameListElement.appendChild(boardGameElement);
            
            changeButton.addEventListener("click", async() => {
                gameNameInputElement.value = game.name;
                gameTypeInputElement.value = game.type;
                gamePlayersInputElement.value = game.players;
                gameId = game._id;

                boardGameElement.remove();

                editButton.removeAttribute("disabled");
                addButton.setAttribute("disabled", "disabled");

            });

            deleteButton.addEventListener("click", async() => {
                await fetch(`${baseUrl}/${game._id}`, {
                    method: 'DELETE',
                });

                boardGameElement.remove();

                await loadGames();
            });
        }
    };
    
    addButton.addEventListener("click", async () => {
        const name = gameNameInputElement.value;
        const type = gameTypeInputElement.value;
        const players = gamePlayersInputElement.value;
        
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                type,
                players,
            })
        })
        
        if (!response.ok) {
            return;
        };
        
        loadGames();
        
        gameNameInputElement.value = "";
        gameTypeInputElement.value = "";
        gamePlayersInputElement.value = "";
    });

    editButton.addEventListener("click", async() => {
        const name = gameNameInputElement.value;
        const type = gameTypeInputElement.value;
        const players = gamePlayersInputElement.value;

        const response = await fetch(`${baseUrl}/${gameId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                type,
                players,
                _id: gameId
            })
        });

        if (!response.ok){
            return;
        };

        gameNameInputElement.value = "";
        gameTypeInputElement.value = "";
        gamePlayersInputElement.value = "";

        await loadGames();

        editButton.setAttribute("disabled", "disabled");
        addButton.removeAttribute("disabled");

        gameId = null;
    });


}





solve();