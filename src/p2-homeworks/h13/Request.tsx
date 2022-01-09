import React, {useState} from 'react';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestsAPI} from "./api/api";
import s from './Request.module.css'

export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [responseData, setResponseData] = useState('')
    const [error, setError] = useState(null)

    const handleButtonClick = () => {
        requestsAPI.sendPost(checked)
            .then(res => {
                setResponseData(res.data.yourBody.success)
                setError(null)
            })
            .catch(error => {
                    setError(error.response ? error.response.data.errorText : error.message)
                    setResponseData('')
                }
            )
    }

    return (
        <div className={s.requestWrapper}>
            <SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}
            >checkbox
            </SuperCheckbox>
            <SuperButton
                onClick={handleButtonClick}
                className={s.btn}
            >Send
            </SuperButton>
            <div>
                {responseData !== '' ? JSON.stringify(responseData) : ''}
                {error}
            </div>
        </div>
    );
}