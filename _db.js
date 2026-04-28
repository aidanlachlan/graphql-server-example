let games = [
    {id: '1', title: 'The Legend of Zelda: Breath of the Wild', platform: ['Nintendo Switch']},
    {id: '2', title: 'Final Fantasy VII Remake', platform: ['PS5', 'Xbox']},
    {id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC']},
    {id: '4', title: 'Mario Kart', platform: ['Nintendo Switch']},
    {id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC']},
]

let authors = [
    {id: '1', name: 'mario', verified: true},
    {id: '2', name: 'yoshi', verified: false},
    {id: '3', name: 'peach', verified: true},
]

let reviews = [
    {id: '1', rating: 5, content: 'This game is amazing!', author_id: '1', game_id: '2'},
    {id: '2', rating: 4, content: 'This game is pretty good.', author_id: '2', game_id: '1'},
    {id: '3', rating: 3, content: 'This game is okay.', author_id: '3', game_id: '3'},
    {id: '4', rating: 2, content: 'This game is not very good.', author_id: '2', game_id: '4'},
    {id: '5', rating: 1, content: 'This game is terrible.', author_id: '2', game_id: '5'},
    {id: '6', rating: 5, content: 'This game is amazing!', author_id: '1', game_id: '2'},
    {id: '7', rating: 4, content: 'This game is pretty good.', author_id: '3', game_id: '1'},
]

export default { games, authors, reviews }