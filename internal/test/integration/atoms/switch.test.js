import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Fixture from './switch.fixture'
import customIdTest from '../helpers/custom-id'
import eventHandlerTest from '../helpers/event-handler'

test('Accepts custom id prop', () => {
  customIdTest(Fixture, 'switch')
})

/*
There's a bug here. onClick overwrites the onClick on Switch.Element
*/
test('Calls custom event handler', () => {
  eventHandlerTest(Fixture, 'switch')
})

test('Calls onToggle', () => {
  const body = render(<Fixture />)

  const element = body.getByTestId('switch')

  fireEvent.click(element)

  expect(Fixture.customToggle).toHaveBeenCalledTimes(1)
})