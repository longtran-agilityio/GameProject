// Libraries
import { Component, ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import { StyledButton } from '@webapp/components/Button/Button.module'

type ErrorBoundaryState = {
  hasError: boolean
  error: Error | null
}

type ErrorBoundaryProps = { children: ReactNode }

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error,
    }
  }

  componentDidCatch(error: Error) {
    this.setState({
      error,
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box>
          <Typography>An error has been occurred!! </Typography>
          <Box style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
          </Box>
          <StyledButton type='button' onClick={() => this.setState({ hasError: false })}>
            Try again?
          </StyledButton>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
