import React from 'react'
import {useForm} from 'react-hook-form';
import List from './List'
import {default as api} from '../store/apiSlice'
import Calendar from './Calendar';

const Form = () => {

  const {register, handleSubmit, resetField} = useForm();

  //Destructuring add transaction function from transaction mutation
  const [addTransaction] = api.useAddTransactionMutation();

  const onSubmit = async(data) => {
    if(!data) return {};
    await addTransaction(data).unwrap();
    resetField('name');
    resetField('amount')
  }
  return (
    <div className='form max-w-sm mx-auto w-96'>
      <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

      <form id='form'onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input type="text" {...register('name')} placeholder='Transaction Name' className='form-input' />
          </div>

          <select className='form-input' {...register('type')}>
            <option value="Investment" defaultValue>Investment</option>
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
          </select>

          <div className="input-group">
            <input type="text" {...register('amount')} placeholder='Amount' className='form-input' />
          </div>

          <div className="calendar">
            <Calendar></Calendar>
          </div>

          <div className="submit-btn">
            <button className='border py-2 text-white bg-indigo-600 w-full'>
              Enter Transaction
            </button>
          </div>
        </div>
      </form>

      <List></List>
      
    </div>
  )
}

export default Form
