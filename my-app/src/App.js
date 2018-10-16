/**
 * Created by ou on 2018/7/24.
 */
import React from 'react';
import { Provider } from 'react-redux'
import ErrorContainer from './components/container/ErrorContainer';
import configureStore from './store/index';
import Weather from './components/weather/weather';

const initState = {
	fetchStatus: {
		isFetching: false,
		isError: false,
		errMsg: ''
	},
	city: '深圳',
	cityList: [],
	cityWeather: {}
}
const store = configureStore(initState);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.clickBtn = this.clickBtn.bind(this);
    }
    clickBtn() {
        console.log(1111, this)
    }
    render() {
        return (
          <Provider store={store} >
            <ErrorContainer>
                <div>
                    <button onClick={this.clickBtn}>test</button>
                </div>
                <Weather/>
            </ErrorContainer>
          </Provider>
        )
    }
}
export default App;