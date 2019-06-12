class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleVisibility = this.handleVisibility.bind(this);

    this.state = {
      toggle: false
    };
  }

  handleVisibility() {
    this.setState(prevState => ({ toggle: !prevState.toggle }));
  }
  render() {
    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.handleVisibility}>
          {this.state.toggle ? "Hide details" : "Show details"}
        </button>
        {this.state.toggle && <p>Hey. Here are details you wanted to see</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let toggle = false;

// const showDetails = () => {
//   toggle = !toggle;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showDetails}>
//         {toggle ? "Hide details" : "Show details"}
//       </button>
//       {toggle && <p>Hey. These are some details you can now see</p>}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById("app"));
// };

// render();
