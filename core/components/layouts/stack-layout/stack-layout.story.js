import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import StyledPlaceholder from '../../_helpers/story-layout-placeholder'
import {
  StackLayout,
  RowLayout,
  Heading,
  Paragraph,
  Avatar,
  Icon,
  Code,
  Button,
  TextInput,
  ButtonGroup
} from '@auth0/cosmos'
import { layoutSpacingStoryTest } from '@auth0/cosmos/_helpers/story-layout'

storiesOf('Stack Layout', module).add('Resource list', () => (
  <Example title="Resource list">
    <StackLayout distribution="spaceBetween" space={[1, 1.5, 'none']}>
      <StackLayout space={['none', 1]}>
        <Avatar type="resource" icon="clients" size="large" />
        <RowLayout gutter="none">
          <Heading size={3}>Heading</Heading>
          <Paragraph>This is a subtitle text</Paragraph>
        </RowLayout>
      </StackLayout>

      <StackLayout gutter="small" space={['none', 1]}>
        <Icon name="copy" size="20" color="default" />
        <Code>Some_sort_of_code_goes_here</Code>
      </StackLayout>

      <StackLayout gutter="small">
        <Button
          size="default"
          appearance="default"
          icon="brand-instagram"
          iconAlign="left"
          label="action"
        />
        <Button
          size="default"
          appearance="default"
          icon="brand-instagram"
          iconAlign="left"
          label="action"
        />
      </StackLayout>
    </StackLayout>
  </Example>
))

storiesOf('Stack Layout', module).add('Toolbar', () => (
  <Example title="tool bar">
    <StackLayout gutter="large" distribution="spaceBetween">
      <StackLayout gutter="large">
        <ButtonGroup compressed>
          <Button icon="pencil" />
          <Button icon="copy" />
          <Button icon="delete" />
        </ButtonGroup>

        <StackLayout gutter="small">
          <Button size="default" appearance="default" iconAlign="left">
            Button
          </Button>
          <Button size="default" appearance="default" iconAlign="left">
            Button
          </Button>
        </StackLayout>
      </StackLayout>
      <TextInput placeholder="Search" type="text" size="default" />
    </StackLayout>
  </Example>
))

storiesOf('Stack Layout', module).add('Null children check', () =>
  layoutSpacingStoryTest(StackLayout, 'small')
)

storiesOf('Stack Layout', module).add('Null children with space', () => {
  return (
    <Example title="Conditional children">
      <StackLayout space={['none', 1, 'none']}>
        {null}
        <StyledPlaceholder />
        {null}
      </StackLayout>
    </Example>
  )
})
