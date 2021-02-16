
// You can write more code here

/* START OF COMPILED CODE */

class Picker extends Phaser.Scene {
	
	constructor() {
		super("Picker");
		
		/** @type {Phaser.GameObjects.Image} */
		this.pop;
		/** @type {Phaser.GameObjects.Image} */
		this.dubstep;
		/** @type {Phaser.GameObjects.Image} */
		this.rock;
		/** @type {Phaser.GameObjects.Image} */
		this.dance;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	generated() {
		
		// background
		this.add.image(1252, 678, "background");
		
		// pop
		const pop = this.add.image(1146, 611, "buttons", "Symbol 980001.png");
		pop.scaleX = 3;
		
		// dubstep
		const dubstep = this.add.image(1149, 1309, "buttons", "Symbol 830001.png");
		dubstep.scaleX = 3;
		
		// rock
		const rock = this.add.image(1146, 855, "buttons", "Symbol 780001.png");
		rock.scaleX = 3;
		
		// dance
		const dance = this.add.image(1147, 1086, "buttons", "Symbol 930001.png");
		dance.scaleX = 3;
		
		// symbol_4310001_png
		this.add.image(1174, 224, "spritesheet", "Symbol 4310001.png");
		
		this.pop = pop;
		this.dubstep = dubstep;
		this.rock = rock;
		this.dance = dance;
	}
	
	/* START-USER-CODE */

	// Write your code here.
	create() {
		this.generated()
		this.pop.setInteractive()
		this.dubstep.setInteractive()
		this.rock.setInteractive()
		this.dance.setInteractive()
		this.pop.on('pointerup', () => {
			this.pop.setTexture("buttons","Symbol 830002.png")
			this.scene.start("Game",{
				genre: "pop"
			})
	
		},this);
		this.dubstep.on('pointerup', () => {
			this.dubstep.setTexture("buttons","Symbol 830002.png")
			this.scene.start("Game",{
				genre: "dubstep"
			})
	
		},this);
		this.rock.on('pointerup', () => {
			this.rock.setTexture("buttons","Symbol 830002.png")
			this.scene.start("Game",{
				genre: "rock"
			})
	
		},this);
		this.dance.on('pointerup', () => {
			this.dance.setTexture("buttons","Symbol 830002.png")
			this.scene.start("Game",{
				genre: "dance"
			})
	
		},this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
