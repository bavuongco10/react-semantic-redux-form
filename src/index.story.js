import React from 'react'
import { storiesOf } from '@storybook/react'
import { Field } from 'redux-form'
import withReduxForm from 'redux-form-storybook'

storiesOf('Field', module)
  .addDecorator(withReduxForm)
  .add('with text', () => (
    <Field
      name='onlyField'
      component='input'
      type='text'
    />
  ))
