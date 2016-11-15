const app = "I don't do much.";
const Button = React.createClass({
  render(){
    return React.createElement('button', {}, 'click me!');
  }
});

const ShoppingList = React.createClass({
  render() {
    return React.createElement('ul', {}, [
      React.createElement('li', {},'apples'),
      React.createElement('li', {}, 'cereal'),
      React.createElement('li', {}, 'milk')
    ])
  }
})

class Button extends React.Component {
  render() {
    return React.createElement('button', {}, "click")
  }
}
