//CommentListInstance - это класс (className) компонента, на который был использован
//данный HOC, он же декоратор. Почему я так делаю, я прописал в сообщении на моем круге

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
