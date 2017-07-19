import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'; 
import axios from 'axios'; 

class SignUpForm extends Component {

	state = { phone : '' };

	handleSubmit = () => {
		
	}

	render() {
		return(
			<View>
					<View style={{ marginBottom: 10 }} >
						<FormLabel>Enter Phone Number</FormLabel>
						<FormInput 
							value={this.state.phone} 
							onChangeText={phone => this.setState({ phone })}
						/>
					</View>
				<Button 
					title="Submit" 
					onPress={this.handleSubmit}
				/>
			</View>
		);
	}
}

export default SignUpForm; 