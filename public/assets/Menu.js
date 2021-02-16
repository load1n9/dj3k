
// You can write more code here

/* START OF COMPILED CODE */

class Menu extends Phaser.Scene {

	constructor() {
		super("Menu");

		/** @type {Phaser.GameObjects.Image} */
		this.play;
		/** @type {Phaser.GameObjects.Image} */
		this.instructions;
		/** @type {Phaser.GameObjects.Image} */
		this.saved;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	generated() {

		// background
		this.add.image(1207, 687, "background");

		// symbol_438_png
		this.add.image(1894, 744, "spritesheet", "Symbol 438.png");

		// escape
		this.add.image(2245, 40, "spritesheet", "Symbol 386.png");

		// symbol_4310001_png
		this.add.image(795, 236, "spritesheet", "Symbol 4310001.png");

		// play
		const play = this.add.image(773, 604, "spritesheet", "Symbol 367.png");
		play.scaleX = 2.0756363920561856;
		play.scaleY = 3.1378202501939874;

		// instructions
		const instructions = this.add.image(779, 904, "spritesheet", "Symbol 367.png");
		instructions.scaleX = 1.6152310866024886;
		instructions.scaleY = 1.9547280492427839;

		// saved
		const saved = this.add.image(779, 1104, "spritesheet", "Symbol 367.png");
		saved.scaleX = 1.6152310866024886;
		saved.scaleY = 1.9547280492427839;

		this.play = play;
		this.instructions = instructions;
		this.saved = saved;
	}

	/* START-USER-CODE */

	// Write your code here.
	create() {
		this.generated()
		this.play.setInteractive();
		this.instructions.setInteractive();
		this.saved.setInteractive();
		this.play.on('pointerup', () => {

			this.scene.start("Picker")
	
		},this);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
