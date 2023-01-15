import React from 'react'
import TextField from '@mui/material/TextField';

const Calendar = () => {
  return (
    <div style={{
        margin: 'auto',
        display: 'block',
        width: 'fit-content'
      }}>
        {/* <h3>How to create Date Picker in ReactJS?</h3> */}
        <TextField
          id="date"
          label="Enter Date of Transaction"
          type="date"
          defaultValue="2022-01-01"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
  )
}

export default Calendar
