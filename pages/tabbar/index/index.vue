<template>
	<view class="home">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab :list="tabList" :tabIndex="tabIndex" @tab="tab"></tab>
		<view class="home-list">
			<list :tab="tabList" :activeIndex="activeIndex"  @change="change"></list>
		</view>
	</view>
</template>

<script>
	// import navbar from '@/components/navbar/navbar.vue'
	import {mapState} from 'vuex'
	export default {
		// components:{
		// 	navbar
		// },
		data() {
			return {
				title: 'Hello',
				tabList:[],
				tabIndex:0,
				activeIndex:0
			}
		},
		computed:{
			...mapState(['userinfo'])
		},
		watch:{
			userinfo(){
				this.getLabel()
			}
		},
		onLoad() {
			uni.$on('labelChange', (res)=>{
				this.tabList = []
				this.tabIndex = 0
				this.activeIndex = 0
				this.getLabel()
			})
		},
		methods: {
			change(current){
				this.tabIndex  = current
				this.activeIndex = current
			},
			tab({data, index}){
				console.log(data,'data')
				console.log(index,'index')
				this.activeIndex = index
			},
			getLabel(){
				// 调用云函数
				this.$api.get_label().then((res) => {
					const {data} = res
					data.unshift({
						name: '全部'
					})
					this.tabList = data
				})
				// uniCloud.callFunction({
				// 	name: 'get_label',
				// }).then((res)=>{
				// 	const {result} = res
				// 	this.tabList = result.data
				// })
			}
		}
	}
</script>

<style lang="scss">
	page{
			height: 100%;
			display: flex;
		}
	.home{
		display: flex;
		flex-direction: column;
		flex:1;
		overflow: hidden;
		.home-list{
			flex: 1;
			box-sizing: border-box;
		}
	}
	
</style>
