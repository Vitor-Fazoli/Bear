import { Armor  } from "./armor";
import { Weapon } from "./weapon";
import { auth, db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

export class Player {

    //Information
    name = "Player";
    birthday = new Date();
    race = "Human";
    perk = "None";
    profession = "None";

    //Stats
    hp = 0;
    hpMax = 0;
    sp = this.spMax;
    spMax = 10;
    phyDmg = 0;
    sprDmg = 0;
    phyRes = 0;
    sprRes = 0;
    ini = 0;

    //Level
    lvl = 1;
    lvlMax = 100;
    exp = 0;
    expMax = 100;

    //Equipment
    rightHand = Weapon;
    leftHand = Weapon;
    head = Armor;
    body = Armor;
    legs = Armor;
    feet = Armor;
    hands = Armor;
    neck = Armor;

    updateWeapon () {
        if (this.rightHand.twoHands) {
            this.leftHand = null;
        }

        this.phyDmg = this.rightHand.phyDmg + this.leftHand.phyDmg;
        this.sprDmg = this.rightHand.sprDmg + this.leftHand.sprDmg;
    }

    updateArmor () {
        this.phyDef = this.head.phyDef + this.body.phyDef + this.legs.phyDef + this.feet.phyDef + this.hands.phyDef + this.neck.phyDef;
        this.sprDef = this.head.sprDef + this.body.sprDef + this.legs.sprDef + this.feet.sprDef + this.hands.sprDef + this.neck.sprDef;
    }

    //Inventory
    inventory = [];
    inventoryMax = 20;

    //Database Update
    updateStats () {
        try {
                const uid = auth?.currentUser?.uid;
    
                const users = collection(db,'users');
    
                getDoc(doc(users, uid), {
                    name: this.name,
                    birthday: this.birthday,
                    race: this.race,
                    perk: this.perk,
                    profession: this.profession,
                    hp: this.hp,
                    hpMax: this.hpMax,
                    sp: this.sp,
                    spMax: this.spMax,
                    phyDmg: this.phyDmg,
                    sprDmg: this.sprDmg,
                    phyRes: this.phyRes,
                    sprRes: this.sprRes,
                    ini: this.ini,
                    lvl: this.lvl,
                    exp: this.exp,
                })
        } catch (e) {
            console.error(`Não foi possivel se conectar ao servidor`);
        }
    }
}