
import { useUpdate } from 'hooks/useUpdate'
import {useState,useEffect,useRef} from 'react'
import {Id} from '../lib/Id'



const useTags = ()=>{
    const [tags,setTags] = useState<{id:number;name:string}[]>([])
    useEffect(()=>{
        let localTags = JSON.parse((window as any).localStorage.getItem('tags')||'[]')
        if(localTags.length === 0)
        {
            localTags = [
                {id:(new Id).value,name:'衣'},
                {id:(new Id).value,name:'食'},
                {id:(new Id).value,name:'住'},
                {id:(new Id).value,name:'行'},
            ]
        }
        setTags(localTags)
    },[])
    useUpdate(()=>{
        (window as any).localStorage.setItem('tags',JSON.stringify(tags))}
    ,[tags])
    const findTag = (id:number) =>tags.filter(tag=>tag.id === id)[0]
    const updateTag = (id:number,{name}:{name:string})=>{
        setTags(tags.map(tag=>tag.id===id?{id,name}:tag))
    }
    const deleteTag = (id:number)=>{
        setTags(tags.filter(tag=>tag.id!==id))
    }
    const addTag = ()=>{
        const tagName = window.prompt('新标签的名称为')
        if (tagName !== null && tagName !== ''){setTags([...tags,{id:(new Id).value,name:tagName}])}
    }
    const getName = (id:number)=>{
        const tag = tags.filter(t=>t.id===id)[0]
        return tag ? tag.name:''
    }
    return {
        tags,
        setTags,
        findTag,
        updateTag,
        deleteTag,
        addTag,
        getName
    }
}

export {useTags}