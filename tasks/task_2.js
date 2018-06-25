import React, {Component} from 'react'
import {lifecycle, compose} from 'recompose';

export default (OriginalComponent, title) => compose(
  lifecycle({
    state: {documentTitle: document.title},
    componentDidMount() {
      if (document.title !== title) document.title = title
    },
    componentWillUnmount() {
      if (!(document.title === title &&
          document.getElementsByClassName('CommentListInstance').length > 1)) document.title = this.state.documentTitle
    }
  })
)(OriginalComponent);