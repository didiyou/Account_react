import styled from 'styled-components'
import {Link,NavLink} from 'react-router-dom'
import React from 'react'
import Icon from './Icon'



const NavWrapper = styled.nav`
border:1px solid blue;
line-height:24px;
box-shadow:0 0 3px rgba(0,0,0,0.25);
> ul{
  display:flex;
  
  > li{
    width:33.3333%;
    text-align:center;
    
    display:flex;
    flex-direction: column;
    > a{
      display:flex;
      padding:4px 0;
      flex-direction: column;
      align-items: center;
      .icon{
          width:24px;
          height:24px;
      }
      &.selected{
        color:rgb(136,175,245);
        .icon{
          fill:rgb(136,175,245);
        }
      }
    }
      
      
  }
}
`
const Nav =()=>{
    return (
        <NavWrapper>
            <ul>
            <li>
            
              <NavLink to="/tags" activeClassName="selected">
              <Icon name='tag'/>
                标签页</NavLink>
            </li>
            <li>
              <NavLink to="/money" activeClassName="selected">
              <Icon name='money'/>
                记账页</NavLink>
            </li>
            <li>
            
              <NavLink to="/Statistics" activeClassName="selected">
              <Icon name='chart'/>
                统计页</NavLink>
            </li>
          </ul>
        </NavWrapper>
    )
}

export default Nav