const computerPlay = () => {
    const actions = ['Rock', 'Paper', 'Scissors'];

    const random = Math.floor(Math.random() * 3) + 1;

    return actions[random];
};
