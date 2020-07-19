import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  .list-menu {
    display: inline-block;
    padding-left: 0;
    li {
      display: inline-block;
      padding: 20px;
    }
  }
`

const Menu = ({ router }) => {
  return (
    <Wrapper>
      <ul className="list-menu">
        {
          router.map(( data, index) => 
            <li key={index}>
              <Link to={data.path}>{data.name}</Link>
            </li>
          )
        }
      </ul>
    </Wrapper>
  )
}

export default Menu