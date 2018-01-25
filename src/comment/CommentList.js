import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static propsDefault = {
    comments: []
  }

  render () {
    return (
      <div>
        { this.props.comments.map((comment, index) => <Comment comment={ comment } key={ index } />) }
      </div>
    )
  }
}

export default CommentList