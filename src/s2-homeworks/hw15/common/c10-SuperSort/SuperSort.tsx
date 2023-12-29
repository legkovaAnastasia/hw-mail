import React from 'react'
import down from './down.png'
import up from './up.png'
import none from './none.png'

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = none

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    switch (sort) {
        case '':{
            return 'down'
        }
        case 'down': {
            return up
        }
        case 'up': {
            return ''
        }
    }
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // return up // исправить
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        // debug
        onChange(pureChange(sort, down, up))
    }

    // const icon = sort === down
    //     ? downIcon
    //     : sort === up
    //         ? upIcon
    //         : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}

        >
            {/*сделать иконку*/}
            {value}
            <img id={id + '-icon-' + sort} src={noneIcon} style={{width: '20px', height: '20px', marginLeft: '20px'}}/>
            {/*<img src={icon} style={{width: '20px', height: '20px', marginLeft: '20px'}}*/}
            {/* id={id + '-icon-' + sort}*/}
            {/*/>*/}

            {/*{icon } /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
