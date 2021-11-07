import {useState} from 'react'
import {Id} from './lib/Id'

const defaultTags = [
    {id:(new Id).value,name:'衣'},
    {id:(new Id).value,name:'食'},
    {id:(new Id).value,name:'住'},
    {id:(new Id).value,name:'行'},
]

const useTags = ()=>{
    const [tags,setTags] = useState<{id:number;name:string}[]>(defaultTags)
    const findTag = (id:number) =>tags.filter(tag=>tag.id === id)[0]
    return {
        tags,
        setTags,
        findTag
    }
}

export {useTags}