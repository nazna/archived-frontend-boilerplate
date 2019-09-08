import React from 'react'
import styled from '@emotion/styled'
import { toggle } from '../../store/todo'

type Props = {
  todo: Todo
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const handleToggle = () => toggle(todo.id)

  return (
    <Container>
      <Checkbox type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <Text completed={todo.completed}>{todo.text}</Text>
    </Container>
  )
}

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  cursor: pointer;
  user-select: none;
  border: 1px solid #6cc0e5;
  border-radius: 0;
  transition: all 0.12;

  &:checked {
    background: #f0f8fc;
    border-color: #e1f2f9;
  }

  &:focus {
    outline: none;
  }
`

const Text = styled.label<{ completed: Todo['completed'] }>`
  flex-grow: 1;
  color: ${props => (props.completed ? '#ccc' : '#333')};
  user-select: none;
  transition: all 0.12s;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`
