import {useState} from 'react';
import Layout from 'components/Layout'
import styled from 'styled-components'
import {TagsSection} from 'views/money/TagsSection'
import {NoteSection} from 'views/money/NotesSection'
import {CategorySection} from 'views/money/CategorySection'
import {NumberPadSection} from 'views/money/NumberPadSection'
import {useRecords} from 'hooks/useRecords'

const MyLayout = styled(Layout)`
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
  console.log('父组件money加载')
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
    <MyLayout scrollTop={9999}>
    <TagsSection value={selected.tagIds} onChange={tagIds=>onChange({tagIds:tagIds})}/>
    <NoteSection value={selected.note} onChange={note=>onChange({note:note})}/> 
    <CategoryWrapper>
    <CategorySection value={selected.category} onChange={category=>onChange({category} )}/>
    </CategoryWrapper>
    <NumberPadSection value={selected.amount} onChange={amount=>onChange({amount})} onOk={submit}/> 
    </MyLayout>
    );
  }

  export default Money