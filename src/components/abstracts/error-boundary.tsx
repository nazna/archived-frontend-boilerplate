import React from 'react'

export class ErrorBoundary extends React.Component {
  state = {
    error: false
  }

  static getDerivedStateFromError() {
    return { errror: true }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(error, info)
  }

  render() {
    if (this.state.error) {
      return <div>Something went wrong.</div>
    } else {
      return this.props.children
    }
  }
}
