import React from 'react'
import { shallow } from 'enzyme'
import { Foo } from 'foo'

test('Foo', () => {
  const component = shallow(
    <Foo />
  )
  expect(component.text()).toBe('Bar')
})
