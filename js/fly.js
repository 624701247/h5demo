var carry;


var bodyHei = document.body.clientHeight;

// 
var car = {}
!function(cc) {
	cc.el_carCont = document.getElementById('carCont')
	cc.el_car = document.getElementById('car')
	cc.carWid = cc.el_car.clientWidth
	cc.carHei = cc.el_car.clientHeight
	cc.carContWid = cc.el_carCont.clientWidth

	cc.curClientX = -1
	cc.touchDifLeft = -1 //触摸点与car中心点left值偏差

	cc.minLeft = -cc.carWid / 2
	cc.maxLeft = cc.carContWid - cc.carWid / 2
	console.log('wid', cc.carWid, cc.carContWid)

	cc.init = function() {
		this.el_carCont.addEventListener("touchstart", this.onTouchStart.bind(this), false);
    	this.el_carCont.addEventListener("touchmove", this.onTouchMove.bind(this), false);
    	this.el_carCont.addEventListener("touchend", this.onTouchEnd.bind(this), false);

    	cc.el_car.style.left = (this.carContWid - this.carWid) / 2 + 'px'
	}
	cc.onTouchStart = function(ev) {
		ev.preventDefault();
		if(ev.target == this.el_car) {
			var touch = ev.changedTouches[0]
			// this.curClientX = touch.clientX
			this.touchDifLeft = touch.clientX - this.el_car.offsetLeft
			console.log('dd', this.touchDifLeft)
		}
		else {
			this.curClientX = -1
		}
	}
	cc.onTouchMove = function(ev) {
		ev.preventDefault();
		// if(!this.curClientX == -1) {
		if(!this.touchDifLeft == -1) {
			return 
		}

		var touch = ev.changedTouches[0]
		this.drag(touch.clientX)
	}	
	cc.onTouchEnd = function(ev) {
		ev.preventDefault();
		// if(!this.curClientX == -1) {
		if(!this.touchDifLeft == -1) {
			return 
		}
	
		var touch = ev.changedTouches[0]
		this.drag(touch.clientX)
		// this.curClientX = -1
		this.touchDifLeft = -1
	}
	cc.drag = function(newClientX) {
		// var newLeft = parseInt(this.el_car.style.left) + newClientX - this.curClientX
		var newLeft = newClientX - this.touchDifLeft
		if(newLeft < this.minLeft) {
			newLeft = this.minLeft
		}
		if(newLeft > this.maxLeft) {
			newLeft = this.maxLeft
		}
		this.el_car.style.left = newLeft + 'px'
		// this.curClientX = newClientX
	}

	// return ： 1、没碰到，视野㕯； 2、没碰到，视野外； 3、碰到
	car.checkIsHit = function(el) {
		var carTop = this.el_car.offsetTop + this.el_carCont.offsetTop
		var carLeft = this.el_car.offsetLeft
		if(el.offsetTop + el.clientHeight < carTop) { //在上边
			return 1
		}
		if(el.offsetTop > bodyHei) { 
			return 2
		}
		if(el.offsetLeft + el.clientWidth < carLeft) { //在左边
			return 1
		}
		if(carLeft + this.carWid < el.offsetLeft) { //在右边
			return 1
		}
		if(carTop + this.carHei < el.offsetTop) { //在下边
			return 1
		}

		return 3
	}	
}(car)

// 
var golds = {}
!function(gs) {	
	gs.el_goldCont = document.getElementById('goldCont')

	gs.rdDropOne = function() {
		var el = document.createElement('div')
		el.className = 'gold gold-' + carry.randomInt(1, 80)
		this.el_goldCont.append(el)
	}

	gs.init = function() {
		for(var idx = 1; idx <= 80; idx++) {
			var str = ''
			str += '.gold-' + idx + ' {'
			    str += 'animation: goldFly-' + idx + ' 2.4s linear;'
			    str += 'left: ' + carry.randomInt(0, 100) + '%;'
			    str += 'top: ' + carry.randomInt(-10, -30) + '%;'
			str += '}'
			str += '@keyframes goldFly-' + idx + ' {'
			    str += '100% {'
			        str += 'left: ' + carry.randomInt(0, 100) + '%;'
			        str += 'top: 120%;'
			    str += '}'
			str += '}'
			carry.insertCss(str)
		}
	}

	gs.getGoldAry = function() {
		return this.el_goldCont.querySelectorAll('.gold')
	}
}(golds)

// 
var fgame = {}
!function(fg) {
	fg.timer = null
	fg.count = 0

	fg.init = function() {
		car.init()
		golds.init()

		this.timer = setInterval(this.onTimer.bind(this), 25)
	}
	fg.onTimer = function() {
		this.checkEat()
		this.count++ 
		if(this.count == 20) {
			this.count = 0
			for(var idx = 0; idx < carry.randomInt(2,3); idx++) {
				golds.rdDropOne()
			}
		}
	}

	fg.checkEat = function() {
		var el_golds = golds.getGoldAry()
		for(var idx = 0; idx < el_golds.length; idx++) {
			var st = car.checkIsHit(el_golds[idx])
			if(st == 2) {
				el_golds[idx].remove()
			}
			else if(st == 3) {
				el_golds[idx].remove()	
			}
		}
	}

}(fgame)

fgame.init()
