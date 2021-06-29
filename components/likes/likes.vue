<template>
	<view>
		<view class="icons" @click.stop="likeTap">
			<uni-icons :type="`${like?'heart-filled':'heart'}`" size="20" color="#f07373"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name:"likes",
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			},
			types: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				like:false
			};
		},
		watch:{
			item(newVal){
				this.like = this.item.is_like
			}
		},
		created() {
			this.like = this.item.is_like
		},
		methods:{
			likeTap(){
				this.like = !this.like
				this.setUpdateLike()
			},
			setUpdateLike() {
				uni.showLoading()
				console.log(this.item,'this.item._id')
				this.$api.update_like({
					user_id:'60a1e22e4c73e70001a8b6d2',
					article_id:this.item._id
				}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title:this.like?'收藏成功':'取消收藏',
						icon:'none'
					})
					uni.$emit('update_article',this.types)
					console.log(res)
				}).catch(()=>{
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
.icons {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 0;
		top: 0;
		width: 20px;
		height: 20px;
	}
</style>
