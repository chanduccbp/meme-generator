import {Component} from 'react'
import {MemeContainer} from './styledComponents'

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
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
  }

  onSubmitMemeGenetaorDetails = event => {}

  render() {
    const {fontSize} = this.state

    return (
      <div>
        <h1>Meme Generator</h1>
        <form onSubmit={this.onSubmitMemeGenetaorDetails}>
          <label htmlFor="image-url-input">Image URL</label>
          <input
            type="text"
            placeholder="Enter the Image URL"
            id="image-url-input"
          />
          <label htmlFor="top-text-input">Top Text</label>
          <input
            type="text"
            placeholder="Enter the Top Text"
            id="top-text-input"
          />
          <label htmlFor="bottom-text-input">Bottom Text</label>
          <input
            type="text"
            placeholder="Enter the Bottom Text"
            id="bottom-text-input"
          />
          <label htmlFor="select">Font Size</label>
          <select value={fontSize} id="select">
            {fontSizesOptionsList.map(eachObj => (
              <option key={eachObj.optionId} value={eachObj.optionId}>
                {eachObj.displayText}
              </option>
            ))}
          </select>
          <button type="submit">Generate</button>
        </form>
      </div>
    )
  }
}

export default MemeGenerator
