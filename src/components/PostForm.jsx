import React from 'react'

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  changeInputHandler = (event) => {
    this.setState(prev => (
        {...prev, title: event.target.value}
    ))
  }

  submitHandler = (event) => {
    event.preventDefault()
    const {title} = this.state
    const newPost = { title, id: Date.now().toString()}
    console.log(newPost)
    this.setState({title: ''})
  }

  render() {
    return (
        <form onSubmit={this.submitHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Name of Title:</label>
            <input
                type="text"
                className="form-control"
                id="title"
                value={this.state.title}
                name="title"
                onChange={this.changeInputHandler}
            />
          </div>
          <button className="btn btn-success" type="submit">Create</button>
        </form>
    )
  }
}

export default PostForm
