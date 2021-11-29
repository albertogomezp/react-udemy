import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Brr, name does brr"
    }
    console.log('konstruktor')
    console.log('zometaim i do brr, but not much')
  }

  componentDidMount() {
    console.log('did maunt??')
    console.log('yea, it maunt')
  }

  componentDidUpdate(prevProps,prevState, snapshot) {
    console.log('up up')
  }

  shouldComponentUpdate() {
      var name = this.state.name;
      console.log(`haha name goes: ${name}`)
      return name.includes('brr');
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(prevProps,prevState)
    return 0
  }

  render() {
      return (
      <div>
        da inpu --> 
        <input value={this.state.name} onChange={({target: {value}}) => this.setState({name: value})} />  
      </div>
      );
  }
}
export default App;