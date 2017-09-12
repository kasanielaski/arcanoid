/* eslint no-new:0 */
/* global document, Vue */
document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: '#game',
		data() {
			return {
				ballX: 0,
				ballY: 0,
				ballSize: 50,
				boardPosition: 200,
				boardWidth: 160,
				boardHeight: 30,
				fieldWidth: 720,
				fieldHeight: 480,
				step: 25,
				interval: 10,
				intervalId: null,
				dirX: 1,
				dirY: 1,
				score: 0
			};
		},
		methods: {
			onMove(e) {
				this.boardPosition = e.clientX - (this.boardWidth / 2);
				if (this.boardPosition < 0) {
					this.boardPosition = 0;
				}
				if (this.boardWidth + this.boardPosition > this.fieldWidth) {
					this.boardPosition = this.fieldWidth - this.boardWidth;
				}
			},

			onClick() {
				const self = this;
				if (this.intervalId === null) {
					this.intervalId = setInterval(() => {
						self.ballX += self.step * self.dirX;
						self.ballY += self.step * self.dirY;
						if (
							self.ballX >= self.fieldWidth - self.ballSize ||
							self.ballX <= 0
						) {
							self.dirX *= -1;
						}
						if (self.ballY <= 0) {
							self.dirY *= -1;
						}
						if (
							self.ballY >=
							self.fieldHeight - self.ballSize - self.boardHeight
						) {
							const ballPosition = self.ballX + (self.ballSize / 2);
							if (
								ballPosition >= self.boardPosition &&
								ballPosition <= self.boardPosition + self.boardWidth
							) {
								self.dirY *= -1;
								self.score += 1;
							} else {
								clearInterval(self.intervalId);
							}
						}
					}, 200);
				}
			}
		}
	});
});
