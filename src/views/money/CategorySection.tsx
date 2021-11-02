import styled from 'styled-components'
import React,{useState} from 'react'
import { ProgressPlugin } from 'webpack'
const Wrapper = styled.section`
font-size: 24px;
>ul{
  display:flex;
  background:#c4c4c4;
  
  >li{
    padding:16px 0;
    width:50%;
    text-align: center;
    position:relative;
    &.selected::after{
      display:block;
      height:3px;
      content:'';
      background:#333;
      position:absolute;
      bottom:0;
      width:100%;
      left:0;
    }
  }
}
`
type Props = {
    value:'-'|'+';
    onChange:(value:'-'|'+')=>void;
}
const CategorySection:React.FC<Props> =(props)=>{
    const categoryMap = {'-':'支出','+':'收入'}
    type Keys =keyof typeof categoryMap 
    const [categoryList] = useState<Keys[]>(['-','+'])
    const category = props.value
    
    return(
    <Wrapper>
       <ul>
       {categoryList.map(c=>
        <li key={c} className = {category === c ? 'selected':''} onClick={()=>{props.onChange(c)}}>{categoryMap[c]}</li>
        )}
      </ul> 
    </Wrapper>)
}

export {CategorySection}