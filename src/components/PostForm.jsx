import React from 'react'
import {connect} from "react-redux";
import {createPost, hideAlertError, showAlertError} from "../redux/actions";
import {Alert} from "./Alert";


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
    if (this.state.title.length > 0) {
      return this.props.hideAlertError()
    }
  }
  submitHandler = (event) => {
    event.preventDefault()
    const {title} = this.state
    if (!title.trim()) {
      return this.props.showAlertError('empty text')
    }

    const newPost = {title, id: Date.now().toString()}
    this.props.createPost(newPost)
    this.setState({title: ''})
  }

  render() {
    return (
        <form onSubmit={this.submitHandler}>
          {this.props.alert && <Alert text={this.props.alert}/>}
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

const mapDispatchToProps = {
  createPost, showAlertError, hideAlertError
}

const mapStateToProps = state => ({
  alert: state.loading.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
