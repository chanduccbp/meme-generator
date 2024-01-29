import {Component} from 'react'
import {
  AppContainer,
  MemeGeneratorContainer,
  MemeContainer,
  FormContainer,
  InputText,
  SubmitButton,
  LabelElement,
  InputElement,
  SelectElement,
  MainHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeImageUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  onSubmitMemeGeneratorDetails = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
    })
  }

  render() {
    const {
      fontSize,
      topText,
      bottomText,
      backgroundImageUrl,
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    return (
      <AppContainer>
        <MainHeading>Meme Generator</MainHeading>
        <MemeGeneratorContainer>
          <FormContainer onSubmit={this.onSubmitMemeGeneratorDetails}>
            <LabelElement htmlFor="image-url-input">Image URL</LabelElement>
            <InputElement
              type="text"
              placeholder="Enter the Image URL"
              id="image-url-input"
              value={backgroundImageUrlInput}
              onChange={this.onChangeImageUrl}
            />
            <LabelElement htmlFor="top-text-input">Top Text</LabelElement>
            <InputElement
              type="text"
              placeholder="Enter the Top Text"
              id="top-text-input"
              value={topTextInput}
              onChange={this.onChangeTopText}
            />
            <LabelElement htmlFor="bottom-text-input">Bottom Text</LabelElement>
            <InputElement
              type="text"
              placeholder="Enter the Bottom Text"
              id="bottom-text-input"
              value={bottomTextInput}
              onChange={this.onChangeBottomText}
            />
            <LabelElement htmlFor="select">Font Size</LabelElement>
            <SelectElement
              value={fontSizeInput}
              id="select"
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(eachObj => (
                <option key={eachObj.optionId} value={eachObj.optionId}>
                  {eachObj.displayText}
                </option>
              ))}
            </SelectElement>
            <SubmitButton type="submit">Generate</SubmitButton>
          </FormContainer>
          <MemeContainer bgImage={backgroundImageUrl} data-testid="meme">
            <InputText fontSize={fontSize}> {topText}</InputText>
            <InputText fontSize={fontSize}> {bottomText} </InputText>
          </MemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
