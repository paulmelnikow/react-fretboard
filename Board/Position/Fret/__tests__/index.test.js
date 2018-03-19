import React from 'react'

import Fret from '../index'


describe('Fret component', () => {
  const props = {
    note: 'E2',
  }
  const defaultContext = {
    type: 'boxes',
    showNotes: true,
    showOctaves: true,
    showSelection: true,
    selectedNotes: ['C4'],
  }

  it('defaultContext, snapshot', () => {
    const wrapper = shallow(<Fret {...props} />, { context: defaultContext })
    expect(wrapper).toMatchSnapshot()
  })

  it('type=strings, showNotes-false, snapshot', () => {
    const context = { ...defaultContext, type: 'strings', showNotes: false }
    const wrapper = shallow(<Fret {...props} />, { context })
    expect(wrapper).toMatchSnapshot()
  })

  it('showSelection=false, note is selected, snapshot', () => {
    const context = {
      ...defaultContext,
      showSelection: false,
      selectedNotes: ['E2'],
    }
    const wrapper = shallow(<Fret {...props} />, { context })
    expect(wrapper).toMatchSnapshot()
  })

  it('note is selected, showOctaves=false, snapshot', () => {
    const context = {
      ...defaultContext,
      showOctaves: false,
      selectedNotes: ['E2'],
    }
    const wrapper = shallow(<Fret {...props} />, { context })
    expect(wrapper).toMatchSnapshot()
  })
})
