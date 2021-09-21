import React, {Component} from 'react'

class Api extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const {data} = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry.name} __________________________ {entry.email} __________________________ {entry.phone}</li>
    })

    return <ul>{result}</ul>
  }
}

export default Api