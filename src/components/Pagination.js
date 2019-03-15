import React from 'react'
import styled from 'styled-components'
import NavButton from './NavButton'

class Pagination extends React.Component {
  render() {
    let { extracss, memberId, currentPage, numOfPages } = this.props

    return (
      <Wrapper extracss={extracss}>
        <NavButton
          extracss={`
            visibility: ${currentPage > 2 ? 'visible' : 'hidden'};
            border-right: solid 1px #e57e16;
          `}
          to={`/${memberId}/1/`}
        >
          <span aria-label="left-pointing double angle quotation mark">
            &#171;
          </span>
        </NavButton>

        <NavButton
          extracss={`
            visibility: ${currentPage > 1 ? 'visible' : 'hidden'};
          `}
          to={`/${memberId}/${currentPage - 1}/`}
        >
          <span aria-label="SINGLE LEFT-POINTING ANGLE QUOTATION MARK">
            &#8249;
          </span>
        </NavButton>

        <span className="page">{`Page ${currentPage}/${numOfPages}`}</span>

        <NavButton
          extracss={`
            visibility: ${currentPage < numOfPages ? 'visible' : 'hidden'};
          `}
          to={`/${memberId}/${currentPage + 1}/`}
        >
          <span aria-label="SINGLE RIGHT-POINTING ANGLE QUOTATION MARK">
            &#8250;
          </span>
        </NavButton>

        <NavButton
          extracss={`
            visibility: ${currentPage < numOfPages - 1 ? 'visible' : 'hidden'};
            border-left: solid 1px #e57e16;
          `}
          to={`/${memberId}/${numOfPages}/`}
        >
          <span aria-label="right-pointing double angle quotation mark">
            &#187;
          </span>
        </NavButton>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;

  & > .page {
    display: inline;
    border-left: solid 1px #e57e16;
    border-right: solid 1px #e57e16;
    padding: 0 15px;
    color: #e57e16;
    font-size: 14px;
    line-height: 20px;
  }

  ${props => props.extracss}
`

export default Pagination
