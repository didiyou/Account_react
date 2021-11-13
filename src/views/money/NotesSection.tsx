import styled from 'styled-components'
import React,{useRef} from 'react'
import {Input} from 'components/Input'

const Wrapper = styled.section`
padding:14px 16px;
font-size:14px;
background:#f5f5f5;
`
type Props ={
    value:string;
    onChange:(value:string) =>void;
}
const NoteSection:React.FC<Props>= (props)=>{
    const note = props.value
    const onChange:React.ChangeEventHandler<HTMLInputElement> = (e)=>{ 
    props.onChange(e.target.value)}
   
    return (
    <Wrapper> 
      <Input  label='备注' type='text' defaultValue = {note} onChange={onChange} placeholder='请填写备注'/>
    </Wrapper>
    )
}




export {NoteSection}