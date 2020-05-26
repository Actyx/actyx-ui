/*
 * Copyright 2020 Actyx AG
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Typography } from '../Typography';
import { ToggleButtons } from './ToggleButtons';

const items = [
  {
    id: 'first',
    label: 'First'
  },
  {
    id: 'second',
    label: 'Second longer item'
  },
  {
    id: 'third',
    label: (
      <>
        <Typography variant="standard" bold color="inherit">
          PCS
        </Typography>
        &nbsp;
        <Typography variant="subtext" color="inherit">
          (output)
        </Typography>
      </>
    )
  }
];

const baseProps = {
  items,
  onToggle: action('onToggle')
};

storiesOf('Components/ToggleButtons', module)
  .addDecorator(hostDecorator())
  .add('Base', () => <ToggleButtons {...baseProps} />)
  .add('items', () => <ToggleButtons {...baseProps} items={[items[2]]} />)
  .add('initToggledItemId', () => <ToggleButtons {...baseProps} initToggledItemId="third" />);
