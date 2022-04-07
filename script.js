const computerPlay = () => {
    const actions = ['rock', 'paper', 'scissors'];

    const random = Math.floor(Math.random() * 3);

    return actions[random];
};
