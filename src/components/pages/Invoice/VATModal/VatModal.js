import { Box, Button, FormControl, TextField } from '@mui/material'
import { useState } from 'react'
import CustomDialog  from '../../../CustomDialog/CustomDialog'
import { LoadingButton } from '@mui/lab'


 const VATModal = ({show, onClose, onSuccess}) => {
  const [name, setName] = useState('')
  const [nameErr, setNameErr] = useState(false)
  const [onSubmit, setOnSubmit] = useState(false)

  const createDiscount = async () => {
      if (onSubmit) return
      if (!name || name.trim().length === 0) {
          setNameErr(true)
          return
      }
      setNameErr(false)
      setOnSubmit(true)
      show(false)

      
  }

  return (
      <CustomDialog
          open={show}
          title='Add VAT'
          content={<Box padding='5px 0'>
              <FormControl>
                  <TextField
                      label='VAT percentage'
                      variant='outlined'
                      type="number"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      error={nameErr}
                  />
              </FormControl>
          </Box>}
          actions={<Box width='100%' sx={{
              display: 'flex',
              justifyContent: 'flex-end'
          }}>
              <Button
                  variant='text'
                  onClick={() => show(false)}
              >
                  Cancel
              </Button>
              <LoadingButton
                  variant='contained'
                  onClick={createDiscount}
                  loading={onSubmit}
              >
                  Create
              </LoadingButton>
          </Box>}
      />
  )
}

export default VATModal