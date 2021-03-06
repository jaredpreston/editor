// @flow
import React, { Component } from 'react'
import { shouldPureComponentUpdate } from 'src/editor/helper/shouldComponentUpdate'
import Row from 'src/editor/components/Row'
import type { ComponentizedCell } from 'types/editable'

class Rows extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate
  props: ComponentizedCell

  render() {
    const { node: { rows = [] }, editable, id, ancestors = [] } = this.props

    return (
      <div>
        {rows.map((r: string) => <Row editable={editable} ancestors={[...ancestors, id]} id={r} key={r} />)}
      </div>
    )
  }
}

export default Rows
