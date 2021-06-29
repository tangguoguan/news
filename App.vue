<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.$api.get_user({
				user_id: '60a1e22e4c73e70001a8b6d2'
			}).then((res) => {
				// console.log(res);
				const {
					data
				} = res
				this.$store.dispatch('set_userinfo', data)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import 'components/gaoyia-parse/parse.css';
</style>