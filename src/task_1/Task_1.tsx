import {ChangeEvent, FC, memo, useCallback, useState} from 'react';


const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};

export const Task_1 = () => {
    console.log('Task_1 render')

    return (
        <div style={{...CONTAINER_STYLES} as any}>
            <Input />
            <Title title="I am a title"/>
        </div>
    )
}

const Title = memo((props: { title: string }) => {
    console.log('title render')
    return <h3>{props.title}</h3>
})

const Input: FC = () => {
    const [value, setValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    console.log('Input render')
    return (
        <input type="text" placeholder="Placeholder" value={value} onChange={handleChange}/>
    )
}

