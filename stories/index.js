import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Navigation from '../src/components/atoms/Navigation';
import Button from '../src/components/atoms/Button';
import Header from '../src/components/atoms/Header';

storiesOf('Navigation', module)
  .add('main', () => (
      <Navigation />
  ));

storiesOf('Button', module)
  .add('Nav Button', () => (
    <Button
      linkTo={'#'}
      color='brown'
    />
  ));

storiesOf('Header', module)
  .add('Header Nav', () => (
    <Header
      headerCopy='Earth to Her'
    />
  ));
