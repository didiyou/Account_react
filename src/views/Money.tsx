import React,{useState} from 'react';
import Layout from 'components/Layout'
import styled from 'styled-components'
import {TagsSection} from 'views/money/TagsSection'
import {NoteSection} from 'views/money/NotesSection'
import {CategorySection} from 'views/money/CategorySection'
import {NumberPadSection} from 'views/money/NumberPadSection'


const MyLayout = styled(Layout)`
  border:1px solid red;
  display:flex;
  flex-direction:column;
`
type Category = '-' |'+'
function Money() {
  const [selected,setSelected] = useState({
    tagIds:[] as number[],
    note:'',
    category: '-' as Category,
    amount: 0,
   })
   const onChange = (obj:Partial<typeof selected>)=>{
    setSelected({
      ...selected,
      ...obj
    })
   }
    return (
    <MyLayout>
    <TagsSection value={selected.tagIds} onChange={tagIds=>onChange({tagIds:tagIds})}>
    </TagsSection>
    <NoteSection value={selected.note} onChange={note=>onChange({note:note})}> 
    </NoteSection>
     <CategorySection value={selected.category} onChange={category=>onChange({category})}>
     </CategorySection>
     <NumberPadSection value={selected.amount} onChange={amount=>onChange({amount})} onOk={()=>{}}> 
     </NumberPadSection>
    </MyLayout>
    );
  }

  export default Money