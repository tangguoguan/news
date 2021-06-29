<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<!-- #ifndef MP-ALIPAY -->
			<view :style="{height:statusBarHeight+'px'}"></view>
			<!-- #endif -->
			<!-- 导航栏内容 -->
			<view class="navbar-content" 
				:class="{search:isSearch}"
				:style="{height:navBarHeight+'px',width:windowWidth+'px'}" 
				@click.stop="open"
			>
				<view class="navbar-content__search-icons"  v-if="isSearch" @click="back">
					<uni-icons type="back" size="22" color="#fff"></uni-icons>
				</view>
				<view class="navbar-search" v-if="!isSearch">
					<view class="navbar-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">uni-app、vue</view>
				</view>
				<!-- 搜索页显示 -->
				<view v-else class="navbar-search">
					<input class="navbar-search_text" type="text" v-model="val" @input="inputChange" placeholder="请输入要搜索的内容"/>
				</view>
			</view>
		</view>
		<view :style="{height:(statusBarHeight+navBarHeight)+'px'}"></view>
	</view>
</template>

<script>
	export default {
		name:"navbar",
		props: {
			isSearch: {
				type: Boolean,
				default: false
			},
			value: {
				type: [String, Number],
				default: ''
			}
		},
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45, //导航栏的高度
				windowWidth: '',
				val:''
			};
		},
		watch:{
			value(newVal){
				this.val = newVal
			}
		},
		created() {
			// 获取手机系统信息
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight
			this.windowWidth = info.windowWidth
			
			// 获取胶囊位置
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
			this.windowWidth = menuButtonInfo.left
			// #endif
			
			// #ifdef MP-ALIPAY
			this.statusBarHeight = 0 //状态栏的高度
			// #endif
		},
		methods:{
			back(){
				uni.switchTab({
					url:'/pages/tabbar/index/index'
				})
			},
			open(){
				if(this.isSearch) return
				uni.navigateTo({
					url:'/pages/home-search/home-search'
				})
			},
			inputChange(e){
				const {value} = e.detail
				this.$emit('input', value)
			}
		}
	}
</script>

<style lang="scss">
	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: $mk-base-color;

			.navbar-content {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				box-sizing: border-box;
				
				.navbar-search {
					display: flex;
					align-items: center;
					padding: 0 10px;
					width: 100%;
					height: 30px;
					border-radius: 30px;
					background-color: #fff;
					
					.navbar-search_icon {
						// width: 10px;
						// height: 10px;
						margin-right: 10px;
					}

					.navbar-search_text {
						font-size: 14px;
						color: #999;
					}
				}
				
				&.search{
					padding-left: 0;
					.navbar-content__search-icons{
						margin-left: 10px;
						margin-right: 15px;
					}
					.navbar-search{
						border-radius: 2px;
					}
				}
				
			}

		}

	}
</style>
