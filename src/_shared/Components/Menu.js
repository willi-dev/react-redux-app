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
    <Wrapper className="w-full bg-red-600">
      <ul className="list-menu flex text-white">
        {
          router.map(( data, index) => 
            <li className="mr-6" key={index}>
              <Link to={data.path}>{data.name}</Link>
            </li>
          )
        }
      </ul>
    </Wrapper>
  )
}

export default Menu