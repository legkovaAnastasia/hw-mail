import React, {ChangeEvent, Component, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}
export const pureAddUser = (name: string, setError: React.Dispatch<string>, setName: React.Dispatch<string>, addUserCallback: (name: string) => void) => {
    if (name.trim().length === 0) {
        setError("Ошибка! Введите имя!")
    } else {
        addUserCallback(name)
        setName('')
    }
}

export const pureOnBlur = (name: string, setError: React.Dispatch<string>) => {
    if (name.trim().length === 0) {
        setError("Ошибка! Введите имя!")
    }
}

export const pureOnEnter = (e: any, addUser: any) => {
    if (e.key === 'Enter') {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length
    const lastUserName = totalUsers > 0 ? users[users.length - 1].name : ''
    // if (totalUsers>0){
    // const lastUserName = '' || users[users.length-1].name

// console.log(lastUserName)

return (
    <Greeting
        name={name}
        setNameCallback={setNameCallback}
        addUser={addUser}
        onBlur={onBlur}
        onEnter={onEnter}
        error={error}
        totalUsers={totalUsers}
        lastUserName={lastUserName}
    />
)
}

export default GreetingContainer
