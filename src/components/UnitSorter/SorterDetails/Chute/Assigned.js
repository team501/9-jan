import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

import Assigned from '../../../../images/Assigned_icon.png';
const content = {
	    paddingLeft: '15px',
	    textAlign: 'left'
}

const imageGrid = {
		padding: '5px'
};

const parentGrid = {
		padding: '18px'
};

class index extends Component { 
	render() { 
		return (
				 <Grid style={parentGrid} container>
				 	<Grid style={imageGrid} item xs={3} sm={3}> <img src={Assigned} /> </Grid>
				 	<Grid style={content} item xs={9} sm={9}>
					 	<Grid item xs={12} sm={12} style={{fontSize: '24px'}}> Assigned </Grid>
					 	<Grid item xs={12} sm={12} style={{fontSize: '24px'}}> 700 </Grid>
					</Grid>
				 </Grid>
		);}
}
export default index;