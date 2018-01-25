import React, { Component } from 'react'

class CommentInput extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  usernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  contentChange (e) {
    this.setState({
      content: e.target.value
    })
  }
  submit () {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({ username, content })
      this.setState({
        content: ''
      })
    }
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={ this.state.username } onChange={ this.usernameChange.bind(this) } />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={ this.state.content } onChange={ this.contentChange.bind(this) } />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={ this.submit.bind(this) }>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput