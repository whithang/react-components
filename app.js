class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {done: false};
  }

  onListItemHover() {
    this.setState({done: !this.state.done});
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      {props.groceryItems.map(groceryItem =>
        <GroceryListItem groceryItem={groceryItem} />
      )}
    </ul>
  </div>
);


ReactDOM.render(<GroceryList groceryItems={['Eggs', 'Spinach']}/>, document.getElementById("app"));
