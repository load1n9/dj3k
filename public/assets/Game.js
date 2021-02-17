
// You can write more code here

/* START OF COMPILED CODE */

class Game extends Phaser.Scene {

	constructor() {
		super("Game");

		/** @type {Phaser.GameObjects.Image} */
		this.exit;
		/** @type {Phaser.GameObjects.Image} */
		this.blue1;
		/** @type {Phaser.GameObjects.Image} */
		this.blue2;
		/** @type {Phaser.GameObjects.Image} */
		this.purple1;
		/** @type {Phaser.GameObjects.Image} */
		this.green1;
		/** @type {Phaser.GameObjects.Image} */
		this.orange1;
		/** @type {Phaser.GameObjects.Image} */
		this.pink1;
		/** @type {Phaser.GameObjects.Image} */
		this.blue3;
		/** @type {Phaser.GameObjects.Image} */
		this.blue4;
		/** @type {Phaser.GameObjects.Image} */
		this.blue5;
		/** @type {Phaser.GameObjects.Image} */
		this.purple2;
		/** @type {Phaser.GameObjects.Image} */
		this.purple3;
		/** @type {Phaser.GameObjects.Image} */
		this.purple4;
		/** @type {Phaser.GameObjects.Image} */
		this.purple5;
		/** @type {Phaser.GameObjects.Image} */
		this.green2;
		/** @type {Phaser.GameObjects.Image} */
		this.green3;
		/** @type {Phaser.GameObjects.Image} */
		this.green4;
		/** @type {Phaser.GameObjects.Image} */
		this.green5;
		/** @type {Phaser.GameObjects.Image} */
		this.orange2;
		/** @type {Phaser.GameObjects.Image} */
		this.orange3;
		/** @type {Phaser.GameObjects.Image} */
		this.orange4;
		/** @type {Phaser.GameObjects.Image} */
		this.orange5;
		/** @type {Phaser.GameObjects.Image} */
		this.pink2;
		/** @type {Phaser.GameObjects.Image} */
		this.pink3;
		/** @type {Phaser.GameObjects.Image} */
		this.pink4;
		/** @type {Phaser.GameObjects.Image} */
		this.pink5;
		/** @type {Phaser.GameObjects.Image} */
		this.icons;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	generated() {

		// gameBackground
		this.add.image(1159, 761, "gameBackground");

		// symbol_1400003_png
		this.add.image(215, 312, "basicgui", "Symbol 1400003.png");

		// symbol_450015_png
		this.add.image(1396, 149, "basicgui", "Symbol 450015.png");

		// exit
		const exit = this.add.image(2244, 48, "basicgui", "Symbol 386.png");

		// blue1
		const blue1 = this.add.image(613, 441, "buttons", "Symbol 1030001.png");

		// blue2
		const blue2 = this.add.image(613, 669, "buttons", "Symbol 1030001.png");

		// purple1
		const purple1 = this.add.image(833, 441, "buttons", "Symbol 980001.png");

		// green1
		const green1 = this.add.image(1053, 441, "buttons", "Symbol 930001.png");

		// orange1
		const orange1 = this.add.image(1273, 441, "buttons", "Symbol 880001.png");

		// pink1
		const pink1 = this.add.image(1493, 441, "buttons", "Symbol 830001.png");

		// blue3
		const blue3 = this.add.image(613, 897, "buttons", "Symbol 1030001.png");

		// blue4
		const blue4 = this.add.image(613, 1125, "buttons", "Symbol 1030001.png");

		// blue5
		const blue5 = this.add.image(613, 1353, "buttons", "Symbol 1030001.png");

		// purple2
		const purple2 = this.add.image(833, 669, "buttons", "Symbol 980001.png");

		// purple3
		const purple3 = this.add.image(833, 897, "buttons", "Symbol 980001.png");

		// purple4
		const purple4 = this.add.image(833, 1125, "buttons", "Symbol 980001.png");

		// purple5
		const purple5 = this.add.image(833, 1353, "buttons", "Symbol 980001.png");

		// green2
		const green2 = this.add.image(1053, 669, "buttons", "Symbol 930001.png");

		// green3
		const green3 = this.add.image(1053, 897, "buttons", "Symbol 930001.png");

		// green4
		const green4 = this.add.image(1053, 1125, "buttons", "Symbol 930001.png");

		// green5
		const green5 = this.add.image(1053, 1353, "buttons", "Symbol 930001.png");

		// orange2
		const orange2 = this.add.image(1273, 669, "buttons", "Symbol 880001.png");

		// orange3
		const orange3 = this.add.image(1273, 897, "buttons", "Symbol 880001.png");

		// orange4
		const orange4 = this.add.image(1273, 1125, "buttons", "Symbol 880001.png");

		// orange5
		const orange5 = this.add.image(1273, 1353, "buttons", "Symbol 880001.png");

		// pink2
		const pink2 = this.add.image(1493, 669, "buttons", "Symbol 830001.png");

		// pink3
		const pink3 = this.add.image(1493, 897, "buttons", "Symbol 830001.png");

		// pink4
		const pink4 = this.add.image(1493, 1125, "buttons", "Symbol 830001.png");

		// pink5
		const pink5 = this.add.image(1493, 1353, "buttons", "Symbol 830001.png");

		// icons
		const icons = this.add.image(1388, 887, "dubstep");

		this.exit = exit;
		this.blue1 = blue1;
		this.blue2 = blue2;
		this.purple1 = purple1;
		this.green1 = green1;
		this.orange1 = orange1;
		this.pink1 = pink1;
		this.blue3 = blue3;
		this.blue4 = blue4;
		this.blue5 = blue5;
		this.purple2 = purple2;
		this.purple3 = purple3;
		this.purple4 = purple4;
		this.purple5 = purple5;
		this.green2 = green2;
		this.green3 = green3;
		this.green4 = green4;
		this.green5 = green5;
		this.orange2 = orange2;
		this.orange3 = orange3;
		this.orange4 = orange4;
		this.orange5 = orange5;
		this.pink2 = pink2;
		this.pink3 = pink3;
		this.pink4 = pink4;
		this.pink5 = pink5;
		this.icons = icons;
	}

	/* START-USER-CODE */

	// Write your code here.
	init(data) {
		this.counter = 0
		this.genre = data.genre
		this.generated()
		switch (this.genre) {
			case "dubstep":
				this.setupDubstep()
				break;
			case "rock":
				this.setupRock()
				break;
			case "pop":
				this.setupPop()
				break;
			case "dance":
				this.setupDance()
				break;
		}
		this.metronome = new Phaser.Events.EventEmitter();
		this.setupButtons()
		this.exit.setInteractive()
		this.exit.on("pointerup", () => {
			this.game.sound.stopAll();
			this.scene.start("Menu")
		}, this)
	}

	setupDance() {
		this.icons.setTexture("pop")
	}
	setupPop() {
		this.icons.setTexture("pop")
	}
	setupDubstep() {
		this.icons.setTexture("dubstep")
	}
	setupRock() {
		this.icons.setTexture("rock")
	}
	setupButtons() {
		this.blue1.setInteractive().on("pointerup", () => {
			if (this.blue1.frame.name === "Symbol 1030001.png") {
				this.blue1.setFrame("Symbol 1030002.png")
				this.blue1sound = this.sound.add(`${this.genre}blue1`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.blue1sound.play()
					}, this);
				} else {
					this.counter++
					this.blue1sound.play()
					this.blue1sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.blue1.setFrame("Symbol 1030001.png")
				this.blue1sound.stop()
				this.counter--
			}
		}, this)
		this.blue2.setInteractive().on("pointerup", () => {
			if (this.blue2.frame.name === "Symbol 1030001.png") {
				this.blue2.setFrame("Symbol 1030002.png")
				this.blue2sound = this.sound.add(`${this.genre}blue2`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.blue2sound.play()
					}, this);
				} else {
					this.counter++
					this.blue2sound.play()
					this.blue2sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.blue2.setFrame("Symbol 1030001.png")
				this.blue2sound.stop()
				this.counter--
			}
		}, this)
		this.blue3.setInteractive().on("pointerup", () => {
			if (this.blue3.frame.name === "Symbol 1030001.png") {
				this.blue3.setFrame("Symbol 1030002.png")
				this.blue3sound = this.sound.add(`${this.genre}blue3`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.blue3sound.play()
					}, this);
				} else {
					this.counter++
					this.blue3sound.play()
					this.blue3sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.blue3.setFrame("Symbol 1030001.png")
				this.blue3sound.stop()
				this.counter--
			}
		}, this)
		this.blue4.setInteractive().on("pointerup", () => {
			if (this.blue4.frame.name === "Symbol 1030001.png") {
				this.blue4.setFrame("Symbol 1030002.png")
				this.blue4sound = this.sound.add(`${this.genre}blue4`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.blue4sound.play()
					}, this);
				} else {
					this.counter++
					this.blue4sound.play()
					this.blue4sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.blue4.setFrame("Symbol 1030001.png")
				this.blue4sound.stop()
				this.counter--
			}
		}, this)
		this.blue5.setInteractive().on("pointerup", () => {
			if (this.blue5.frame.name === "Symbol 1030001.png") {
				this.blue5.setFrame("Symbol 1030002.png")
				this.blue5sound = this.sound.add(`${this.genre}blue5`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.blue5sound.play()
					}, this);
				} else {
					this.counter++
					this.blue5sound.play()
					this.blue5sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.blue5.setFrame("Symbol 1030001.png")
				this.blue5sound.stop()
				this.counter--
			}
		}, this)
		this.green1.setInteractive().on("pointerup", () => {
			if (this.green1.frame.name === "Symbol 930001.png") {
				this.green1.setFrame("Symbol 930002.png")
				this.green1sound = this.sound.add(`${this.genre}green1`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.green1sound.play()
					}, this);
				} else {
					this.counter++
					this.green1sound.play()
					this.green1sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.green1.setFrame("Symbol 930001.png")
				this.green1sound.stop()
				this.counter--
			}
		}, this)
		this.green2.setInteractive().on("pointerup", () => {
			if (this.green2.frame.name === "Symbol 930001.png") {
				this.green2.setFrame("Symbol 930002.png")
				this.green2sound = this.sound.add(`${this.genre}green2`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.green2sound.play()
					}, this);
				} else {
					this.counter++
					this.green2sound.play()
					this.green2sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.green2.setFrame("Symbol 930001.png")
				this.green2sound.stop()
				this.counter--
			}
		}, this)
		this.green3.setInteractive().on("pointerup", () => {
			if (this.green3.frame.name === "Symbol 930001.png") {
				this.green3.setFrame("Symbol 930002.png")
				this.green3sound = this.sound.add(`${this.genre}green3`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.green3sound.play()
					}, this);
				} else {
					this.counter++
					this.green3sound.play()
					this.green3sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.green3.setFrame("Symbol 930001.png")
				this.green3sound.stop()
				this.counter--
			}
		}, this)
		this.green4.setInteractive().on("pointerup", () => {
			if (this.green4.frame.name === "Symbol 930001.png") {
				this.green4.setFrame("Symbol 930002.png")
				this.green4sound = this.sound.add(`${this.genre}green4`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.green4sound.play()
					}, this);
				} else {
					this.counter++
					this.green4sound.play()
					this.green4sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.green4.setFrame("Symbol 930001.png")
				this.green4sound.stop()
				this.counter--
			}
		}, this)
		this.green5.setInteractive().on("pointerup", () => {
			if (this.green5.frame.name === "Symbol 930001.png") {
				this.green5.setFrame("Symbol 930002.png")
				this.green5sound = this.sound.add(`${this.genre}green5`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.green5sound.play()
					}, this);
				} else {
					this.counter++
					this.green5sound.play()
					this.green5sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.green5.setFrame("Symbol 930001.png")
				this.green5sound.stop()
				this.counter--
			}
		}, this)
		this.purple1.setInteractive().on("pointerup", () => {
			if (this.purple1.frame.name === "Symbol 980001.png") {
				this.purple1.setFrame("Symbol 980002.png")
				this.purple1sound = this.sound.add(`${this.genre}purple1`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.purple1sound.play()
					}, this);
				} else {
					this.counter++
					this.purple1sound.play()
					this.purple1sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.purple1.setFrame("Symbol 980001.png")
				this.purple1sound.stop()
				this.counter--
			}
		}, this)
		this.purple2.setInteractive().on("pointerup", () => {
			if (this.purple2.frame.name === "Symbol 980001.png") {
				this.purple2.setFrame("Symbol 980002.png")
				this.purple2sound = this.sound.add(`${this.genre}purple2`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.purple2sound.play()
					}, this);
				} else {
					this.counter++
					this.purple2sound.play()
					this.purple2sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.purple2.setFrame("Symbol 980001.png")
				this.purple2sound.stop()
				this.counter--
			}
		}, this)
		this.purple3.setInteractive().on("pointerup", () => {
			if (this.purple3.frame.name === "Symbol 980001.png") {
				this.purple3.setFrame("Symbol 980002.png")
				this.purple3sound = this.sound.add(`${this.genre}purple3`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.purple3sound.play()
					}, this);
				} else {
					this.counter++
					this.purple3sound.play()
					this.purple3sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.purple3.setFrame("Symbol 980001.png")
				this.purple3sound.stop()
				this.counter--
			}
		}, this)
		this.purple4.setInteractive().on("pointerup", () => {
			if (this.purple4.frame.name === "Symbol 980001.png") {
				this.purple4.setFrame("Symbol 980002.png")
				this.purple4sound = this.sound.add(`${this.genre}purple4`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.purple4sound.play()
						this.counter++
					}, this);
				} else {
					this.purple4sound.play()
					this.counter++
					this.purple4sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.purple4.setFrame("Symbol 980001.png")
				this.purple4sound.stop()
				this.counter--
			}
		}, this)
		this.purple5.setInteractive().on("pointerup", () => {
			if (this.purple5.frame.name === "Symbol 980001.png") {
				this.purple5.setFrame("Symbol 980002.png")
				this.purple5sound = this.sound.add(`${this.genre}purple5`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.purple5sound.play()
					}, this);
				} else {
					this.counter++
					this.purple5sound.play()
					this.purple5sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.purple5.setFrame("Symbol 980001.png")
				this.purple5sound.stop()
				this.counter--
			}
		}, this)
		this.pink1.setInteractive().on("pointerup", () => {
			if (this.pink1.frame.name === "Symbol 830001.png") {
				this.pink1.setFrame("Symbol 830002.png")
				this.pink1sound = this.sound.add(`${this.genre}pink1`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.pink1sound.play()
					}, this);
				} else {
					this.counter++
					this.pink1sound.play()
					this.pink1sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}

			} else {
				this.pink1.setFrame("Symbol 830001.png")
				this.pink1sound.stop()
				this.counter--
			}
		}, this)
		this.pink2.setInteractive().on("pointerup", () => {
			if (this.pink2.frame.name === "Symbol 830001.png") {
				this.pink2.setFrame("Symbol 830002.png")
				this.pink2sound = this.sound.add(`${this.genre}pink2`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.pink2sound.play()
					}, this);
				} else {
					this.counter++
					this.pink2sound.play()
					this.pink2sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.pink2.setFrame("Symbol 830001.png")
				this.pink2sound.stop()
				this.counter--
			}
		}, this)
		this.pink3.setInteractive().on("pointerup", () => {
			if (this.pink3.frame.name === "Symbol 830001.png") {
				this.pink3.setFrame("Symbol 830002.png")
				this.pink3sound = this.sound.add(`${this.genre}pink3`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.pink3sound.play()
					}, this);
				} else {
					this.counter++
					this.pink3sound.play()
					this.pink3sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.pink3.setFrame("Symbol 830001.png")
				this.pink3sound.stop()
				this.counter--
			}
		}, this)
		this.pink4.setInteractive().on("pointerup", () => {
			if (this.pink4.frame.name === "Symbol 830001.png") {
				this.pink4.setFrame("Symbol 830002.png")
				this.pink4sound = this.sound.add(`${this.genre}pink4`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.pink4sound.play()
					}, this);
				} else {
					this.counter++
					this.pink4sound.play()
					this.pink4sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.pink4.setFrame("Symbol 830001.png")
				this.pink4sound.stop()
				this.counter--
			}
		}, this)
		this.pink5.setInteractive().on("pointerup", () => {
			if (this.pink5.frame.name === "Symbol 830001.png") {
				this.pink5.setFrame("Symbol 830002.png")
				this.pink5sound = this.sound.add(`${this.genre}pink5`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.pink5sound.play()
					}, this);
				} else {
					this.counter++
					this.pink5sound.play()
					this.pink5sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.pink5.setFrame("Symbol 830001.png")
				this.pink5sound.stop()
				this.counter--
			}
		}, this)
		this.orange1.setInteractive().on("pointerup", () => {
			if (this.orange1.frame.name === "Symbol 880001.png") {
				this.orange1.setFrame("Symbol 880002.png")
				this.orange1sound = this.sound.add(`${this.genre}orange1`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.orange1sound.play()
					}, this);
				} else {
					this.counter++
					this.orange1sound.play()
					this.orange1sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.orange1.setFrame("Symbol 880001.png")
				this.orange1sound.stop()
				this.counter--
				
			}
		}, this)
		this.orange2.setInteractive().on("pointerup", () => {
			if (this.orange2.frame.name === "Symbol 880001.png") {
				this.orange2.setFrame("Symbol 880002.png")
				this.orange2sound = this.sound.add(`${this.genre}orange2`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.orange2sound.play()
					}, this);
				} else {
					this.counter++
					this.orange2sound.play()
					this.orange2sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.orange2.setFrame("Symbol 880001.png")
				this.orange2sound.stop()
				this.counter--
			}
		}, this)
		this.orange3.setInteractive().on("pointerup", () => {
			if (this.orange3.frame.name === "Symbol 880001.png") {
				this.orange3.setFrame("Symbol 880002.png")
				this.orange3sound = this.sound.add(`${this.genre}orange3`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.counter++
						this.orange3sound.play()
					}, this);
				} else {
					this.counter++
					this.orange3sound.play()
					this.orange3sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.orange3.setFrame("Symbol 880001.png")
				this.orange3sound.stop()
				this.counter--
			}
		}, this)
		this.orange4.setInteractive().on("pointerup", () => {
			if (this.orange4.frame.name === "Symbol 880001.png") {
				this.orange4.setFrame("Symbol 880002.png")
				this.orange4sound = this.sound.add(`${this.genre}orange4`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.orange4sound.play()
						this.counter++
					}, this);
				} else {
					this.orange4sound.play()
					this.counter++
					this.orange4sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.orange4.setFrame("Symbol 880001.png")
				this.orange4sound.stop()
				this.counter--
			}
		}, this)
		this.orange5.setInteractive().on("pointerup", () => {
			if (this.orange5.frame.name === "Symbol 880001.png") {
				this.orange5.setFrame("Symbol 880002.png")
				this.orange5sound = this.sound.add(`${this.genre}orange5`, {
					loop: true
				});
				if (this.counter > 0) {
					this.metronome.once('hmm', ()=> {
						this.orange5sound.play()
						this.counter++
					}, this);
				} else {
					this.orange5sound.play()
					this.counter++
					this.orange5sound.on('looped', () => {
						this.metronome.emit('hmm');
					});
				}
			} else {
				this.orange5.setFrame("Symbol 880001.png")
				this.orange5sound.stop()
				this.counter--
			}
		}, this)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
