<template>
	<view class="label">
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">我的标签</view>
				<view class="label-edit" @click="editLabel">{{!is_edit?'编辑':'完成'}}</view>
			</view>
			<view class="label-content">
				<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
				<view class="label-content__item" v-if="!loading" v-for="(item,index) in labelList" :key="item._id">
					{{item.name}}
					<uni-icons v-if="is_edit" @click="del(index)" class="icons-close" type="clear" size="20" color="red"></uni-icons>
				</view>
				<view class="no-data" v-if="labelList.length===0 && !loading">
					没有数据
				</view>
			</view>
			
		</view>
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">标签推荐</view>
			</view>
			<view class="label-content">
				<view class="label-content__item" v-if="!loading" v-for="(item, index) in list" :key="item._id" @click="add(index)">
					{{item.name}}
				</view>
				<view class="no-data" v-if="list.length===0 && !loading">
					没有数据
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				is_edit:false,
				labelList: [],
				list: [],
				loading:true
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			setUpdateLabel(){
				uni.showLoading()
				let arrIds = []
				this.labelList.forEach(item=>{
					arrIds.push(item._id)
				})
				console.log(arrIds)
				this.$api.update_label({
					label: arrIds
				}).then((res)=>{
					uni.hideLoading()
					uni.showToast({
						title:'更新成功',
						icon:'none'
					})
					uni.$emit('labelChange')
				})
			},
			add(index){
				if(!this.is_edit) return
				this.labelList.push(this.list[index])
				this.list.splice(index, 1)
			},
			del(index){
				if(!this.is_edit) return
				this.list.push(this.labelList[index])
				this.labelList.splice(index, 1)
			},
			getLabel(){
				this.loading = true
				this.$api.get_label({
					type: 'all'
				}).then((res)=>{
					const {data} = res
					this.loading = false
					this.labelList = data.filter(item=>item.current)
					this.list = data.filter(item=>!item.current)
				})
			},
			editLabel(){
				this.is_edit = !this.is_edit
				if(!this.is_edit){
					this.setUpdateLabel()
				}
			}
		}
	}
</script>

<style lang="scss">
	page  {
		background-color: #f5f5f5;
	}
	.label {
		.label-box {
			background-color: #fff;
			margin-bottom: 10px;
			.label-header {
				display: flex;
				justify-content: space-between;
				padding: 10px  15px;
				font-size: 14px;
				color: #666;
				border-bottom: 1px #f5f5f5 solid;
				.label-edit {
					color: #30b33a;
					font-weight: bold;
				}
			}
			.label-content {
				display: flex;
				flex-wrap: wrap;
				padding: 15px;
				padding-top: 0;
				.label-content__item {
					position: relative;
					padding: 2px 5px;
					margin-top: 12px;
					margin-right: 10px;
					border-radius: 5px;
					border: 1px #666 solid;
					font-size: 14px;
					color: #666;
					.icons-close {
						position: absolute;
						right: -8px;
						top: -8px;
						background-color: #fff;
						border-radius: 50%;
					}
				}
			}
		}
	}
	.no-data{
		font-size: 4px;
		width: 100%;
		text-align: center;
		color: #999;
		padding: 40px 0;
	}
</style>
