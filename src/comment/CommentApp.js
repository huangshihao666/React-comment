import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  handleSubmitComment (comment) {
    console.log(comment)
    if (!comment) return
    if (comment.username === '') return alert('用户名不能为空')
    if (comment.content === '') return alert('评论内容不能为空')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }

  render () {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={ this.handleSubmitComment.bind(this) }/>
        <CommentList comments={ this.state.comments }/>
      </div>
    )
  }
}

export default CommentApp