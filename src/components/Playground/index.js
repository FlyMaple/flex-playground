import React, { Component } from 'react'

class Playground extends Component {
  colors = ['#ffd2d2', '#9acdf9', '#a9ffab', '#cc89ff', '#6672ff', '#66ffa3', '#e0ff66', '#ffc266', '#ff7758', '#afa6fd', '#adaaaa']

  constructor(props) {
    super(props)

    this.state = {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch'
    }
  }

  // flex-direction
  flexDirectionChange = (event) => {
    this.setState({
      flexDirection: event.target.value
    })
  }

  getFlexDirectionStyle = () => {
    const { flexDirection } = this.state

    return {
      flexDirection
    }
  }

  isFlexDirectionChecked = (value) => {
    return value === this.state.flexDirection
  }

  // flex-wrap
  flexWrapChange = (event) => {
    this.setState({
      flexWrap: event.target.value
    })
  }

  getFlexWrapStyle = () => {
    const { flexWrap } = this.state

    return {
      flexWrap
    }
  }

  isFlexWrapChecked = (value) => {
    return value === this.state.flexWrap
  }

  // justify-content
  justifyContentChange = (event) => {
    this.setState({
      justifyContent: event.target.value
    })
  }

  getJustifyContentStyle = () => {
    const { justifyContent } = this.state

    return {
      justifyContent
    }
  }

  isJustifyContentChecked = (value) => {
    return value === this.state.justifyContent
  }

  // align-items
  alignItemsChange = (event) => {
    this.setState({
      alignItems: event.target.value
    })
  }

  getAlignItemsStyle = () => {
    const { alignItems } = this.state

    return {
      alignItems,
      height: '500px'
    }
  }

  isAlignItemsChecked = (value) => {
    return value === this.state.alignItems
  }

  // align-self
  alignSelfChange = (event) => {
    const { target } = event
    const value = target.selectedOptions[0].value

    target.parentElement.parentElement.style.alignSelf = value
  }

  // align-content
  alignContentChange = (event) => {
    this.setState({
      alignContent: event.target.value
    })
  }

  getAlignContentStyle = () => {
    const { alignContent } = this.state

    return {
      alignContent
    }
  }

  isAlignContentChecked = (value) => {
    return value === this.state.alignContent
  }

  // order
  orderChange = (event) => {
    const { target } = event

    target.parentElement.style.order = target.value
  }

  // flex
  flexGrowChange = (event) => {
    const { target } = event
    const value = target.value === '' ? '' : target.value

    target.parentElement.parentElement.style.flexGrow = value
  }

  flexShrinkChange = (event) => {
    const { target } = event
    const value = target.value === '' ? '' : target.value

    target.parentElement.parentElement.style.flexShrink = value ? value : ''
  }

  flexBasisChange = (event) => {
    const { target } = event
    const value = target.value === '' ? '' : target.value

    target.parentElement.parentElement.style.flexBasis = value ? value : ''
  }

  widthChange = (event) => {
    const { target } = event
    const value = target.value === '' ? '' : target.value

    target.parentElement.parentElement.style.width = value ? value : ''
  }

