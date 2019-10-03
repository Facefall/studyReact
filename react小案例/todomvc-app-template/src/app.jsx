window.App = class App extends React.Component{
	constructor(props) {
		super(props);

	}
	state = {
		list:[
			{
				name:'海绵宝宝',
				id:Math.random(),
				is_finish:false
			},
			{
				name:'派大星',
				id:Math.random(),
				is_finish:false
			},
			{
				name:'蟹老板',
				id:Math.random(),
				is_finish:false
			}
		]
	};

	handleRemoveItem = (index) => {
		let list = this.state.list;
		list.splice(index,1);
		this.setState({
			list:list
		});
	};

	handleKeyDown = (e) => {
		// console.log(e);
		console.log(123);
		const {target,keyCode} = e;
		if (keyCode !== 13)	return;


		let list = this.state.list;
		let txt = target.value.trim();
		if (txt.length == 0)	return;

		list.push({
			name : txt,
			id : Math.random(),
			is_finish:false
		});
		this.setState({
			list:list
		});
		target.value = "";
	};

	handleFinish = (index)=>{
		const list = this.state.list;
		list[index].is_finish = !list[index].is_finish;
		this.setState({
			list
		});
	};
	render() {
		return (
			<div>
				<section className="todoapp">
					<Head
						KeyDown={this.handleKeyDown}
					></Head>
					<Main
						Finish={this.handleFinish}
						handleRemoveItem={this.handleRemoveItem}
						data={this.state}
					></Main>
				</section>
				<Info></Info>
			</div>
		);
	}
};
