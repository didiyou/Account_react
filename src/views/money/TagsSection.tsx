import React,{useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
background:#ffffff;
padding:12px 16px;
flex-grow:1;
display:flex;
flex-direction:column;
justify-content: flex-end;
align-items: flex-start;
>ol{
  margin-left:-12px;
    > li{
      background:#d9d9d9;
      border-radius:18px;
      display:inline-block;
      padding:3px 18px;
      font-size:14px;
      margin:8px 12px;
      &.selected{
          background:#f60;
      }
        }
}
> button{
  background:none;
  border:none;
  padding:2px 4px;
  border-bottom:1px solid;
}
`
type Props = { 
    value: string[] 
    onChange:(value:string[])=>void
}

const TagsSection:React.FC<Props> = (props)=>{
    const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
    const selectedTags = props.value
    const onAddTag = ()=>{
        const tagName = window.prompt('新标签的名称为')
        if (tagName !== null){setTags([...tags,tagName])}
    }
    const onToggleTag=(tag:string)=>{
        const index = selectedTags.indexOf(tag)
        if(index >= 0){props.onChange(selectedTags.filter(t=>t!==tag))
        }
    else{props.onChange([...selectedTags,tag])}
        
}
    return (
    <Wrapper>
     <ol>
       {tags.map(tag=><li key={tag} onClick={()=>{onToggleTag(tag)}} className={selectedTags.indexOf(tag)>=0 ?'selected' :''}>{tag}</li>)}
     </ol>
     <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
    )
}




export {TagsSection}