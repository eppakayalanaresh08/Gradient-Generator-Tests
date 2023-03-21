import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = gradientDirectionDetails
  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem

// import {ListElement, DisplayButtonText} from './styledComponents'

// const GradientDirectionIt = props => {
//   const {eachDirection, onClickEachPosition, isActive} = props
//   const {displayText, value} = eachDirection
//   const onClickDisplayPosition = () => {
//     onClickEachPosition(value)
//   }
//   console.log(isActive)
//   const inActive = isActive ? 1.0 : 0.5
//   return (
//     <ListElement inActive={inActive}>
//       <DisplayButtonText onClick={onClickDisplayPosition} inActive={inActive}>
//         {displayText}
//       </DisplayButtonText>
//     </ListElement>
//   )
// }
// export default GradientDirectionIt
