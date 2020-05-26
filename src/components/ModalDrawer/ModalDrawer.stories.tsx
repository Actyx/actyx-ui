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
import { ModalDrawer } from './ModalDrawer';
import { Header } from './Header';
import { ListItem, List } from './List';
import { MUIcon } from '../MUIcon';

const headerMain = 'Workstation 005 - Machine Cleaning';

const headerIcon = (
  <div
    onClick={action('onClick')}
    style={{
      height: 80,
      width: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <MUIcon fontSize={35} type="close" />
  </div>
);

const listMain: ReadonlyArray<ListItem> = [
  {
    id: 'a',
    name: 'Activities Overview',
    icon: 'assignment',
    onClick: action('onClick')
  },
  {
    id: 'b',
    name: 'Workstation Documentation',
    icon: 'insert_drive_file',
    onClick: action('onClick')
  }
];

const listSub: ReadonlyArray<ListItem> = [
  {
    id: 'c',
    name: 'Lock',
    icon: 'lock',
    onClick: action('onClick')
  },
  {
    id: 'd',
    name: 'Sign Out',
    icon: 'exit_to_app',
    onClick: action('onClick')
  }
];

const baseProps = {
  headerMain,
  listMain,
  listSub,
  handleClose: action('handleClose')
};

storiesOf('Components/ModalDrawer', module)
  .addDecorator(
    hostDecorator({
      width: 800,
      height: 600
    })
  )
  .add('Open', () => {
    const props = { ...baseProps, open: true, headerIcon };
    return <ModalDrawer {...props} />;
  })
  .add('Close', () => {
    const props = { ...baseProps, open: false, headerIcon };
    return <ModalDrawer {...props} />;
  })
  .add('No header icon', () => {
    const props = { ...baseProps, open: true };
    return <ModalDrawer {...props} />;
  })
  .add('Overflow', () => {
    const props = { ...baseProps, listMain: [...listMain, ...listMain, ...listMain], open: true };
    return <ModalDrawer {...props} />;
  })
  .add('Part Header', () => <Header main={headerMain} icon="x" />)
  .add('Part Header icon', () => <Header main={headerMain} icon={headerIcon} />)
  .add('Part List', () => <List items={listMain} handleClose={action('handleClose')} />);
