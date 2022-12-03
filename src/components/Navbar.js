import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import './Iconcss.css'
import Slider from 'react-input-slider';
import { useState } from 'react'
function Navbar() {
	let z = 1000;
	const [state, setState] = useState({x:0});
	const [state1, setState1] = useState({y:0});
	function up1(x)
	{
		setState1({x:x});
		z = z+state.x * state1.y * 100;

	}
	function up2(y)
	{
		setState1({y:y});
		z = z+state.x * state1.y * 100;

	}
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
				<a className="navbar-brand" href="#">Dashboard</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						{/* <i class="fa fa-plus"></i> */}
						<i className="fa fa-plus-circle iconpos" aria-hidden="true"></i>
						<a className="nav-item nav-link" href="#">Create Course</a>
						<i className="fa fa-eye iconpos" aria-hidden="true"></i>
						<a className="nav-item nav-link" href="#">Preview home page</a>
						<i className="fa fa-eye iconpos" aria-hidden="true"></i>
						<a className="nav-item nav-link" href="#">Preview after home page</a>
						<i className="fa fa-power-off iconpos"></i>
						<a className="nav-item nav-link" href="#">View welcome screen</a>
						<i className="fa fa-user-plus iconpos" aria-hidden="true"></i>
						{/* <!-- Button trigger modal --> */}
						<button type="button" className="btn btn-primary invite" data-toggle="modal" data-target="#exampleModal">
						invite
						</button>
					</div>
				</div>
			</nav>
			

			{/* <!-- Modal --> */}
			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Event cost Calculator</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<div className='row'>
								<div className='col-lg-6'> 
									{/* <Sliderr msg={"Number of invites for event "} x={this.state.x1}  />

									<Sliderr msg = {"Duration Of Event in minutes  "} x={this.state.x2} onChange={({ x }) => this.setState({x2:x})} />
									{console.log(this.state.x2)}
									{"cost will be "} {this.state.x3} */}
									<h6>{"Number of invites for event = "}{state.x}</h6>
									<Slider
										axis="x"
										x={state.x}
										onChange={({ x }) => setState({x:x})}
										/>
										<h6>{"the duration for event in minutes = "}{state1.y}</h6>
									<Slider
										axis="x"
										x={state1.y}
										onChange={({ x }) => setState1({y:x })}
									/>
									<h1>  </h1>
									<h1>   </h1>
									<h1>  </h1>
									<h3 className='cost'>cost is : {(state.x ==0 || state1.y==0) ? 0 : (z+state.x * state1.y * 100)}</h3>
									
								</div>
								<div className='col-lg-6'>
									<PieChart
										data={[
											{ title: 'One', value:100* state.x, color: '#E38627' },
											{ title: 'Two', value: 100*state1.y, color: '#C13C37' },
											{ title: 'Three', value: z+state.x * state1.y * 100, color: '#6A2135' },
										]}
										/>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary" data-dismiss="modal">Proceed Forward</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
	
}
export default Navbar;