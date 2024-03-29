import React from 'react'
import {default as api} from '../store/apiSlice'
import {getLabels} from '../helper/helper'



const Labels = () => {

  const { data,isFetching, isSuccess, isError } = api.useGetLabelsQuery()

  let Transactions;
  

  if(isFetching){
    Transactions = <div>Fetching</div>
  }else if(isSuccess){
    // console.log()
    // alert("Transaction successful")
    Transactions = getLabels(data,'type').map((v,i)=> <LabelComponent key={i} data={v}> </LabelComponent>)

  }else if(isError){
    Transactions = <div>Error</div>
  }

  return (
    <>
    {Transactions}
    </>
  )
}

function LabelComponent({data}){

  if(!data) return <></>;
    return(
        <div className="labels flex justify-between">
            <div className="flex gap-2">
              <div className='w-2 h-2 rounded py-3' style={{background: data.color ?? "#F5E92C"}}></div>
                <h3 className='text-black text-md'>{data.type ?? ""}</h3>
            </div>
            <h3 className='font-bold'>{Math.round(data.percent) ?? 0}%</h3>
        </div>
    )
}


export default Labels
