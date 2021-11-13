import React,{useState} from 'react';
import Layout from 'components/Layout'
import styled from 'styled-components'
import {TagsSection} from 'views/money/TagsSection'
import {NoteSection} from 'views/money/NotesSection'
import {CategorySection} from 'views/money/CategorySection'
import {NumberPadSection} from 'views/money/NumberPadSection'
import {useRecords} from 'hooks/useRecords'

const MyLayout = styled(Layout)`
  border:1px solid red;
  display:flex;
  flex-direction:column;
`
const defaultFormData = {
    tagIds:[] as number[],
    note:'',
    category: '-' as Category,
    amount: 0,
}

const CategoryWrapper = styled.div`
  background:#c4c4c4;
`
type Category = '-' |'+'
function Money() {
  const [selected,setSelected] = useState(defaultFormData)
   const {addRecord} = useRecords()
   const onChange = (obj:Partial<typeof selected>)=>{
    setSelected({
      ...selected,
      ...obj
    })
   }
   const submit = ()=>{
     if(addRecord(selected))
     {alert('保存成功')
    setSelected(defaultFormData)}
   }
   console.log('外部amount is:',selected.amount)
    return (
    <MyLayout>
    <TagsSection value={selected.tagIds} onChange={tagIds=>onChange({tagIds:tagIds})}>
    </TagsSection>
    <NoteSection value={selected.note} onChange={note=>onChange({note:note})}> 
    </NoteSection>
    <CategoryWrapper>
     <CategorySection value={selected.category} onChange={category=>onChange({category} )}>
     </CategorySection>
     </CategoryWrapper>
     <NumberPadSection value={selected.amount} onChange={amount=>onChange({amount})} onOk={submit}> 
     </NumberPadSection>
    </MyLayout>
    );
  }

  export default Money