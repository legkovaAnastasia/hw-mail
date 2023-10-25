import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import zIndex from "@mui/material/styles/zIndex";

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '180px', padding: '20px', ml:'20px', color:'lightGreen', zIndex: '-1'
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
