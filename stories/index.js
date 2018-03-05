import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Navigation from '../src/components/atoms/Navigation';

storiesOf('Navigation', module)
    .add('main', () => (
        <Navigation />
    ));