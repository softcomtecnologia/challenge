import axios from 'axios'
import config from '../config';

const request = axios.create({
	baseURL: config.apiURL,
	headers: new Headers({
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json'
	})
})

export default request