  render() {
    return (
      <div className="playground">
        {/* flex-direction */}
        <div className="flex-direction block">
          <div className="header">
            <span className="title">flex-direction: </span>
            <label htmlFor="flexDirectionRow">
              <input id="flexDirectionRow" type="radio" name="flexDirection" value="row" onChange={this.flexDirectionChange} checked={this.isFlexDirectionChecked('row')} />
              <span>row(default)</span>
            </label>
            <label htmlFor="flexDirectionRowReverse">
              <input id="flexDirectionRowReverse" type="radio" name="flexDirection" value="row-reverse" onChange={this.flexDirectionChange} checked={this.isFlexDirectionChecked('row-reverse')} />
              <span>row-reverse</span>
            </label>
            <label htmlFor="flexDirectionColumn">
              <input id="flexDirectionColumn" type="radio" name="flexDirection" value="column" onChange={this.flexDirectionChange} checked={this.isFlexDirectionChecked('column')} />
              <span>column</span>
            </label>
            <label htmlFor="flexDirectionColumnReverse">
              <input id="flexDirectionColumnReverse" type="radio" name="flexDirection" value="column-reverse" onChange={this.flexDirectionChange} checked={this.isFlexDirectionChecked('column-reverse')} />
              <span>column-reverse</span>
            </label>
          </div>

          <div className="body" style={this.getFlexDirectionStyle()}>
            {
              this.colors.slice(0, 5).map((color, i) => {
                const style = {
                  backgroundColor: color
                }

                return (
                  <div key={color} className="box" style={style}>{i}</div>
                )
              })
            }
          </div>
        </div>

        {/* flex-wrap */}
        <div className="flex-wrap block">
          <div className="header">
            <span className="title">flex-wrap: </span>
            <label htmlFor="flexWrapNoWrap">
              <input id="flexWrapNoWrap" type="radio" name="flexWrap" value="nowrap" onChange={this.flexWrapChange} checked={this.isFlexWrapChecked('nowrap')} />
              <span>nowrap(default)</span>
            </label>
            <label htmlFor="flexWrapWrap">
              <input id="flexWrapWrap" type="radio" name="flexWrap" value="wrap" onChange={this.flexWrapChange} checked={this.isFlexWrapChecked('wrap')} />
              <span>wrap</span>
            </label>
            <label htmlFor="flexWrapWrapReverse">
              <input id="flexWrapWrapReverse" type="radio" name="flexWrap" value="wrap-reverse" onChange={this.flexWrapChange} checked={this.isFlexWrapChecked('wrap-reverse')} />
              <span>wrap-reverse</span>
            </label>
          </div>

          <div className="body" style={this.getFlexWrapStyle()}>
            {
              this.colors.map((color, i) => {
                const style = {
                  backgroundColor: color
                }

                return (
                  <div key={color} className="box" style={style}>{i}</div>
                )
              })
            }
          </div>
        </div>


        {/* justify-content */}
        <div className="justify-content block">
          <div className="header">
            <span className="title" style={{
              marginBottom: '20px',
              float: 'left'
            }}>justify-content: </span>
            <label htmlFor="justifyContentFlexStart">
              <input id="justifyContentFlexStart" type="radio" name="justifyContent" value="flex-start" onChange={this.justifyContentChange} checked={this.isJustifyContentChecked('flex-start')} />
              <span>flex-start(default)</span>
            </label>
            <label htmlFor="justifyContentFlexEnd">
              <input id="justifyContentFlexEnd" type="radio" name="justifyContent" value="flex-end" onChange={this.justifyContentChange} checked={this.isJustifyContentChecked('flex-end')} />
              <span>flex-end</span>
            </label>
            <label htmlFor="justifyContentCenter">
              <input id="justifyContentCenter" type="radio" name="justifyContent" value="center" onChange={this.justifyContentChange} checked={this.isJustifyContentChecked('center')} />
              <span>center</span>
            </label>
            <label htmlFor="justifyContentSpaceBetween">
              <input id="justifyContentSpaceBetween" type="radio" name="justifyContent" value="space-between" onChange={this.justifyContentChange} checked={this.isJustifyContentChecked('space-between')} />
              <span>space-between</span>
            </label>
            <label htmlFor="justifyContentSpaceAround">
              <input id="justifyContentSpaceAround" type="radio" name="justifyContent" value="space-around" onChange={this.justifyContentChange} checked={this.isJustifyContentChecked('space-around')} />
              <span>space-around</span>
            </label>
          </div>

          <div className="body" style={this.getJustifyContentStyle()}>
            {
              this.colors.slice(0, 3).map((color, i) => {
                const style = {
                  backgroundColor: color
                }

                return (
                  <div key={color} className="box" style={style}>{i}</div>
                )
              })
            }
          </div>
        </div>


        {/* align-items */}
        <div className="align-items block">
          <div className="header">
            <span className="title">align-items: </span>
            <label htmlFor="alignItemsStretch">
              <input id="alignItemsStretch" type="radio" name="alignItems" value="stretch" onChange={this.alignItemsChange} checked={this.isAlignItemsChecked('stretch')} />
              <span>stretch(default)</span>
            </label>
            <label htmlFor="alignItemsFlexStart">
              <input id="alignItemsFlexStart" type="radio" name="alignItems" value="flex-start" onChange={this.alignItemsChange} checked={this.isAlignItemsChecked('flex-start')} />
              <span>flex-start</span>
            </label>
            <label htmlFor="alignItemsFlexEnd">
              <input id="alignItemsFlexEnd" type="radio" name="alignItems" value="flex-end" onChange={this.alignItemsChange} checked={this.isAlignItemsChecked('flex-end')} />
              <span>flex-end</span>
            </label>
            <label htmlFor="alignItemsCenter">
              <input id="alignItemsCenter" type="radio" name="alignItems" value="center" onChange={this.alignItemsChange} checked={this.isAlignItemsChecked('center')} />
              <span>center</span>
            </label>
            <label htmlFor="alignItemsBaseline">
              <input id="alignItemsBaseline" type="radio" name="alignItems" value="baseline" onChange={this.alignItemsChange} checked={this.isAlignItemsChecked('baseline')} />
              <span>baseline</span>
            </label>
          </div>

          <div className="body" style={this.getAlignItemsStyle()}>
            <div className="box noHeight" style={{
              backgroundColor: this.colors[0]
            }}>0</div>
            <div className="box noHeight" style={{
              backgroundColor: this.colors[1]
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A odio voluptatibus rerum quisquam harum.</div>
            <div className="box noHeight" style={{
              backgroundColor: this.colors[2],
              fontSize: '36px'
            }}>2</div>
            <div className="box noHeight" style={{
              backgroundColor: this.colors[3]
            }}>3</div>
            <div className="box noHeight" style={{
              backgroundColor: this.colors[4]
            }}>4</div>
            <div className="box noHeight" style={{
              backgroundColor: this.colors[5],
              fontSize: '36px'
            }}>5</div>
            <div className="box noHeight" style={{
              backgroundColor: this.colors[6]
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A odio voluptatibus rerum quisquam harum.</div>
            <div className="box noHeight" style={{
              backgroundColor: this.colors[7]
            }}>7</div>
            <div className="box noHeight" style={{
              backgroundColor: this.colors[8]
            }}>8</div>
          </div>
        </div>


        {/* align-self */}
        <div className="align-self block">
          <div className="header">
            <span className="title">align-content: stretch; align-self:</span>
          </div>

          <div className="body" style={this.getAlignItemsStyle()}>
            <div className="box noHeight" style={{
              backgroundColor: this.colors[0],
              flexWrap: 'wrap',
              alignItems: 'center',
              width: '150px'
            }}>
              <div>
                align-self:
              <select style={{
                  width: '100%'
                }} onChange={this.alignSelfChange}>
                  <option value="stretch">stretch(default)</option>
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                  <option value="baseline">baseline</option>
                </select>
              </div>
            </div>
            <div className="box noHeight" style={{
              backgroundColor: this.colors[1],
              flexWrap: 'wrap',
              alignContent: 'center',
              width: '150px'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A odio voluptatibus rerum quisquam harum.
              <div style={{
                fontSize: '13px'
              }}>
                align-self:
              <select style={{
                  width: '100%',
                }} onChange={this.alignSelfChange}>
                  <option value="stretch">stretch(default)</option>
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                  <option value="baseline">baseline</option>
                </select>
              </div>
            </div>
            <div className="box noHeight" style={{
              backgroundColor: this.colors[2],
              fontSize: '36px',
              flexWrap: 'wrap',
              alignContent: 'center',
              width: '150px'
            }}>
              <div>2</div>
              <div style={{
                fontSize: '13px'
              }}>
                align-self:
              <select style={{
                  width: '100%',
                }} onChange={this.alignSelfChange}>
                  <option value="stretch">stretch(default)</option>
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                  <option value="baseline">baseline</option>
                </select>
              </div>
            </div>
          </div>
        </div>


        {/* align-content */}
        <div className="align-content block">
          <div className="header">
            <span className="title" style={{
              marginBottom: '20px',
              float: 'left'
            }}>align-content: </span>
            <label htmlFor="alignContentStretch">
              <input id="alignContentStretch" type="radio" name="alignContent" value="stretch" onChange={this.alignContentChange} checked={this.isAlignContentChecked('stretch')} />
              <span>stretch(default)</span>
            </label>
            <label htmlFor="alignContentFlexStart">
              <input id="alignContentFlexStart" type="radio" name="alignContent" value="flex-start" onChange={this.alignContentChange} checked={this.isAlignContentChecked('flex-start')} />
              <span>flex-start</span>
            </label>
            <label htmlFor="alignContentFlexEnd">
              <input id="alignContentFlexEnd" type="radio" name="alignContent" value="flex-end" onChange={this.alignContentChange} checked={this.isAlignContentChecked('flex-end')} />
              <span>flex-end</span>
            </label>
            <label htmlFor="alignContentCenter">
              <input id="alignContentCenter" type="radio" name="alignContent" value="center" onChange={this.alignContentChange} checked={this.isAlignContentChecked('center')} />
              <span>center</span>
            </label>
            <label htmlFor="alignContentSpaceBetween">
              <input id="alignContentSpaceBetween" type="radio" name="alignContent" value="space-between" onChange={this.alignContentChange} checked={this.isAlignContentChecked('space-between')} />
              <span>space-between</span>
            </label>
            <label htmlFor="alignContentSpaceAround">
              <input id="alignContentSpaceAround" type="radio" name="alignContent" value="space-around" onChange={this.alignContentChange} checked={this.isAlignContentChecked('space-around')} />
              <span>space-around</span>
            </label>
          </div>

          <div className="body" style={this.getAlignContentStyle()}>
            {
              this.colors.map((color, i) => {
                const style = {
                  backgroundColor: color
                }

                return (
                  <div key={color} className="box" style={style}>{i}</div>
                )
              })
            }
          </div>
        </div>


        {/* order */}
        <div className="order block">
          <div className="header">
            <span className="title">order: </span>
          </div>

          <div className="body">
            {
              this.colors.map((color, i) => {
                const style = {
                  backgroundColor: color,
                  order: i
                }

                return (
                  <div key={color} className="box" style={style}>
                    order: <input type="number" defaultValue={i} onChange={this.orderChange} />
                  </div>
                )
              })
            }
          </div>
        </div>


        {/* flex */}
        <div className="flex block">
          <div className="header">
            <span className="title">flex: </span>
          </div>

          <div className="body">
            {
              this.colors.slice(0, 3).map((color, i) => {
                const style = {
                  backgroundColor: color,
                }

                return (
                  <div key={color} className="box noHeight" style={style}>
                    <div>
                      flex-grow:<input type="number" defaultValue="0" onChange={this.flexGrowChange} />
                    </div>
                    <div>
                      flex-shrink:<input type="number" defaultValue="1" onChange={this.flexShrinkChange} />
                    </div>
                    <div>
                      flex-basis:<input type="text" defaultValue="auto" onChange={this.flexBasisChange} />
                    </div>
                    <div>
                      width:<input type="text" defaultValue="100px" onChange={this.widthChange} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Playground