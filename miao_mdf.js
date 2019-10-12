// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body

var body = $response.body;
body = `webpackJsonp([8], {
	123: function(module, exports) {
		! function(window, document) {
			function cmbShortcut() {
				this.USER_AGENT = window.navigator.userAgent, this.IOS_LIMIT = 9;
				var currentUrl = encodeURIComponent(window.location.href);
				this.cfg = {
					cmbUrl: "cmblife://go?url=Web&next=" + currentUrl + "&version=v2",
					downloadPage: "https://cmblife.cmbchina.com/cmblife/download/other1010.html"
				}
			}
			cmbShortcut.prototype = {
				isIOS: function() {
					return Boolean(this.USER_AGENT.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
				},
				getIOSVersion: function() {
					var version = -1,
						match = this.USER_AGENT.match(/OS (\d+)_/i);
					return this.isIOS() && match && match[1] && (version = match[1]), version
				},
				isAndroid: function() {
					return Boolean(this.USER_AGENT.match(/Android/i))
				},
				isCmb: function() {
					return Boolean(this.USER_AGENT.match(/cmblife/i))
				},
				getCmbVersion: function() {
					var version = -1,
						match = this.USER_AGENT.match(/\(cmblife\s\S*\/(\d*)\sv[2-9]\)/i);
					return match && match[1] && (version = match[1]), version
				},
				isWeixin: function() {
					return Boolean(this.USER_AGENT.match(/MicroMessenger/i))
				},
				isWeibo: function() {
					return Boolean(this.USER_AGENT.match(/weibo/i))
				},
				isAlipay: function() {
					return Boolean(this.USER_AGENT.match(/Alipay/i))
				},
				showBrowserTip: function() {
					var tipDom = document.createElement("div");
					tipDom.style.cssText = "position:fixed;z-index:100;top:0;left:0;width:100%;height:100%;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAADcCAYAAACWEt/8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVGMDhERDM2QUFDQjExRTU5OTJDOTY3RTRFMzREOTA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVGMDhERDM3QUFDQjExRTU5OTJDOTY3RTRFMzREOTA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0Q2ODU5N0ZBQUNCMTFFNTk5MkM5NjdFNEUzNEQ5MDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0Q2ODU5ODBBQUNCMTFFNTk5MkM5NjdFNEUzNEQ5MDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz57mSorAAAo3UlEQVR42uxdCXgU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') top right no-repeat;background-size:150px 125px;background-color:rgba(0,0,0,0.7);", tipDom.onclick = function() {
						document.body.removeChild(tipDom)
					}, document.body.appendChild(tipDom)
				},
				changeUniversalLink: function(originCmbUrl) {
					if (0 != originCmbUrl.indexOf("cmblife://")) return originCmbUrl;
					var universalLink = originCmbUrl.replace("cmblife://", "https://open.cmbchina.com/dispatch/");
					return universalLink
				},
				changeAppLink: function(originCmbUrl) {
					if (0 != originCmbUrl.indexOf("cmblife://")) return originCmbUrl;
					var appLink = "http://a.app.qq.com/o/simple.jsp?pkgname=com.cmbchina.ccd.pluto.cmbActivity&ckey=CK1324558041898&android_scheme=" + encodeURIComponent(originCmbUrl);
					return appLink
				},
				tryToCmblife: function(cmbUrl, downloadPage) {
					var hasApp = !0,
						inter = 400;
					setTimeout(function() {
						hasApp || (window.location.href = downloadPage), document.body.removeChild(ifr)
					}, 3e3);
					var t1 = Date.now(),
						ifr = document.createElement("iframe");
					ifr.src = cmbUrl, ifr.style.display = "none", document.body.appendChild(ifr), setTimeout(function() {
						var t2 = Date.now();
						(!t1 || t2 - t1 < inter + 100) && (hasApp = !1)
					}, inter)
				},
				mergeOption: function(defaultCfg, customCfg) {
					var type = Object.prototype.toString,
						defaultCfg_str = JSON.stringify(defaultCfg),
						newObj = JSON.parse(defaultCfg_str);
					if ("[object String]" == type.call(customCfg)) newObj.cmbUrl = customCfg;
					else if ("[object Object]" == type.call(customCfg)) for (var obj in customCfg) customCfg.hasOwnProperty(obj) && (newObj[obj] = customCfg[obj]);
					return newObj
				},
				gotoCmblife: function(customCfg) {
					var self = this,
						newCfg = self.mergeOption(self.cfg, customCfg);
					return self.isCmb() ? void(window.location.href = newCfg.cmbUrl) : self.getIOSVersion() >= self.IOS_LIMIT ? void(window.location.href = self.changeUniversalLink(newCfg.cmbUrl)) : self.isWeixin() ? void(self.isAndroid() ? window.location.href = self.changeAppLink(newCfg.cmbUrl) : self.showBrowserTip()) : self.isWeibo() || self.isAlipay() ? void self.showBrowserTip() : void self.tryToCmblife(newCfg.cmbUrl, newCfg.downloadPage)
				}
			}, window.cmbShortcut = cmbShortcut
		}(window, document)
	},
	295: function(module, exports, __webpack_require__) {
		__webpack_require__(296), __webpack_require__(123);
		var homeCtrl = __webpack_require__(298),
			record = __webpack_require__(299),
			services = __webpack_require__(306),
			constant = __webpack_require__(304),
			floatFilter = __webpack_require__(311),
			mod = angular.module("app.seckillCMBCat.home", [record, constant, services]);
		mod.controller("seckillCMBCatHomeCtrl", homeCtrl), mod.filter("floatFilter", floatFilter), module.exports = mod
	},
	296: function(module, exports, __webpack_require__) {
		var content = __webpack_require__(297);
		"string" == typeof content && (content = [
			[module.id, content, ""]
		]);
		__webpack_require__(6)(content, {});
		content.locals && (module.exports = content.locals)
	},
	297: function(module, exports, __webpack_require__) {
		exports = module.exports = __webpack_require__(4)(), exports.push([module.id, '.seckill-home {\n  position: relative;\n  background-color: #f1f5f7;\n  height: 100%;\n  overflow-x: hidden;\n}\n.seckill-home img[src=""],\n.seckill-home img:not([src]) {\n  opacity: 0;\n}\n.seckill-home .banner {\n  height: calc(100vw * 0.37);\n  background-color: #fff;\n  margin-bottom: 1px;\n  position: relative;\n}\n.seckill-home .banner >img {\n  width: 100%;\n  height: 100%;\n}\n.seckill-home .banner >button {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.2rem;\n  width: 5.1rem;\n  height: 1.6rem;\n  border-radius: 0.8rem;\n  background-color: #000;\n  opacity: 0.5;\n  border: none;\n  color: #fff;\n  font-size: 0.9rem;\n}\n.seckill-home .time {\n  height: 3.5rem;\n  padding: 0 1.1rem 0 1.1rem;\n  background-color: #fff;\n}\n.seckill-home .time >div {\n  height: 100%;\n}\n.seckill-home .time >div >div:first-child {\n  color: #2c2c3c;\n}\n.seckill-home .time >div >div:nth-child(2) .timer {\n  width: 7.3rem;\n  height: 1.4rem;\n}\n.seckill-home .time >div >div:nth-child(2) .timer .timer-block {\n  width: 1rem;\n  height: 100%;\n  line-height: 1.65rem;\n  margin-left: 0.1rem;\n  background-color: #2c2c3c;\n  color: #fff;\n  font-size: 0.9rem;\n  border-radius: 0.2rem;\n  text-align: center;\n}\n.seckill-home .time >div >div:nth-child(2) .timer .timer-gap {\n  color: #2c2c3c;\n  margin: 0 0.1rem 0 0.1rem;\n}\n.seckill-home .time >div >div:nth-child(2) .next-round {\n  color: #ff5656;\n  font-weight: bold;\n}\n.seckill-home .seckill-home-campaigns {\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-bottom: 3.1rem;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign >div:first-child {\n  color: #565663;\n  font-size: 0.9rem;\n  padding: 0 1.1rem 0 1.1rem;\n  height: 2.1rem;\n  margin-bottom: 1px;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods {\n  height: 9.6rem;\n  margin-bottom: 1px;\n  background-color: #fff;\n  padding: 1.1rem 1rem 1.1rem 1rem;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:first-child {\n  width: 7.4rem;\n  height: 7.4rem;\n  margin-right: 0.8rem;\n  vertical-align: middle;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:first-child >img {\n  width: 7.4rem;\n  height: 7.4rem;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) {\n  height: 7.4rem;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:first-child {\n  color: #2c2c3c;\n  font-size: 1.1rem;\n  font-weight: bold;\n  margin-bottom: 0.3rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(2) {\n  height: 1.2rem;\n  color: #565663;\n  font-size: 0.9rem;\n  margin-bottom: 0.3rem;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(2) >div {\n  display: inline-block;\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYwgLS/4PAAQkAg8f641MAAAAAElFTkSuQmCC");\n  background-repeat: repeat-x;\n  background-position: left center;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(3) {\n  height: 1.7rem;\n  color: #565663;\n  font-size: 0.7rem;\n  margin-bottom: 0.3rem;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(3) >div >div:first-child {\n  height: 1.2rem;\n  margin-bottom: 0.2rem;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(3) >div .progressbar {\n  height: 0.3rem;\n  border: 1px solid #ff5656;\n  border-radius: 0.15rem;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(3) >div .progressbar >div {\n  background-color: #ff5656;\n  height: 100%;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(4) >div:first-child {\n  height: 2rem;\n  color: #ff5656;\n  font-weight: bold;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(4) >div:first-child .sale-price >span:first-child,\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(4) >div:first-child .sale-point >span:first-child {\n  font-size: 1.2rem;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(4) >div:first-child .sale-price >span:nth-child(2),\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(4) >div:first-child .sale-point >span:nth-child(2) {\n  font-size: 0.8rem;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(4) >div:first-child .sale-plus {\n  font-size: 1.2rem;\n  margin: 0 0.2rem 0 0.2rem;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(4) >div:first-child .cat-icon {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: transparent url("data:image/png;base64,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") no-repeat center;\n  background-size: 100% 100%;\n  margin-right: 0.5rem;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(4) .seckill-home-btn {\n  height: 2rem;\n  width: 5.3rem;\n  font-size: 1rem;\n  background-color: rgba(255,86,86,0.3);\n  color: #fff;\n  border-radius: 0.2rem;\n  border: none;\n  font-weight: bold;\n}\n.seckill-home .seckill-home-campaigns .seckill-home-campaign .goods >div:nth-child(2) >div:nth-child(4) .active {\n  background-color: #ff5656;\n}\n.seckill-home .seckill-home-footer {\n  height: 3rem;\n  background-color: #fff;\n  color: #2c2c3c;\n  font-size: 1rem;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  border-top: 1px solid #f1f5f7;\n}\n.seckill-home .seckill-home-footer >div {\n  height: 1.6rem;\n}\n.seckill-home .seckill-home-footer >div:first-child {\n  border-right: 1px solid #cbcbcb;\n}\n', ""])
	},
	298: function(module, exports) {
		module.exports = function($stateParams, $state, $timeout, $window, $scope, CONSTANT, AXIO, UTIL, LOGIN, NATIVE, SECKILL_CMB_CAT_HOT_SPOTS, SECKILL_CMB_CAT_CAMPAIGNS, SECKILL_CMB_CAT_CONSTANT, NETWORKV2) {
			"use strict";

			function init() {
				vm.receiveAlarm = null, vm.payAlarm = null, vm.receiveTimer = null, vm.payTimer = null, SECKILL_CMB_CAT_HOT_SPOTS.getHotSpotsByCgName($scope, vm.cgName, function(data) {
					vm.hotSpots = data, SECKILL_CMB_CAT_CAMPAIGNS.getCampaignsByCgName($scope, vm.cgName, function(data) {
						vm.campaigns = data, getInventory()
					})
				})
			}
			function getInventory() {
				vm.receiveAlarm = null, vm.payAlarm = null, vm.receiveTimer = null, vm.payTimer = null, NETWORKV2.post4Data({
					url: SECKILL_CMB_CAT_CONSTANT.API.GET_INVENTORY_WITH_CMB_CAT,
					data: {
						cgName: vm.cgName
					},
					$scope: $scope,
					isShowLoading: !1,
					success: function(data) {
						switch (vm.inventory = data.inventory, vm.timeFlag = !1, data.countdownStatus) {
							case 0:
								vm.timeTitle = vm.hotSpots.PanicBuyingPage.unStart.title;
								try {
									var nextRoundTime = UTIL.translateBGToLocal(data.countdownTime)
								} catch (e) {
									console.error(e)
								}
								vm.nextRound = nextRoundTime ? nextRoundTime : data.countdownTime;
								break;
							case 1:
								vm.timeTitle = vm.hotSpots.PanicBuyingPage.willStart.title;
								var receiveCountdown = parseInt(data.countdownTime, 10);
								initReceiveCounter(), vm.receiveAlarm.start(receiveCountdown);
								break;
							case 2:
								vm.timeTitle = vm.hotSpots.PanicBuyingPage.start.title, vm.timeFlag = !0;
								break;
							case 3:
								vm.timeTitle = vm.hotSpots.PanicBuyingPage.inventoryNull.title
						}
						LOGIN.clientLogin(function(loginSuccess) {
							loginSuccess ? ($timeout(function() {
								NATIVE.setTitle(vm.campaigns.campaignGroup.displayName)
							}, 500), UTIL.trackEvent("抢购模型_主页", vm.cgName + "_" + vm.campaigns.campaignGroup.displayName), UTIL.trackEventShenCe("newExchangePage", {
								pageName: "主页",
								campaignGroupID: vm.cgName,
								campaignGroupName: vm.campaigns.campaignGroup.displayName
							})) : NATIVE.close()
						})
					},
					fail: function(data) {
						NATIVE.toast(data.respMsg, 2e3)
					},
					error: function() {
						NATIVE.toast("出错了，请稍后重试~", 2e3)
					}
				})
			}
			function showConfirmTip(goodsInfo, campaignNo, campaignTitle) {
				vm.alertInfo = {
					iconType: null,
					showClose: !0,
					title: "兑换确认",
					content: "兑换后不可退换，是否确认兑换？",
					goodsInfo: goodsInfo,
					buttonList: [{
						text: "取消兑换",
						func: function(_scope) {
							_scope.closeAlert(), vm.alertInfo = null
						}
					}, {
						text: "确认兑换",
						func: function(_scope) {
							_scope.closeAlert(), vm.alertInfo = null, vm.receivePrize(goodsInfo.goodsId, campaignNo, campaignTitle)
						}
					}]
				}, vm.showAlert = !0
			}
			function showSuccessTip(goodsInfo, campaignNo) {
				vm.successBtn = {
					style: "long-button",
					disabled: !vm.payFlag
				}, goodsInfo.isNeedPay ? (vm.successBtn.text = "去支付", vm.successBtn.func = function(_scope) {
					vm.payFlag && (_scope.closeAlert(), vm.alertInfo = null, $window.location.href = CONSTANT.REDIRECT.NATIVE_MY_GOODS)
				}) : (vm.successBtn.text = "查看我的抢购", vm.successBtn.func = function(_scope) {
					vm.payFlag && (_scope.closeAlert(), vm.alertInfo = null, vm.showRecord = !0)
				}), vm.alertInfo = {
					iconType: null,
					showClose: !0,
					adCode: vm.hotSpots.PanicBuyingPage.ShareID ? vm.hotSpots.PanicBuyingPage.ShareID.content : "",
					close: function() {
						vm.payAlarm && vm.payAlarm.end()
					},
					title: "恭喜您抢购成功！",
					content: goodsInfo.isNeedPay ? '请在指定时间内前往"我的抢购"完成支付，过期作废哦！' : '抢到的商品将在指定时间内入账，请记得前去"我的抢购"查看记录',
					goodsInfo: goodsInfo,
					buttonList: [vm.successBtn],
					campaignNo: campaignNo
				}, vm.showAlert = !0, UTIL.trackEventShenCe("newExchangePage", {
					pageName: "结果页",
					campaignGroupID: vm.cgName,
					campaignGroupName: vm.campaigns.campaignGroup.displayName,
					campaignName: campaignNo
				})
			}
			function initReceiveCounter() {
				vm.receiveAlarm && vm.receiveAlarm.end(), vm.receiveTimer = null, vm.receiveAlarm = new UTIL.initAlarm(function(leftTime) {
					vm.receiveTimer = UTIL.transCounterObj(leftTime)
				}, function() {
					vm.timeFlag = !0, vm.timeTitle = vm.hotSpots.PanicBuyingPage.start.title, vm.receiveTimer = UTIL.transCounterObj(0)
				})
			}
			function initPayCounter() {
				vm.payAlarm && vm.payAlarm.end(), vm.payTimer = null, vm.payAlarm = new UTIL.initAlarm(function(leftTime) {
					vm.payTimer = UTIL.transCounterStr(leftTime), vm.successBtn.text = vm.goodsInfo.isNeedPay ? "去支付(" + vm.payTimer + ")" : "入账中(" + vm.payTimer + ")"
				}, function() {
					vm.payFlag = !0, vm.payTimer = UTIL.transCounterStr(0), vm.successBtn.disabled = !1, vm.successBtn.text = vm.goodsInfo.isNeedPay ? "去支付" : "查看我的抢购"
				})
			}
			function showLoginTip() {
				$window.cancelLogin = function() {}, $window.confirmLogin = function() {
					LOGIN.clientLogin(function(loginSuccess) {
						loginSuccess && init()
					}, "0")
				}, NATIVE.coupleButtonAlert("提示", "登录超时，请重新登录哟~", "否", "cancelLogin", "是", "confirmLogin")
			}
			var timesPast = 0;
			var vm = this;
			var aCgName, aCampaignNo, aGoodsId;
            var canFire = 0; // 是否发请求
            var fireTsAddon = 0 * 1000 * 60; // 用于非整点调试脚本 1000 * 60 * 分钟数
            var tsDelta = 40; // 提前多少毫秒开始发请求
            var keepTryTime = fireTsAddon + 1000 * 60 * 5; // 继续尝试多久 
            function try100Times(cgName, campaignNo, goodsId) {
                // 当前时间
                var curTs = (new Date).getTime();
                // 距离发射时间多久
                var leftT = (3600000 + fireTsAddon) % 3600000 - tsDelta - curTs % 3600000;
                // 符合发射条件就改变发射状态
                if ((leftT < 0) && ((curTs % 3600000) < keepTryTime)) {
                    canFire = 1;
                }
                aCgName = cgName;
                aCampaignNo = campaignNo,
                aGoodsId = goodsId;
                if (canFire == 0) {
                    // 根据时间调整下一次尝试的频率
                    if (leftT > 1000) {
                        setTimeout(function() {
                            try100Times(aCgName, aCampaignNo, aGoodsId);    
                        },1000)
                    }
                    else if (leftT > 500) {
                        setTimeout(function() {
                            try100Times(aCgName, aCampaignNo, aGoodsId);    
                        },500)
                    }
                    else {
                        setTimeout(function() {
                            try100Times(aCgName, aCampaignNo, aGoodsId);    
                        },50)
                    }
                    NATIVE.setTitle('倒计时：' + (parseInt(((leftT + 3600000) % 3600000) / 1000)) + '秒');
                    return;
                }
                for (var j = 0;j < 3;j++) {
                    NETWORKV2.post4Data({
						url: SECKILL_CMB_CAT_CONSTANT.API.SECKILL_WITH_CMB_CAT,
						$scope: $scope,
						isShowLoading: 0,
						data: {
							cgName: vm.cgName,
							campaignNo: campaignNo,
							goodsId: goodsId
						},
						success: function(data) {
							if (data.respCode === CONSTANT.RESP_CODE.SUCCESS) {
								vm.inventory = data.inventory, vm.goodsInfo = data.goodsInfo;
								var payCountdown = parseInt(data.payCountdown, 10);
								!isNaN(payCountdown) && payCountdown > 0 ? (vm.payFlag = !1, initPayCounter(), vm.payAlarm.start(payCountdown)) : vm.payFlag = !0, showSuccessTip(vm.goodsInfo, campaignNo)
							}
						},
						sessionOut: function() {
							try100Times();
							showLoginTip()
						},
						fail: function(data) {
							timesPast++;
                            var msgA = vm.hotSpots.PanicBuyingPage.hasOwnProperty(data.respCode) ? vm.hotSpots.PanicBuyingPage[data.respCode].content : data.respMsg;
                            msgA = msgA + timesPast;
                            if (timesPast % 5 == 1) {
                                NATIVE.setTitle(msgA);
                            }
                            return;
							var msg = vm.hotSpots.PanicBuyingPage.hasOwnProperty(data.respCode) ? vm.hotSpots.PanicBuyingPage[data.respCode].content : data.respMsg;
							if (data.respCode == CONSTANT.RESP_CODE.CYCLE_END) NATIVE.singleButtonAlert(null, msg, "确认", "getInventory");
							else if (data.respCode == CONSTANT.RESP_CODE.ACTIVITY_ENDED) {
								var cbName = "toCampaign" + (new Date).getTime();
								$window[cbName] = function() {
									$window.location.href = CONSTANT.REDIRECT.NATIVE_CAMPAIGN, delete $window[cbName]
								}, NATIVE.coupleButtonAlert(null, msg, "取消", null, "去看看", cbName)
							} else if (data.respCode == CONSTANT.RESP_CODE.INVENTORY_EMPTY) NATIVE.singleButtonAlert(null, msg, "确认");
							else if (data.respCode == CONSTANT.RESP_CODE.EXCLUSION) {
								var cbName = "toCampaign" + (new Date).getTime();
								$window[cbName] = function() {
									$window.location.href = CONSTANT.REDIRECT.NATIVE_CAMPAIGN, delete $window[cbName]
								}, NATIVE.coupleButtonAlert("您当前无资格", msg, "取消", null, "去看看", cbName)
							} else if (data.respCode == CONSTANT.RESP_CODE.NO_QUALIFY) {
								var cbName = "toQualify" + (new Date).getTime();
								$window[cbName] = function() {
									vm.toQualify(), delete $window[cbName]
								}, NATIVE.coupleButtonAlert("资格尚未达标", msg, "取消", null, "资格查询", cbName)
							} else if (data.respCode == CONSTANT.RESP_CODE.CG_GIFT_MAX || data.respCode == CONSTANT.RESP_CODE.CP_GIFT_MAX || data.respCode == CONSTANT.RESP_CODE.GIFT_MAX) {
								var cbName = "showMyRecord" + (new Date).getTime();
								$window[cbName] = function() {
									vm.showMyRecord(), $scope.$apply(), delete $window[cbName]
								}, NATIVE.coupleButtonAlert("已达抢购上限", msg, "取消", null, "我的抢购", cbName)
							} else data.respCode == CONSTANT.RESP_CODE.CAT_NUM_NOT_ENOUGH ? NATIVE.singleButtonAlert(null, msg, "我知道了") : NATIVE.toast(msg);
							data.respCode == CONSTANT.RESP_CODE.INVENTORY_EMPTY && (vm.inventory ? vm.inventory[goodsId] = "0" : (vm.inventory = {}, vm.inventory[goodsId] = "0"))
						},
						error: function() {
							NATIVE.toast("出错了，请稍后重试~", 2e3)
						}
					})
                }
                setTimeout(function() {
                    try100Times(aCgName, aCampaignNo, aGoodsId);    
                },100)
            }
			return $stateParams.cgName ? (vm.cgName = $stateParams.cgName, init(), $window.getInventory = getInventory, vm.startSeckill = function(goodsInfo, campaignNo, campaignTitle) {
				vm.isBtnActive(goodsInfo.goodsId) && (goodsInfo.channelCode !== SECKILL_CMB_CAT_CONSTANT.NEW_EGG_CHANNEL_CODE ? showConfirmTip(goodsInfo, campaignNo, campaignTitle) : vm.receivePrize(goodsInfo.goodsId, campaignNo, campaignTitle))
			}, vm.receivePrize = function(goodsId, campaignNo, campaignTitle) {
				goodsId ? vm.tmpGoodsId = goodsId : "", campaignNo ? vm.tmpCampaignNo = campaignNo : "", try100Times(vm.cgName,campaignNo,goodsId), UTIL.trackEvent("抢购模型_主页_立即抢", vm.cgName + "_" + vm.campaigns.campaignGroup.displayName + "_" + campaignTitle), UTIL.trackEventShenCe("newExchangeClick", {
					parentPage: "主页",
					campaignGroupID: vm.cgName,
					campaignGroupName: vm.campaigns.campaignGroup.displayName,
					campaignName: campaignNo,
					buttonName: "立即抢"
				})
			}, vm.isBtnActive = function(goodsId) {
				return 1;
				if (!goodsId || !vm.inventory) return !1;
				var inventoryInt = parseInt(vm.inventory[goodsId], 10);
				return !(isNaN(inventoryInt) || inventoryInt <= 0) && vm.timeFlag
			}, vm.toQualify = function() {
				UTIL.trackEventShenCe("newExchangeClick", {
					parentPage: "主页",
					campaignGroupID: vm.cgName,
					campaignGroupName: vm.campaigns.campaignGroup.displayName,
					buttonName: "资格查询"
				}), $state.go("seckill.qualification", {
					cgName: vm.cgName,
					displayName: vm.campaigns.campaignGroup.displayName
				})
			}, vm.showMyRecord = function() {
				UTIL.trackEventShenCe("newExchangeClick", {
					parentPage: "主页",
					campaignGroupID: vm.cgName,
					campaignGroupName: vm.campaigns.campaignGroup.displayName,
					buttonName: "我的抢购"
				}), vm.showRecord = !0
			}, vm.toGoodDetail = function(url) {
				url && ($window.location.href = url)
			}, vm.progressStyle = function(goodsId, initInventory) {
				if (!goodsId || !initInventory || !vm.inventory) return {
					width: "0"
				};
				var inventoryInt = parseInt(vm.inventory[goodsId], 10);
				if (isNaN(inventoryInt) || inventoryInt <= 0) return {
					width: "0"
				};
				var ratio = 100 * inventoryInt / initInventory >= 100 ? 100 : 100 * inventoryInt / initInventory;
				return {
					width: ratio + "%"
				}
			}, void(vm.showRule = function() {
				UTIL.trackEventShenCe("newExchangeClick", {
					parentPage: "主页",
					campaignGroupID: vm.cgName,
					campaignGroupName: vm.campaigns.campaignGroup.displayName,
					buttonName: "活动规则"
				}), vm.hotSpots && (vm.isShowRule = !0)
			})) : void NATIVE.toast("活动组编号为空", 1e3)
		}
	},
	299: function(module, exports, __webpack_require__) {
		var record = __webpack_require__(300);
		__webpack_require__(302);
		var constant = __webpack_require__(304),
			mod = angular.module("app.seckillCMBCat.record", [constant]);
		mod.directive("seckillCmbCatRecord", record), module.exports = mod.name
	},
	300: function(module, exports, __webpack_require__) {
		module.exports = function($window, $timeout, AXIO, NATIVE, CONSTANT, UTIL, LOGIN, SECKILL_CMB_CAT_CONSTANT, NETWORKV2) {
			"use strict";
			return {
				restrict: "EA",
				priority: 0,
				scope: {
					ngIf: "=",
					cgName: "@"
				},
				templateUrl: __webpack_require__(301),
				link: function(scope) {
					function showLoginTip() {
						$window.cancelLogin = function() {
							vm.ngIf = !1, scope.$apply()
						}, $window.confirmLogin = function() {
							LOGIN.clientLogin(function(loginSuccess) {
								loginSuccess ? (vm.getRecordList(), scope.$apply()) : (vm.ngIf = !1, scope.$apply())
							}, "0")
						}, NATIVE.coupleButtonAlert("提示", "登录超时，请重新登录哟~", "否", "cancelLogin", "是", "confirmLogin")
					}
					function prepareRecordCounter(recordList) {
						if (recordList && !(recordList.length <= 0)) {
							var newAlarm;
							vm.counterObj = [], vm.recordAlarmList = [];
							for (var i = 0; i < recordList.length; i++) {
								var recordItem = recordList[i];
								vm.counterObj[i] = {
									endFlag: !0
								}, recordItem.productName = recordItem.productName.replace(/\+/g, " "), recordItem.seckillTime = recordItem.seckillTime.replace(/\+/g, " ");
								var payCountdownInt = parseInt(recordItem.payCountdown, 10);
								!isNaN(payCountdownInt) && payCountdownInt > 0 && (vm.counterObj[i].endFlag = !1, function(i) {
									newAlarm = UTIL.initAlarm(function(leftTime) {
										vm.counterObj[i].timer = UTIL.transCounterStr(leftTime)
									}, function() {
										vm.counterObj[i].endFlag = !0
									}), newAlarm.start(payCountdownInt), vm.recordAlarmList.push(newAlarm)
								}(i))
							}
						}
					}
					var vm = scope;
					vm.showMq = !0, vm.marquee = "请您在支付页面中，注意您的收货地址是否正确，地址填写错误将会影响您的收货时效。", vm.$watch("ngIf", function() {
						vm.ngIf && vm.cgName ? (vm.getRecordList(), document.querySelector(".scroll-view").style.overflow = "hidden") : document.querySelector(".scroll-view").style.overflow = "auto"
					}), vm.getRecordList = function() {
						NETWORKV2.post4Data({
							url: SECKILL_CMB_CAT_CONSTANT.API.GET_SECKILL_RECORD,
							data: {
								cgName: vm.cgName
							},
							$scope: scope,
							success: function(data) {
								data.respCode == CONSTANT.RESP_CODE.SUCCESS ? (vm.showError = !1, vm.recordList = data.recordList, prepareRecordCounter(vm.recordList)) : (vm.showError = !1, vm.recordList = [])
							},
							sessionOut: function() {
								$timeout(function() {
									showLoginTip()
								}, 200)
							},
							fail: function(data) {
								return data.respCode == CONSTANT.RESP_CODE.FLOW_CONTROL ? (vm.flowMsg = data.respMsg, vm.showError = !1, void(vm.showFlowControl = !0)) : (vm.showError = !0, void(vm.errorMsg = "暂无数据，请刷新重试"))
							},
							error: function() {
								vm.showError = !0, vm.errorMsg = "网络异常，请稍后重试"
							}
						})
					}, vm.goToButtonUrl = function(item, endFlag) {
						item.buttonState && endFlag && item.buttonUrl && UTIL.executeProtocol(item.buttonUrl)
					}, vm.closeRecord = function() {
						if (vm.ngIf = !1, vm.recordList = null, vm.counterObj = null, vm.recordAlarmList) {
							for (var i = 0; i < vm.recordAlarmList.length; i++) vm.recordAlarmList[i].end();
							vm.recordAlarmList = null
						}
					}, vm.closeMarquee = function() {
						vm.showMq = !1
					}
				}
			}
		}
	},
	301: function(module, exports, __webpack_require__) {
		module.exports = __webpack_require__.p + "ae1b4b52852a1c5c2e279efb17429500.html"
	},
	302: function(module, exports, __webpack_require__) {
		var content = __webpack_require__(303);
		"string" == typeof content && (content = [
			[module.id, content, ""]
		]);
		__webpack_require__(6)(content, {});
		content.locals && (module.exports = content.locals)
	},
	303: function(module, exports, __webpack_require__) {
		exports = module.exports = __webpack_require__(4)(), exports.push([module.id, '.record-view {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.6);\n  z-index: 100;\n  overflow: hidden;\n  padding: 0 2.57rem;\n}\n.record-view .container {\n  width: 100%;\n  animation: scale 0.5s;\n  transform: scale(1);\n}\n.record-view .container .record-body {\n  width: 100%;\n  position: relative;\n  padding-bottom: 1.71rem;\n  background-color: #ff5656;\n  border-radius: 7px;\n  margin-bottom: 0.5rem;\n}\n.record-view .container .record-body .record-header {\n  height: 2.5rem;\n  line-height: 2.5rem;\n  color: #fff;\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-align: center;\n}\n.record-view .container .record-body .record-list {\n  position: relative;\n  margin: 0 10px;\n  height: 20rem;\n  background-color: #f0f0f0;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.record-view .container .record-body .record-list .record-marquee {\n  height: 1.83rem;\n  background-color: #fff7ea;\n  color: #ff9000;\n  padding: 0 0.5rem 0 0.5rem;\n  font-size: 0.8rem;\n}\n.record-view .container .record-body .record-list .record-marquee .record-close {\n  width: 1.2rem;\n  height: 1.2rem;\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATNJREFUWAntVjEOwjAMvIAEExvs/IeRB/ADVt7Ayg94ACP/6Q4bE0io5BLM0LRuXAl1SYZSYp/vYjtpgDJKBkoGRs6A0/jrE1Z4Y4MXLu6Ah+bbtNVHLDDDFlNc3R63pl3+T+Sl9ZfkwBpz7ELAVqd0Mvh6TMDGGKnTd0YX4FcOhztqLHNF/MiJIZYxlKGWgLgk4BPnrnJYfEVTr4BcEUPIGTtLQJ+IoeQmAV0iOM/+CH3CmislCr6NR3YGBJeslgZpOCM5oWYBgY97XFYdo5hXThiHvg2jz1+f5gyMWoKE3Nc8pEfK8c8mbCOXA0mz9dUvqwQ5BDk+bWJ6BVgCW3xFjCpgSEArRt+G/J4bD5nQF2xO+YoyhjJ0Af4y4bGV+Xjl5SXukIoXEoW/mEoGSgbGz8AHuOnBGF2clyMAAAAASUVORK5CYII=") no-repeat center;\n  background-size: 100% 100%;\n}\n.record-view .container .record-body .record-list .record-marquee .record-loudspeaker {\n  height: 1.2rem;\n  width: 1.2rem;\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAntJREFUWAntVs9LVFEU/s5oY1mWQUUrqchFEbUKKqIfUAZuWvUXBLmJLAvbztaCUkuXtW8RbkJEVy0qCsSGNrWJolJKEMtFmvOO331473sv34x3lGGC5sCbe9+53/nu986c+94Bava/Z0DWmwAdwBbM4yzqcACKV3Idz4tx6iC2EzcnHfhjMfV2Uu6oT0g1haNY4OaCBgRkEBzn7woB2oMmZHGeQg8z6g0xz+x+axKg97EH39DOJ95licJRsSl+r0pJ/RSlOMMry7sFjh/imLIEaD+2ooA2Ehwi0er2kLggxBtsnnkYlcv4FQ9cIUAfYyMhTRYk1/DDzLUPJ0l2itOsXVt1nMckUz6BDMalE5/T8E4An64Bi7iInyymgMmKLBemshfnIpffTG5hmsihUuiMW1xkqgQH/9o8XBbxSrijKmcSCTDHqAoWCQjQWIX9WR5VNleEldKhOdRjB7Yl+KcxKzmWPM1LwPIpSHB43zTjCl+8yRdWM74zftBweAnw3iwNqPjIP7ousRTQt2xeAswx5Ot3TSY3MFwqsOpF+A8JyGCmVKoqtRZloICXldqkFK8TIF14TeAQK/YTrxl32ehM+d8Dc3z1LjZbirQx/tVLW3c+vYPd2MAmBGhxzpQJqz5n3dqLC/zAHeN9Hr8xJreTvYDBuQzYoGKjdGOK5I9I+JSYuWK4hL/Apg38vgY4wi7jKnuKE2ErFwN5C7AxbDrzfK084PWCYkwnWNTkJt6ygxog4D2Rpm9sY4tyKR7g/RfEg+ycTcxOVkY7ifeGPtYOO58+ux4f9R72M9+n6fvChxixa+sSYEmY2lYK2Uch71jMX62/NtYy4JOBJQHalICjtipaAAAAAElFTkSuQmCC") no-repeat center;\n  background-size: 100% 100%;\n}\n.record-view .container .record-body .record-list .record-no-item {\n  margin-top: 5.3rem;\n  font-size: 1.1rem;\n  color: rgba(44,44,60,0.6);\n  text-align: center;\n}\n.record-view .container .record-body .record-list .record-no-item .no-item-icon {\n  height: 4.6rem;\n  margin-bottom: 0.7rem;\n  background: transparent url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABwCAYAAAGfouVPAAAABGdBTUEAALGPC/xhBQAADcZJREFUeAHtHWt3E8d1H5JfsimQxoVCSSCckwbJsh0TSOIniUNCW77khP/j/+Nz+EIbWkKD4weuTyIcW3LSpEBJ0mBwUpvUTyztbu9dacezT+3u7K4ke/cce+d5nzNzZ2fujHiOerq7BwaoqC6oKG3zi4u3NnWJ2ezwVV2CIQL5g4Ykd1EdYF3ERX2+q2toiOPkJhdl1SI8L7Zy5Upuq3AcUpXA4t3dg++7raYoUNIPJsEtBrqcSh6dgOFMZvCPWlqhMPUXLUzeRvK6ugZGSSYEMpmBP9FxIgg6MZ+fvg1xXksrFKb/rIW1tyV5kIkysn18CYKQ0dU1/JYgSKId+IWF6Wld3sjIiB2Zajmd8t00VAIwnR5p16FyiKgiFkXlEuhi26EcyVIUaZvr6xv9FUlxEeCz2YEPeJ53lL8OjlcMnpVnkn02+3anLItvIBk8Lyv5/MzHjiRls5dTugLcmJ4KGx6wyWh/uvomkiq5tlLTo9PBso6Q1kpnYxMArepbJ13AIQzj28Di4mc3bIuAVDPp9IDjWG5bmcqw7QCY0dv73m+pskxBJLa7uz9NgNhiJiX8BbLZkZMIW7UpPF/6ZyqlrPsD5Vxrc7NpVG1ayWTb89nZ2666uTNIcy5wwqlIYCxJpNPXXFtIMyinlJUyEkniS0tL47tORf3mISeeO5YfZHbdncCCIfkIdrAPP7xksqU3btwQi8X2Dxw7H0CqigTM6RqyPD5+mxhvQgHXyom2Fm2vVFUkWLQapXvgrEOR6KTSGXlP1s2aXvtUy1HYaYZsD6qcY5pbQLIJCY41MAMqKIr8rBpAY74sczB95x8sLU19ZcwjcZx2lJGQJM8Bq/o6xeNUhbUlASfzRkQECU67JEla80y6ocLi4sR/MMlyMmbEbqjrOUrDUznBhKNH+ZueITlXeKZNSgW06yAmbmJiouRcx1su6HZKUQTVfMCsUZ2ZhGKwFEXkBYFrUceu9nZpxhudbktLHDG/s7OzoXCCpICkIjRaWitwKwQv5fA7VtVJqXTsjpeKXsqK4sr7KpKwJhFITGQ6IWOXFxF4LRsJElUn1SjLZofekWWl1VhOFPnHCwuT88Z0Y7wqEhx2OK4499FHl382Vr5+/ZN+XOewXN+gCldFgmUXF++uwB9VjQSnykSQuGXAFRIEhCO18RFhZifLRXt7XqlQFQlljk2TDoBh+/VKE1QVCVXYFUCqPAlG0oT3DxLV/BLhhRSwajEmVPh9L0m7faaMCBKw6ywtTduvcFRoqMoILCwMQJ+DLzp5d2Fh6m8R0E5Q9Pf3d6yvJ0Yw4dVXOz8eHx83DwiV0o6M4OoIDhwwPP4bRq5CpU7kL210TCblL3K5qWUrAiwZwUXS1VXlClaAVYQ7S0sTG1aVo0zDxVGOE5OSJK/CF5ZpJmpihO4P1OgbJc22uGCNvwtWel+26jc6RmrZH2ypN2TY9RvCiNYfYP3u4cLCzJKhft1Fjf2Gr8f+4FZqdL+JZOHGLWEs5chMKJlMTuZyt39hAVaLuloTi2QiFAWDhJFEIul77hkFodVwxH2kmoSiyt+/fSQqCYaFh3T2sBBEBXffMEIMIovk0DuD57lf+4WRTG78NZfLFf3Wx3rMjOAWESyP4p7gvYWFT3/0SgyOOrhnCPXQY8a3LWNuWjwvPEXiZXn3NXx7eQxOFb6ZQJzMGvnyy8l/AZwHsCD+njamu2WmWCxy4HaxBBuwD93WsSvHzEgFsBz1woSRIeamZQRYq3jMSK0kb4eXaKSlZVu2K9QI6Ty4SY4IgtjRCMQ60UhWUZwK4f55IlHqcSoTRh64Akr5/GezbmC7HH5Ll2DT2Q28QMvAtAf8NQeP2y2T0siqMoLb/rBUCUunEge759N05ZDDOO1JF4vCecDDthp/7do18ZtvVv6ABNdiDZhet7Ja76UFSUYtOlELf/vtk1EMgzbWarGQffRoAl2xwUdMOGrp54KZlceWEVzM1jw+YKMlyial0aZ6sSiK8qicULpEMiwCtoxoO1Si2JSzqBdZUj4/mcf+ifs0Ok9WAwWWjOCqPJbDXar5+U8eG+pEHj18WJlApIqSOIP91ooAEyPYFnGrDQsfOSL+3apS1GkzMzPo3au63mn91kiDiRGOK7dF3F4I2tPKiNxLHL20sDz2297efpPztY4RtBnYFrFN1uceCa/6jEhSwrTDTBjBfRKOS54uSylxx4u0oipbdjmU1EWKdHqwn8ZLGFlbk97FjFrZDJoop7CdbVEZqQeb4UQ8nYf91sq2qIzUi82gCXYKW9kWod5shhMDdB5tW7B/E4cXcHfe4XmJaW2JRhRFGGbHmkfcMxipyg9M0Vtwut6oD2EkldpVZ5qNxMj6etshQShdQJoJI2E6AYclnJ6ekWboEupD7EhYyKKCGzMSlaTd4mlojYhigpgL0tnD9JN3K1Wv5YrFHVgwKpsMwoj2fe4VWL2UJ4xIUmekjpdBCKCl5adDxaLyFsIijIR5cCEIoq1ggB0hZ4UaurPTzMWM0NKoh3CskXrQAk1DrBFaGvUQ3jcaIQaRVarZ7ODrcDT6GEx1YP5T/YE9j61Egs/nchOmQ2LVa5tLMDOCly7guUYEDQ428GdGYpUCHkXtOL2AXSk4jDY9Z1XGSxozIzy/fLmyx7gGe/VzV69etT2sQhN2/fot8O9KXoS6neglxOo8zcoIHC8WeVz01na1wIGMptcpvAK3g8CitNK7s/McNlw505kQp8rGPKbODpsuan040+HLawL4V/c8YAMAlqLYHiZGtDNPAjwXL1455JUUuL2oPAVPiN95rWssz9q0OBh5vi6VlNe2t7eGYfnVCN82Xj67Vc6+d2/ivm1BlxlMGkEcSIR2ChWJc/uHdXGPEnaiTHejYJ7Xh1kjiLBQuPsAXvjncvDFWv4dMdXahn+BMELBJKsaVFokQeamFQmVLpDEjLgQUqRFYo1EKm4XyGKNuBBSpEUaWiPNza1kskp2dSMVX/DInjW0RjR5wCe2u+9rrUKVNzhDj/QJgnK8Srl9lQ3HRh7DsZF7wFQg0zMvk1VbQZ49e6W5rW0TvI54w7WotlX2WYayubWVmrl//+ZzVsaYFXLhwrsvbG3tvokfuxoxsswvFwoTX2jx/fiGHdcLsIL3G403cLyS2tuL/wC3i1Utzc+byYUmk3n7FfAzfx2WUIhi8ZsX7pCq+wsj/AiLrvP06fc/njhxWgb/kRcxHUQgFIviqc7O35VWVr73fc2iX4WgvTgPneKMRiRQJre2Jmfn5yc9H6jUYDTae3n50erJk6dXSyX5hNYoQS+doJQOUMoTP/yQlu22ctlebMDaldC2Vye4MXQPZuOEwAuxZXVVAhvKLhNPCkF7sb1dvAitgfSsir3ANetAZhmNowYTpXxPz/B5GMKOaTl+7AoRrAbE7k3ZC8p4Hwx7YScTY/qTJ989ZrUrbhQS2wuj5B3iy4x2xXHIsv6+ONj2wkEXuiy/dsVWIbG90MnXb4SH75U3vHyvWA5Zsb3wK39zPa/fK0aFxPbCLFPmlGUPdoUMWbG9YJZ7VQBWdgXWODY2N9vuautgqkJie1FVlkEWcLQrMES98wr8VNk5GiM6lIAvBrgujJEeROfHYVYJjCk9PUNn4aP69zQkvAEK7mUcHIb1F88uSTSgOByYBPD8pP6n6mS5sQ6DBiaKGgFCz0katcmpKZXqmJybu/k/ulAcDkcC6EsLl9UN0dDJupSWWCoVdRrT0uN38BKQpJJJ1iaFBI82huhFArFCvEgrgrKxQiIQshcUJqO+s7MpwhelKd0L0LisOwlsbYnizg45jqtWMgkebjLrhx9LcQcxLsUoAb0yEJhJIbjtCFc3xRphFLW76iL6RugWeE0KaWtLTcffIe7EyVoq/g5hlWDA9ePvkIAFGga4eNobhlQZYMYKYRBeGFVjhYQhVQaYsUIYhBdG1VghYUiVAWasEAbhhVHV9GEYBhI/MPv6+pIdHR26r1g/cKzqrK+vS6w/imUFN4i0ulEIXsuTSDxNw1mLk3i5BfzqExfemlo7Bz9DBb+rJcFKEfcD3J7zVb0oqC4UkskMZgVh5SVF4dWbRrCl4Q094HwBZ/b0e/7srVDh4bRrMyq9sp99Cn597RRch1/Tn87W+Kq5QuCK+nNwEusljSBosr9sb6fmNMcxLT3oNzoGtrZuvLnncZM8nckMSYXC5NdB4/ICr6ZGHX9bAwRyQiMYj8XBwcnPw1YG4kMcTU2HP0ecGn642+fE2NhYTWVSU+RwXRUIQ9nUBIIneTc3k+QEkpYe1nt3d+0Y4tTgw/VXG6CQmm491HrIUgShZYHjtgbhirlkWTDgTJkZPgvxh6lU80/b22BMAnySSTmhKKUXd3flM7AX0bwHGn/lI5WH+IFWCLe4eAt6yNitrq5P0yCgl1FA0GbhpjnpHNyNhtFAH5y94SNQl1iA3XqUz4/CUe4xMnyVS0X/v9Y9pMLxmJzPc9g68319V9ueP//vcZgFvSBJShs9pAQhHrQZoshvybLyc1PTkSe53I2K1ieDAM8Mo04UssdHRUDg6K3eU7eXcUBCxKAdEH7rns1YIXWmolghsULqTAJ1Rk7cQ2KF1JkE6oycuIfECqkzCdQZOaYPw2Kx1NHVNRD3nAgUBZtx7fQSDqI0KQTW1noN/r8RkHYwUexdjLjHfwIW8uAns6WaL6rtkXRwQ9BjNv4PjScMX2z/HqQAAAAASUVORK5CYII=") no-repeat center;\n  background-size: 4.6rem 4.6rem;\n}\n.record-view .container .record-body .record-list .record-no-item .error-icon {\n  height: 8rem;\n  background: transparent url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABeCAMAAAAeyGpnAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURbu7u7u7u7q6uru7u7u7u7u7u7q6ukxpcb29vbu7u7u7u7u7u7u7u7Kysru7u7u7u7u7u7u7u7y8vLu7u7u7u7u7u0WLhysAAAAWdFJOU5QOFZGFV0EAB4xMcWgBdzEdYSN+OCpuh7jGAAAD5ElEQVR42r2aCbLrKAwAxWr21b7/VedXUhUekZck4OkDpEsgBQkDyxcoRaM0wjkbrHVOyJiI8svnfGzzpKwiaOjRNcuNqsk2UkyAI6rYyERbko7BKdYkP8dWRIVruNj8uI0215Uvl0Gbl8h1Gh8dsVHH4Cvq+ruNOPgWLcivthXeYYxXm4X5h8i2agaIUH6zKQEdmjvTlbJKreAbPPqfbBkaLIhIFowqxr4JmVQ/2LxpYVnZVEgY3ZvPqB/2LWl4Yld1XijxLXmF+t7m5eM3uCHLFWq1SHdhw7pNhJrL8gnE6G4xr20YRT8+T3yx0NDruW0cmv/qymwbrlDWdIFMtmHMH1325zalZurYempLOdNxHbyo9MSmHIAbjs6LphMntgj/iMsoxOK8xDYSWiYNkXhLFHVg8xIeyGUY2YLbDmyUw4M6HpxyB8EB3lyxDFP4fnCAThfQaZmYl0Lt2HxG/wEjpNpqbscWWbPpuAzTgls9sinbdfVqYhVkhWyS9W3MMkx+rRR9t5EKjTklHl9ZF/2bzTDoMeM1F15Z2dnaIjd4mpAneKGgVQfqmcbYGDxhqbNtGhB6G7UR/qqBvzaVATHjoHOvdfpri7BLnHaIW99sJABipArUKp/kV8rJJ1HBssIBcjAXMRJohQM4/ckW4JAMBg4RYwc3JoKDQ9zgnwhOc9iC5g9YG3gf6FB+suEcbw0YeEIfFP6qa/qEDHUlGKFap0DqtEahaGh0jTO2sTI+6ewX1K5tm3FwIyx92FAqxYntaz/vNJu3LeRhSMDZ39tyK+pxVo0OsINeOQ+aWhWgFhXwWgc1Qbdx1Hh0toJashF8hgYTeMbRXfrMrIJKkE1ZlCaz5m+5My2KeRvXd8RB7djinKkD39zGvbmb6rlLqWwrbGxTDu3qGFu7V8A2LyfMOPimWPjehpPWzgmu6FbYyKYyjJYcvpg2vrc1Yn8ajaPW/kIaDu6MjF8mgm39QMzLjTYcnFN32tC0b2604eBYvNGGb2l4utGGT8FA77YtlDedI3fblpV1LefNNi+gEb7bO0VLUtc2nJf4Q+E1VDAAG/2JDdMNx9p8unl+C1dHPxxd1DZc+Swwwy77GrjoPT//2hfQbeqBDRM7HVhJzl3dl0y9fmXDOggmHa+htBqNGGc2zFahhztJ/YIgUVQGHfZy3zDJoomPWxP/1JMnm8kcf10vv3zLJ5kBEjLNgxPCGCNc5TNfDnipb3wVgSkDLz5uf81SDRl9qWM+9XGRJrxCSh/5qij/3wsrmfzU12NWwwHBbGT6y7i05rr3Mq6QGS/jsFCpFKUR2dlgnRBy3ZL66tXff6Un6HQirJ99AAAAAElFTkSuQmCC") no-repeat center;\n  background-size: 4.8rem 4.2rem;\n}\n.record-view .container .record-body .record-list .list-item:last-child {\n  margin-bottom: none;\n}\n.record-view .container .record-body .record-list .list-item {\n  height: 5.4rem;\n  padding: 0 0.4rem 0 0.4rem;\n  margin-bottom: 5px;\n  background-color: #fff;\n}\n.record-view .container .record-body .record-list .list-item .item-icon {\n  width: 5.4rem;\n  height: 5.4rem;\n  overflow: hidden;\n}\n.record-view .container .record-body .record-list .list-item .item-icon >img {\n  width: 100%;\n  height: 100%;\n}\n.record-view .container .record-body .record-list .list-item .item-status {\n  width: 4.5rem;\n  height: 5.4rem;\n  text-align: center;\n  font-weight: bold;\n}\n.record-view .container .record-body .record-list .list-item .item-status .item-status-counter {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #ff5656;\n  font-size: 0.6rem;\n  height: 1.9rem;\n}\n.record-view .container .record-body .record-list .list-item .item-status .item-status-btn {\n  width: 4.5rem;\n  height: 1.6rem;\n  color: #fff;\n  font-size: 0.7rem;\n  border-radius: 5px;\n  background-color: rgba(255,76,77,0.3);\n  border: none;\n}\n.record-view .container .record-body .record-list .list-item .item-status .item-status-btn.active {\n  background-color: #ff5656;\n}\n.record-view .container .record-body .record-list .list-item .item-desc-list {\n  font-size: 0.86rem;\n  padding: 0.5rem;\n  height: 5.4rem;\n}\n.record-view .container .record-body .record-list .list-item .item-desc-list .item-name {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  color: #2c2c3c;\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n.record-view .container .record-body .record-list .list-item .item-desc-list .item-time {\n  font-size: 0.6rem;\n  color: #7a7a84;\n}\n.record-view .container .record-close {\n  width: 2.86rem;\n  height: 2.86rem;\n  background: url("data:image/png;base64,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") no-repeat;\n  background-size: 100% 100%;\n}\n', ""])
	},
	304: function(module, exports, __webpack_require__) {
		var constant = __webpack_require__(305),
			mod = angular.module("app.seckillCMBCat.constant", []);
		mod.constant("SECKILL_CMB_CAT_CONSTANT", constant), module.exports = mod.name
	},
	305: function(module, exports) {
		module.exports = {
			API: {
				GET_HOT_SPOTS_WITH_CMB_CAT: "getHotspotsWithCmbCat.json",
				GET_CAMPAIGN_INFO_WITH_CMB_CAT: "getCampaignInfoWithCmbCat.json",
				GET_INVENTORY_WITH_CMB_CAT: "getInventoryWithCmbCat.json",
				SECKILL_WITH_CMB_CAT: "seckillWithCmbCat.json",
				GET_SECKILL_RECORD: "getSeckillRecord.json"
			},
			CMB_POST_MODE: "cpSeckillWithCmbCat",
			CACHE: {
				HOT_SPOTS: "SECKILL_CMB_CAT_HOT_SPOTS_",
				CAMPAIGNS: "SECKILL_CMB_CAT_CAMPAIGNS_"
			},
			NEW_EGG_CHANNEL_CODE: "NewEgg"
		}
	},
	306: function(module, exports, __webpack_require__) {
		var mod = angular.module("app.seckillCMBCat.services", [__webpack_require__(307), __webpack_require__(309)]).name;
		module.exports = mod
	},
	307: function(module, exports, __webpack_require__) {
		var hotSpots = __webpack_require__(308),
			constant = __webpack_require__(304),
			mod = angular.module("app.seckillCMBCat.hotspots", [constant]);
		mod.service("SECKILL_CMB_CAT_HOT_SPOTS", hotSpots), module.exports = mod.name
	},
	308: function(module, exports) {
		module.exports = function($state, $window, CONSTANT, LOGIN, NATIVE, SECKILL_CMB_CAT_CONSTANT, NETWORKV2) {
			"use strict";

			function getHotSpotsByCgName(_scope, cgName, callback) {
				var hotSpotsCacheObj, hotSpotsCache = $window.localStorage.getItem(SECKILL_CMB_CAT_CONSTANT.CACHE.HOT_SPOTS + cgName);
				if (hotSpotsCache) {
					hotSpotsCacheObj = JSON.parse(hotSpotsCache);
					var currentTime = (new Date).getTime(),
						expireTime = hotSpotsCacheObj.timeStamp + 1e3 * parseInt(hotSpotsCacheObj.timeToLive, 10);
					currentTime > expireTime ? ($window.localStorage.removeItem(SECKILL_CMB_CAT_CONSTANT.CACHE.HOT_SPOTS + cgName), getHotSpotsFromServer(_scope, cgName, callback)) : callback && callback(hotSpotsCacheObj.hotSpots)
				} else getHotSpotsFromServer(_scope, cgName, callback)
			}
			function getHotSpotsFromServer(_scope, cgName, callback) {
				NETWORKV2.post4Data({
					url: SECKILL_CMB_CAT_CONSTANT.API.GET_HOT_SPOTS_WITH_CMB_CAT,
					data: {
						cgName: cgName
					},
					$scope: _scope,
					success: function(data) {
						if (data.respCode == CONSTANT.RESP_CODE.SUCCESS) {
							if (data.hotspots) {
								if (data.timeToLive) {
									var hotSpotsTmp = {
										timeToLive: data.timeToLive,
										timeStamp: (new Date).getTime(),
										hotSpots: data.hotspots
									};
									$window.localStorage.setItem(SECKILL_CMB_CAT_CONSTANT.CACHE.HOT_SPOTS + cgName, JSON.stringify(hotSpotsTmp))
								}
								callback && callback(data.hotspots)
							}
						} else $state.go("error", {
							back: "seckillCMBCatHome",
							msg: data.respMsg,
							params: JSON.stringify({
								cgName: cgName
							})
						})
					},
					fail: function(data) {
						$state.go("error", {
							back: "seckillCMBCatHome",
							msg: data.respMsg,
							params: JSON.stringify({
								cgName: cgName
							})
						})
					},
					error: function() {
						$state.go("error", {
							back: "seckillCMBCatHome",
							msg: "网络出错，轻触屏幕重新加载。",
							params: JSON.stringify({
								cgName: cgName
							})
						})
					}
				})
			}
			return {
				getHotSpotsByCgName: getHotSpotsByCgName
			}
		}
	},
	309: function(module, exports, __webpack_require__) {
		var campaigns = __webpack_require__(310),
			constant = __webpack_require__(304),
			mod = angular.module("app.seckillCMBCat.campaigns", [constant]);
		mod.service("SECKILL_CMB_CAT_CAMPAIGNS", campaigns), module.exports = mod.name
	},
	310: function(module, exports) {
		module.exports = function($state, $window, CONSTANT, AXIO, LOGIN, NATIVE, SECKILL_CMB_CAT_CONSTANT, NETWORKV2) {
			"use strict";

			function getCampaignsByCgName(_scope, cgName, callback) {
				var campaignsCacheObj, campaignsCache = $window.localStorage.getItem(SECKILL_CMB_CAT_CONSTANT.CACHE.CAMPAIGNS + cgName);
				if (campaignsCache) {
					campaignsCacheObj = JSON.parse(campaignsCache);
					var currentTime = (new Date).getTime(),
						expireTime = campaignsCacheObj.timeStamp + 1e3 * parseInt(campaignsCacheObj.timeToLive, 10);
					currentTime > expireTime ? ($window.localStorage.removeItem(SECKILL_CMB_CAT_CONSTANT.CACHE.CAMPAIGNS + cgName), getCampaignsFromServer(_scope, cgName, callback)) : callback && callback({
						campaignList: campaignsCacheObj.campaignList,
						campaignGroup: campaignsCacheObj.campaignGroup
					})
				} else getCampaignsFromServer(_scope, cgName, callback)
			}
			function getCampaignsFromServer(_scope, cgName, callback) {
				NETWORKV2.post4Data({
					url: SECKILL_CMB_CAT_CONSTANT.API.GET_CAMPAIGN_INFO_WITH_CMB_CAT,
					data: {
						cgName: cgName
					},
					$scope: _scope,
					success: function(data) {
						if (data.respCode == CONSTANT.RESP_CODE.SUCCESS) {
							if (data.timeToLive) {
								var campaignsTmp = {
									timeToLive: data.timeToLive,
									timeStamp: (new Date).getTime(),
									campaignList: data.campaignList,
									campaignGroup: data.campaignGroup
								};
								$window.localStorage.setItem(SECKILL_CMB_CAT_CONSTANT.CACHE.CAMPAIGNS + cgName, JSON.stringify(campaignsTmp))
							}
							callback && callback({
								campaignList: data.campaignList,
								campaignGroup: data.campaignGroup
							})
						} else $state.go("error", {
							msg: data.respMsg,
							back: "seckillCMBCatHome",
							params: JSON.stringify({
								cgName: cgName
							})
						})
					},
					fail: function(data) {
						$state.go("error", {
							back: "seckillCMBCatHome",
							msg: data.respMsg,
							params: JSON.stringify({
								cgName: cgName
							})
						})
					},
					error: function() {
						$state.go("error", {
							back: "seckillCMBCatHome",
							msg: "网络出错，轻触屏幕重新加载。",
							params: JSON.stringify({
								cgName: cgName
							})
						})
					}
				})
			}
			return {
				getCampaignsByCgName: getCampaignsByCgName
			}
		}
	},
	311: function(module, exports) {
		module.exports = function() {
			return function(data) {
				return parseFloat(data)
			}
		}
	}
});`
$done(body);