import styled from 'styled-components'
import {Link} from 'react-router-dom'
import React from 'react'

require('./icons/money.svg') 
require('icons/chart.svg')
require('icons/tag.svg')

const NavWrapper = styled.nav`
border:1px solid blue;
line-height:24px;
box-shadow:0 0 3px rgba(0,0,0,0.25);
> ul{
  display:flex;
  
  > li{
      width:33.3333%;
      text-align:center;
      padding:16px;
  }
}
`
const Nav =()=>{
    return (
        <NavWrapper>
            <ul>
            <li>
            <svg fill='red' className='icon'>
                <use xlinkHref='#money' />
            </svg>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
            <svg fill='red' className='icon'>
                <use xlinkHref='#tag' />
            </svg>
              <Link to="/money">记账页</Link>
            </li>
            <li>
            <svg fill='red' className='icon'>
                <use xlinkHref='#chart' />
            </svg>
              <Link to="/Statistics">统计页</Link>
            </li>
          </ul>
        </NavWrapper>
    )
}

export default Nav