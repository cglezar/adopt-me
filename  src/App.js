const Pet = ({ name, animal, breed }) => {

    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};

const App = () => {

    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: 'Maia',
                animal: 'Dog',
                breed: 'Goldendoodle'
            }),
            React.createElement(Pet, {
                name: 'Chica',
                animal: 'Dog',
                breed: 'Beagle'
            }),
            React.createElement(Pet, {
                name: 'Nana',
                animal: 'Dog',
                breed: 'Cocker Spaniel'
            })
        ]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);