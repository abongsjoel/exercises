export default class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 42 };
  }

  incrementCounter = (currentState, prevState) => {
    console.log({ currentState, prevState });
  };
  render() {
    return (
      <>
        <div>
          <h2 className="counter">{this.state.counter}</h2>
          <button
            className="counter-button"
            type="button"
            onClick={this.incrementCounter}
          >
            Click
          </button>
        </div>
        <style>{`
                  .counter-button {
                      font-size: 1rem;
                      padding: 5px 10px;
                      color:  #585858;
                  }
              `}</style>
      </>
    );
  }
}
