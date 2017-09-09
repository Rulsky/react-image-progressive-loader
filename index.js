import React, { Component } from 'react'

class ProgressiveImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      src: props.base64,
      style: Object.assign({}, props.style, {
        filter: `blur(${props.blurStr}) contrast(${props.contrastStr})`,
        transition: `filter ${props.transtionTime} linear ${props.transitionDelay}`,
      })
    }
  }

  static defaultProps = {
    blurStr: '15px',
    contrastStr: '50%',
    transtionTime: '.2s',
    transitionDelay: '.05s',
  }

  fetchSrc(url) {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(url)
      img.onerror = error => reject(error)
      img.src = url
    })
  }

  componentDidMount() {
    this.fetchSrc(this.props.src)
    .then( url => {
      this.setState({
        src: url,
        style: Object.assign(
          {},
          this.state.style,
          {
            filter: 'blur(0) contrast(100%)',
          },
          this.props.style,
        )
      })
    })
    .catch(error => {throw error})
  }


  render() {
    return (
      <img
        src={this.state.src}
        alt={this.props.alt}
        className={this.props.className}
        style={this.state.style}
      />
    )
  }
}

export default ProgressiveImage
