export default function $http(options) {
	const {
		url,
		data
	} = options
	const dataObj = {
		user_id: '60a1e22e4c73e70001a8b6d2',
		...data
	}
	return new Promise((reslove, reject) => {
		uniCloud.callFunction({
			name: url,
			data: dataObj
		}).then((res) => {

			if (res.result.code === 200) {
				// .then
				reslove(res.result)
			} else {
				// catch
				reject(res.result)
			}

		}).catch((err) => {
			reject(err)
		})
	})
}
