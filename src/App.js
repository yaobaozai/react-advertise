import React from 'react'
import {Button} from 'antd-mobile'

class App extends React.Component{
  render() {
    return (
    	<div>
    		<h2>骑兵团</h2>
      	<曾尧 老大="曾尧"></曾尧>
      	<Button type="primary">新兵入伍</Button>
    	</div>

      
    ) 
  } 
}

class 曾尧 extends React.Component{
	render() {
		return (
			<h2 props="老大">团长是 {this.props.老大}</h2>
			)
	}
}

export default App 
