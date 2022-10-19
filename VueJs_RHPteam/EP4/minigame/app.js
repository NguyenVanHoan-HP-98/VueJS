new Vue(
    {
        el: '#app',
        data: {
            playerHealth: 100,
            monsterHealth: 100,
            gameIsRunning: false
        },
        methods: {
            startNewgame()
            {
                this.gameIsRunning = true;
                this.playerHealth = 100;
                this.monsterHealth = 100;
            },
            attack()
            {
                if (this.checkPlayerOption())
                {
                    return;
                    }
                //monster
               
                this.monsterHealth -= this.inputDamage(4,10);
                //Player
                this.monsterAttacks();
            },
            specialattack()
            {

                if (this.checkPlayerOption())
                {
                    return;
                    }
                //monster
               
                this.monsterHealth -= this.inputDamage(10,20);
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
                this.playerHealth -= this.inputDamage(5, 12);
                this.checkPlayerOption();
            },
            inputDamage(minDamage, maxDamage)
            {
                return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
            },
            checkPlayerOption()
            {
                if (this.monsterHealth <= 0)
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
                } else if(this.playerHealth <= 0)
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