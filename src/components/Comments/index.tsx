import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IComment } from '../../store/ducks/comments/types';
import { Container, EmailContent, NameContent, BodyContent } from './styles';
import InputText from '../InputText';
import Button from '../Button';
import * as ActionComments from '../../store/ducks/comments/actions';

const Comments: React.FC<Omit<IComment, 'postId'>> = ({
  id,
  body,
  name,
  email,
  onEdition,
}: Omit<IComment, 'postId'>) => {
  const dispatch = useDispatch();
  const [editionText, setEditionText] = useState('');

  const handleEdit = (commentId: number, actualComment: string) => {
    console.log('edilson');
    setEditionText(actualComment);
    dispatch(ActionComments.editRequest(commentId));
  };

  return (
    <Container>
      <div>
        <EmailContent>{email}</EmailContent>
        <span
          tabIndex={0}
          onKeyPress={() => {
            handleEdit(id, body);
          }}
          onClick={() => {
            handleEdit(id, body);
          }}
          role="button"
        >
          Editar
        </span>
      </div>

      <NameContent>{name}</NameContent>
      {onEdition ? (
        <>
          <InputText
            placeholder=""
            type="text"
            value={editionText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditionText(e.target.value)
            }
          />
          <Button
            disabled={editionText.length <= 0}
            onClick={() => {
              dispatch(ActionComments.editSuccess(id, editionText));
              setEditionText('');
            }}
          >
            Salvar
          </Button>
        </>
      ) : (
        <BodyContent>{body}</BodyContent>
      )}
    </Container>
  );
};

export default Comments;
