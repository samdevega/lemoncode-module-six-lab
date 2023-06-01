import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { Link } from 'react-router-dom';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, children } = props;

  return (
    <Link to={`/characters/${character.id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <CardContent>
          <div className={classes.content}>
            <CardMedia
              image={character.image}
              title={character.name}
              style={{ height: 256, width: 256, borderRadius: '50%', margin: '0 auto' }}
            />
          </div>
        </CardContent>
        <CardHeader
          title={character.name}
          subheader={character.location}
          style={{ whiteSpace:'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        />
        <div>{children}</div>
      </Card>
    </Link>
  );
};
