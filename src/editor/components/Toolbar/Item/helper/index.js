// @flow
import type { Monitor, Connector } from 'types/react-dnd'

export const source = {
  beginDrag({ insert, ...props }: { layoutMode(): void, insert: Object }) {
    props.layoutMode()
    return {
      node: insert,
      rawNode: () => insert,
      ...props
    }
  },

  endDrag({ id }: { id: string }, monitor: Monitor) {
    const item = monitor.getItem()
    if (monitor.didDrop()) {
      item.editMode()
      // If the item drop occurred deeper down the tree, don't do anything
      return
    }
    item.clearHover()
    item.insertMode()
  }
}

export const collect = (connect: Connector, monitor: Monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})
