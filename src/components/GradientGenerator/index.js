import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionsDescription,
  GradientDirectionList,
  ColorsPickersDescription,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerate = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionsDescription>Choose Direction</DirectionsDescription>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </GradientDirectionList>
          <ColorsPickersDescription>Pick the Colors</ColorsPickersDescription>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <CustomInput
                onChange={this.onChangeFromColor}
                value={fromColorInput}
                type="color"
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomInput
                onChange={this.onChangeToColor}
                value={toColorInput}
                type="color"
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator

// import {Component} from 'react'

// import {
//   Heading,
//   ChooseElement,
//   ContainerGradient,
//   UnListElement,
//   PickColor,
//   FormContainer,
//   ContainerColor,
//   GenerateButton,
//   InputElement,
//   ColorElement,
// } from './styledComponents'

// import GradientDirectionItem from '../GradientDirectionItem'

// const gradientDirectionsList = [
//   {directionId: 'TOP', value: 'top', displayText: 'Top'},
//   {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
//   {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
//   {directionId: 'LEFT', value: 'left', displayText: 'Left'},
// ]

// class GradientGenerator extends Component {
//   state = {
//     toLeft: '#8ae323',
//     toRight: '#014f7b',
//     PositionValue: gradientDirectionsList[0].value,
//     isRenderDisplay: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
//   }

//   onChangeColorOne = event => {
//     this.setState({toLeft: event.target.value})
//   }

//   onChangeColorTwo = event => {
//     this.setState({toRight: event.target.value})
//   }

//   onClickEachPosition = value => {
//     this.setState({PositionValue: value})
//   }

//   onClickSubmit = () => {
//     const {PositionValue, toLeft, toRight} = this.state
//     this.setState({
//       isRenderDisplay: `to ${PositionValue}, ${toLeft},${toRight}`,
//     })
//   }

//   render() {
//     const {toLeft, toRight, PositionValue, isRenderDisplay} = this.state
//     return (
//       <ContainerGradient
//         isRenderDisplay={isRenderDisplay}
//         data-testid="gradientGenerator"
//       >
//         <FormContainer>
//           <Heading>Generate a CSS Color Gradient</Heading>
//           <ChooseElement>Choose Direction</ChooseElement>
//           <UnListElement>
//             {gradientDirectionsList.map(eachObject => (
//               <GradientDirectionItem
//                 eachDirection={eachObject}
//                 key={eachObject.directionId}
//                 onClickEachPosition={this.onClickEachPosition}
//                 isActive={eachObject.value === PositionValue}
//               />
//             ))}
//           </UnListElement>
//           <PickColor>Pick the Colors</PickColor>
//           <ContainerColor>
//             <ColorElement>{toLeft}</ColorElement>
//             <ColorElement>{toRight}</ColorElement>
//           </ContainerColor>
//           <ContainerColor>
//             <InputElement
//               type="color"
//               onChange={this.onChangeColorOne}
//               value={toLeft}
//             />
//             <InputElement
//               type="color"
//               onChange={this.onChangeColorTwo}
//               value={toRight}
//             />
//           </ContainerColor>
//           <GenerateButton onClick={this.onClickSubmit}>Generate</GenerateButton>
//         </FormContainer>
//       </ContainerGradient>
//     )
//   }
// }

// export default GradientGenerator
