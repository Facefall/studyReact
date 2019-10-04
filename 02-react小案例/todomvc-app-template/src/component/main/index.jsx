window.Main = class Main extends React.Component{
	constructor(props) {
		super(props);

	}

	render() {
		let list = this.props.data.list;
		// console.log(list,list.length);
		return (
			<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{
						list.length > 0 && list.map((item,index)=>{
							// console.log(item, index);
							return(
								<li key={index} className={item.is_finish? "completed":""}>
									<div className="view">
										<input
											onClick={this.props.Finish.bind(this,index)}
											className="toggle"
											type="checkbox"  />
										<label>{item.name}</label>
										<button
											onClick={this.props.handleRemoveItem.bind(this,index)}
											className="destroy"/>
									</div>
									<input className="edit" defaultValue="Rule the web" />
								</li>
							)
						})
					}
				</ul>
			</section>
		);
	}
};


