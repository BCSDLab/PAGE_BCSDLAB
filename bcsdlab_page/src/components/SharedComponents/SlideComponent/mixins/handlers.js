/**
 * Handlers methods for mouse/touch events
 */
const mixin = {
	methods: {
		handleMouseDown (e) {
			
		},

		handleMouseMove (e) {

		},

		handleMouseUp () {
			this.mouseDown = false
			this.enableScroll()
		},

		handleMouseOver (element) {
			if (this.settings.autoplay) {
				if ((element === 'dot' && this.settings.pauseOnDotsHover) || (element === 'track' && this.settings.pauseOnHover)) {
					this.pauseAutoPlay = true
				}
			}
		},

		handleMouseOut (element) {
			if (this.settings.autoplay) {
				if ((element === 'dot' && this.settings.pauseOnDotsHover) || (element === 'track' && this.settings.pauseOnHover)) {
					this.pauseAutoPlay = false
				}
			}
		}
	}
}

export default mixin
