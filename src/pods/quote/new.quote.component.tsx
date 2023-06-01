import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react'

export const NewQuoteComponent = (props) => {
  const { onAddQuote } = props
  const [newQuote, setNewQuote] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const addQuote = () => {
    onAddQuote(newQuote)
    discard()
  }
  const discard = () => {
    setNewQuote('')
    setShowAdd(false)
  }

  return (
    <div style={{ padding: '8px 16px' }}>
    { showAdd ? (
      <>
        <TextField variant='outlined' size='small' value={newQuote} onChange={(event) => setNewQuote(event.target.value)} />
        <Button variant='outlined' size='small' style={{ marginLeft: '0.75rem' }} onClick={addQuote}>Save</Button>
        <Button variant='outlined' size='small' style={{ marginLeft: '0.75rem' }} onClick={discard}>Cancel</Button>
      </>
    ) : (
      <>
        <Button variant='outlined' size='small' style={{ marginLeft: '0.75rem' }} onClick={() => setShowAdd(true)}>Add</Button>
      </>
    ) }
    </div>
  )
}
