import * as icons from '@rocket.chat/icons/dist/font';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import React from 'react';

import { createPropsFromKnobs, handleEvent, Document, TextSection, VariationsTable } from '../../helpers/storybook';
import { Icon } from '../Icon';
import { Button } from './index';


const props = createPropsFromKnobs({
  children: 'Powered by Rocket.Chat',
  bland: false,
  outline: false,
  nude: false,
  square: false,
  primary: false,
  secondary: false,
  danger: false,
  disabled: false,
  hidden: false,
  onClick: handleEvent('click'),
});

storiesOf('Elements|Button', module)
  .lokiSkip('Button', () => <Document>
    <TextSection>
      <h1>Button</h1>
      <p>
      A button indicates a possible user action. By default, it's rendered as a HTML5 <code>{'<button>'}</code> element.
      </p>
    </TextSection>
    <VariationsTable
      component={Button}
      common={{ children: 'Text' }}
      xAxis={{
        default: {},
        bland: { bland: true },
        outline: { outline: true },
        nude: { nude: true },
      }}
      yAxis={{
        normal: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        hidden: { hidden: true },
        disabled: { disabled: true },
        primary: { primary: true },
        'primary / hover': { primary: true, className: 'hover' },
        'primary / active': { primary: true, className: 'active' },
        'primary / focus': { primary: true, className: 'focus' },
        'primary / hidden': { primary: true, hidden: true },
        'primary / disabled': { primary: true, disabled: true },
        secondary: { secondary: true },
        'secondary / hover': { secondary: true, className: 'hover' },
        'secondary / active': { secondary: true, className: 'active' },
        'secondary / focus': { secondary: true, className: 'focus' },
        'secondary / hidden': { secondary: true, hidden: true },
        'secondary / disabled': { secondary: true, disabled: true },
        danger: { danger: true },
        'danger / hover': { danger: true, className: 'hover' },
        'danger / active': { danger: true, className: 'active' },
        'danger / focus': { danger: true, className: 'focus' },
        'danger / hidden': { danger: true, hidden: true },
        'danger / disabled': { danger: true, disabled: true },
      }}
    />
  </Document>);

storiesOf('Elements|Button', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('default', () => (
    <Button {...props()} />
  ))
  .add('bland', () => (
    <Button {...props({ bland: true })} />
  ))
  .add('outline', () => (
    <Button {...props({ outline: true })} />
  ))
  .add('nude', () => (
    <Button {...props({ nude: true })} />
  ))
  .add('primary', () => (
    <Button {...props({ primary: true })} />
  ))
  .add('secondary', () => (
    <Button {...props({ secondary: true })} />
  ))
  .add('danger', () => (
    <Button {...props({ danger: true })} />
  ))
  .add('disabled', () => (
    <Button {...props({ disabled: true })} />
  ))
  .add('hidden', () => (
    <Button {...props({ hidden: true })} />
  ))
  .add('with icon', () => (
    <Button
      {...props({
        bland: true,
        children: <>
          <Icon name={select('children/icon', icons, icons.edit)} /> {text('children/text', 'Edit')}
        </>,
      })}
    />
  ))
  .add('as link', () => (
    <Button
      {...props()}
      as='a'
      href={text('href', 'https://rocket.chat')}
      target={text('target', '_blank')}
      rel={text('rel', 'noopener noreferrer')}
    />
  ))
  .add('square', () => (
    <Button {...props({ square: true, children: <Icon name={select('children/icon', icons, icons.plus)} /> })} />
  ));
