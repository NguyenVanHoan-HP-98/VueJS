new Vue(
    {
        el: '#app',
        data: {
            playerHealth: 100,
            monsterHealth: 100,
            gameIsRunning: false,
            turns: []
        },
        methods: {
            startNewgame()
            {
                this.gameIsRunning = true;
                this.playerHealth = 100;
                this.monsterHealth = 100;
            },
            attack() {
                /* if (this.checkPlayerOption()) {
                    return;
                } */
                
                //monster
                damage = this.inputDamage(4, 12);
                if (this.monsterHealth < damage)
                {
                    this.monsterHealth = 0;
                     this.turns.unshift({
                        isPlayer: true,
                        textLog: 'Player hits Monster for ' + this.monsterHealth
                     }); 
                }
                else
                {
                    this.monsterHealth -= damage;
                    this.turns.unshift({
                        isPlayer: true,
                        textLog: 'Player hits Monster for ' + damage
                    });
                     
                }  
                this.checkPlayerOption('monsterHealth', this.monsterHealth);
                 //Player
                this.monsterAttacks();
                console.log('playerHealth: ' + this.playerHealth);
                console.log('monsterHealth: ' + this.monsterHealth);
            },
            specialattack()
            {

               /*  if (this.checkPlayerOption())
                {
                    return;
                    } */
                //monster
                damage = this.inputDamage(10, 20);
                this.monsterHealth -= damage;
                this.turns.unshift({
                    isPlayer: true,
                    textLog: 'Player hits Player for ' + damage
                });
                //Player
                this.monsterAttacks();
            },
            heal()
            {
                if (this.playerHealth > 70) {
                    return false;
                }
                else if (this.playerHealth <= 60) {
                    this.playerHealth += 10;
                }
                else
                {
                    this.playerHealth = 70;
                    }
            },
            
            giveup()
            {
                this.gameIsRunning = false;
                alert("You loss");
            },
            monsterAttacks()
            {
                damage = this.inputDamage(5, 10);
                if (this.playerHealth < damage)
                {
                    this.playerHealth = 0;
                    this.turns.unshift({
                    isPlayer: false,
                    textLog: 'Monster hits Player for ' + this.playerHealth
                    });
                }
                else
                {
                    this.playerHealth -= damage;
                    this.turns.unshift({
                    isPlayer: false,
                    textLog: 'Monster hits Player for ' + damage
                    });
                }
                
                 this.checkPlayerOption('playerHealth', this.playerHealth);
            },
            inputDamage(minDamage, maxDamage)
            {
                return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
            },
            checkPlayerOption(player, x)
            {
                if (player == 'monsterHealth' && x == 0)
                {
                    if (confirm("You won! New game"))
                    {
                        this.startNewgame();    
                    }
                    else
                    {
                        this.gameIsRunning = false;                       
                    }
                    return true;
                }
                if (player == 'playerHealth' && x == 0)
                {
                    
                    if (confirm("You Lost! New game"))
                    {
                        this.startNewgame();
                    }
                    else
                    {
                        this.gameIsRunning = false;                       
                    }
                    return true;
                }
                return ;
                
            }
        },
    }
);