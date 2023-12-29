import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: any, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = totalCount%itemsCountForPage===0?(totalCount/itemsCountForPage):(Math.floor(totalCount/itemsCountForPage)+1)// пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        onChange(page,itemsCountForPage)
        // пишет студент
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        // пишет студент
        onChange( page, +event.currentTarget.value)
        console.log(132123123)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                value={itemsCountForPage}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
