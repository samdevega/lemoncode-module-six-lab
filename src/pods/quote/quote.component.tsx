import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react'

export const QuoteComponent = (props) => {
  const { quote, onEditQuote, onDeleteQuote } = props
  const [editedQuote, setEditedQuote] = useState('')
  const [showEdit, setShowEdit] = useState(false)
  const setQuote = (quote, editedQuote) => {
    onEditQuote(quote, editedQuote)
    setShowEdit(false)
  }
  const deleteQuote = (quote) => {
    onDeleteQuote(quote)
    setShowEdit(false)
  }

  return (
    <>
    { showEdit ? (
      <>
        <TextField variant='outlined' size='small' value={editedQuote} onChange={(event) => setEditedQuote(event.target.value)} />
        <Button variant='outlined' size='small' style={{ marginLeft: '0.75rem' }} onClick={() => setQuote(quote, editedQuote)}>Save</Button>
        <Button variant='outlined' size='small' style={{ marginLeft: '0.75rem' }} onClick={() => setShowEdit(false)}>Cancel</Button>
      </>
    ) : (
      <>
        &quot;{quote}&quot;
        <Button variant='outlined' size='small' style={{ marginLeft: '0.75rem' }} onClick={() => setShowEdit(true)}>Edit</Button>
        <Button variant='outlined' size='small' style={{ marginLeft: '0.75rem' }} onClick={() => deleteQuote(quote)}>Delete</Button>
      </>
    ) }
    </>
  )
}
