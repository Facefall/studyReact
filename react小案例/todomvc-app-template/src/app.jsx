window.App = class App extends React.Component{
	render() {
		return (
			<div>
				<section className="todoapp">
					<Head></Head>
					<Main></Main>
				</section>
				<Info></Info>
			</div>
		);
	}
};
