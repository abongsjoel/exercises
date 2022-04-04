import { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      item: "",
    };
  }

  addItemToList = () => {
    console.log({ state: this.state });

    const id = Date.now();

    if (this.state.item !== "") {
      this.setState({
        ...this.state,
        listItems: [
          ...this.state.listItems,
          { id, item: this.state.item, strike: false },
        ],
        item: "",
        counter: this.state.counter + 1,
      });
    }

    console.log({ state: this.state });
  };

  strikeItem = (id) => {
    console.log({ state: this.state });

    const item = this.state.listItems.find((item) => item.id === id);
    const listItems = [
      ...this.state.listItems.filter((i) => i.id !== id),
      { ...item, strike: !item.strike },
    ];
    this.setState({
      ...this.state,
      listItems,
    });
  };

  render() {
    return (
      <>
        <div>
          <h2>Todo List</h2>

          <input
            type="text"
            value={this.state.item}
            onChange={(e) =>
              this.setState({ ...this.state, item: e.target.value })
            }
          />
          <button type="button" onClick={this.addItemToList}>
            Add
          </button>

          <p>{`${
            this.state.listItems.filter((item) => item.strike === false)
              .length ?? 0
          } remaining out of ${this.state.listItems.length} tasks`}</p>
          <ul>
            {this.state.listItems.map(({ id, item, strike }) => {
              console.log({ id, item });

              return (
                <li
                  key={id}
                  className={strike ? "is-done" : ""}
                  onClick={() => this.strikeItem(id)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
      </>
    );
  }
}
