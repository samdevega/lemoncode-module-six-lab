import React from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, List, ListItem } from '@material-ui/core';
import { Character } from './character.vm';
import * as classes from '../character-collection/components/character-card.styles'
import { NewQuoteComponent } from 'pods/quote/new.quote.component';
import { QuoteComponent } from 'pods/quote/quote.component';

interface Props {
  character: Character;
  onQuotesChange: (oldQuote: string, newQuote: string) => void
  onDeleteQuote: (quote: string) => void
  onAddQuote: (quote: string) => void
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onQuotesChange, onDeleteQuote, onAddQuote } = props

  return (
    <Card style={{ margin: 'auto', maxWidth: '600px' }}>
      <CardContent>
        <div className={classes.content}>
          <Button variant="outlined" color="primary" onClick={() => history.back()}
            style={{ marginBottom: '1rem', display: 'inline-block', width: 'fit-content' }}
          >&lt; Back</Button>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 256, width: 256, borderRadius: '50%', margin: '0 auto' }}
          />
        </div>
      </CardContent>
      <CardHeader
        title={character.name}
        style={{ whiteSpace:'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingBottom: 0 }}
      />
      <div style={{ padding: '8px 16px' }}><strong>Quotes</strong></div>
      {character.quotes && (
      <List style={{ paddingTop: 0 }}>
        {character.quotes.map((quote, index) => <ListItem key={ index } style={{ color: 'grey', fontSize: '1.25rem', fontStyle: 'italic', width: 'fit-content' }}>
          <QuoteComponent quote={quote} onEditQuote={onQuotesChange} onDeleteQuote={onDeleteQuote} />
        </ListItem>)}
      </List>
      )}
      <NewQuoteComponent onAddQuote={onAddQuote} />
      <CardContent>
        <div className={classes.content}>
          <div style={{ fontSize: '1rem' }}>
            <strong>Gender:</strong> {character.gender}<br/>
            <strong>Species:</strong> {character.species}<br/>
            <strong>Status:</strong> {character.status}<br/>
            <strong>Location:</strong> {character.location}<br/>
            <strong>Origin:</strong> {character.origin}<br/>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
