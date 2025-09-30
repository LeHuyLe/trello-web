import React from 'react'
import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '@/utils/sorts'
import { DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/ItemCard'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG:COLUMN',
  CARD: 'ACTIVE_DRAG:CARD'
}

function BoardContent( { board } ) {


  //yeu cau chuot di chuyen 10px thi moi kich hoat event, fix viec click sex goi even
  const mousesensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  // nhan giu 250ms va dung sai cam ung moi kich hoat event
  const touchsensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })
  // dung 2 sensor de ho tro ca may tinh va dien thoai
  const mysensors = useSensors( mousesensor, touchsensor)

  const [orderedColumnsState, setOrderedColumnsState] = React.useState([])
  // cung 1 thoi diem chi co 1 item dc keo tha laf conlumn or card
  const [activeDragItemId, setActiveDragItemId] = React.useState(null)
  const [activeDragItemType, setActiveDragItemType] = React.useState(null)
  const [activeDragItemData, setActiveDragItemData] = React.useState(null)

  React.useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOrderedColumnsState(orderedColumns)
  }, [board])
  //trigger khi bat dau keo 1 phan tu column hoac card
  const HandleDragStart = (event) => {
    //console.log('HandleDragStart:', event)
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
  }
  // trigger khi ket thuc keo 1 phaan tu
  const HandleDragEnd = (event) => {

    const { active, over } = event
    // khi keo ra ngoai thi over = null return luon de han che loi
    if (!over) return
    //neu vi tri keo tha khac vi tri ban dau
    if (active.id !== over.id)
    {
      //lay vi tri cu tu active
      const oldIndex = orderedColumnsState.findIndex(c => c._id === active.id)
      // lay vi tri moi tu over
      const newIndex = orderedColumnsState.findIndex(c => c._id === over.id)
      //sau do thay doi vi tri trong mang bang ham arrayMove cua dndkit
      const dndOrderedColumns = arrayMove(orderedColumnsState, oldIndex, newIndex)
      // const dndColumnOrderIds = dndOrderedColumns.map(c => c._id)
      // console.log(dndOrderedColumns)
      // console.log(dndColumnOrderIds)
      // cap nhat lai state
      setOrderedColumnsState(dndOrderedColumns)

    }
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)

  }

  /**
 * drop animation: khi tha phan tu thi se co hieu ung animation
 */
  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: { active: { opacity: '0.2' } }
    })
  }
  return (
    <DndContext
      onDragEnd={HandleDragEnd}
      onDragStart={HandleDragStart}
      sensors={mysensors}
    >
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.BoardContentHeight,
        p:'10px 0'
      }}>
        <ListColumns columns={orderedColumnsState} />
        {/* set phan tu giu cho cho dndkit */}
        <DragOverlay dropAnimation={customDropAnimation}>
          {(!activeDragItemType) && null }
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) &&
          <Column column={activeDragItemData} />}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) &&
          <Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent
