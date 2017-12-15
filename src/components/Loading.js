import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #B2EBF2;
  text-align: center;
`

const Loading = (props) => {
  if (props.error) {
    return (
      <Wrap>
        <div>Error!</div>
      </Wrap>
    )
  } else if (props.pastDelay) {
    // 300ms 之后显示
    return (
      <Wrap>
        <div>信息请求中...</div>
      </Wrap>
    )
  } else {
    return null
  }
}

export default Loading