import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import css from "./Form.module.css";

import {createCar} from "../../store";

const Form = () => {
    const {handleSubmit, reset, register,formState:{errors}} = useForm({mode:"onSubmit"});
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createCar({data}))
      reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text"
                {...register('model',{
                    required:'Неправильно заповнена Model!!',
                    minLength:{
                    value:2,
                    message:'Минимум 2 символи'
                    }
                })}/></label>
                <label>Price: <input type="text"
                {...register('price',{
                    required:'Неправильно заповнена Price!!',
                    minLength:{
                    value:3,
                    message:'Минимум 3 символи'
                    }
                })}/></label>
                <label>Year: <input type="text" {...register('year', {
                    required: 'Неправильно заповнена Year!!',
                    minLength: {
                        value: 4,
                        message: 'Минимум 4 символи'
                    }
                })}/></label>
                <button>Save</button>
            </form>
            <div className={css.error_form}>{errors?.model
            && <p>{errors?.model?.message  || 'Неправильно заповнена поле!!'}</p>}
            {errors?.price
            && <p>{errors?.price?.message  || 'Неправильно заповнена поле!!'}</p>}
            {errors?.year
            && <p>{errors?.year?.message  || 'Неправильно заповнена поле!!'}</p>}
            </div>
        </>
    );
};

export {Form};