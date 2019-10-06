import React,{Component} from "react";

class Head extends Component{
	constructor(props) {
		super(props);
		this.state = {
			onKeyDown : props.KeyDown
		}
	}

	render() {
		return (
			<header className="header">
				<h1>todos</h1>
				<input
					// onKeyDown={this.state.onKeyDown}
					onKeyDown={this.props.KeyDown}
					className="new-todo"
					placeholder="What needs to be done?"
					autoFocus  />
			</header>
		);
	}
};
export default Head;
