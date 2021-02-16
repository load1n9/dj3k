
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
		this.exit.setInteractive()
		this.exit.on("pointerup",()=> {
			this.game.sound.stopAll();
			this.scene.start("Menu")
		},this)
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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
