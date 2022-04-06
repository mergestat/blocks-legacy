import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from './Alert';

export default {
  title: 'Molecules/Alert',
  component: Alert,
  argTypes: {},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Alert Title',
  children: 'Alert Content',
}

export const WarningLight = Template.bind({});
WarningLight.args = {
  type: 'warning',
  closeable: false,
  theme: 'light',
  title: 'Alert Title',
  children: 'Alert Content',
}

export const WarningLightMessageOnly = Template.bind({});
WarningLightMessageOnly.args = {
  type: 'warning',
  closeable: false,
  theme: 'light',
  children: 'Alert Content',
}

export const WarningLightTitleOnly = Template.bind({});
WarningLightTitleOnly.args = {
  type: 'warning',
  closeable: false,
  theme: 'light',
  title: 'Alert Title'
}

export const InfoLight = Template.bind({});
InfoLight.args = {
  type: 'info',
  closeable: false,
  theme: 'light',
  title: 'Alert Title',
  children: 'Alert Content',
}

export const SuccessLight = Template.bind({});
SuccessLight.args = {
  type: 'success',
  closeable: false,
  theme: 'light',
  title: 'Alert Title',
  children: 'Alert Content',
}

export const ErrorLight = Template.bind({});
ErrorLight.args = {
  type: 'error',
  closeable: false,
  theme: 'light',
  title: 'Alert Title',
  children: 'Alert Content',
}

export const WarningDark = Template.bind({});
WarningDark.args = {
  type: 'warning',
  closeable: false,
  theme: 'dark',
  title: 'Alert Title',
  children: 'Alert Content',
}

export const InfoDark = Template.bind({});
InfoDark.args = {
  type: 'info',
  closeable: false,
  theme: 'dark',
  title: 'Alert Title',
  children: 'Alert Content',
}

export const SuccessDark = Template.bind({});
SuccessDark.args = {
  type: 'success',
  closeable: false,
  theme: 'dark',
  title: 'Alert Title',
  children: 'Alert Content',
}

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  type: 'error',
  closeable: false,
  theme: 'dark',
  title: 'Alert Title',
  children: 'Alert Content',
}

export const InlineAlertInfo = Template.bind({});
InlineAlertInfo.args = {
  type: 'info',
  isInline: true,
  children: 'This is an inline alert message',
}

export const InlineAlertSuccess = Template.bind({});
InlineAlertSuccess.args = {
  type: 'success',
  isInline: true,
  children: 'This is an inline alert message',
}

export const InlineAlertWarning = Template.bind({});
InlineAlertWarning.args = {
  type: 'warning',
  isInline: true,
  children: 'This is an inline alert message',
}

export const InlineAlertError = Template.bind({});
InlineAlertError.args = {
  type: 'error',
  isInline: true,
  children: 'This is an inline alert message',
}
