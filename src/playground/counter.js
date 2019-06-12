class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: props.count
    };
  }

  componentDidMount() {
    try {
      const countString = localStorage.getItem("count");
      const count = parseInt(countString, 10);
      if (count && !isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAdd() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinus() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;
// const addHandle = () => {
//   count++;
//   render();
// };
// const minusHandle = () => {
//   count--;
//   render();
// };
// const resetHandle = () => {
//   count = 0;
//   render();
// };
// const render = () => {
//   const someId = "my-id";
//   const template = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addHandle}>+1</button>
//       <button onClick={minusHandle}>-1</button>
//       <button onClick={resetHandle}>reset</button>
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById("app"));
// };

// render();
