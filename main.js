class entity {
    constructor(name, hp, res, dmg, spd, acc, crit_c, crit_d){
        this.name = name;
        this.hp = hp;
        this.res = res;
        this.dmg = dmg;
        this.spd = spd;
        this.acc = acc;
        this.crit_c = crit_c;
        this.crit_d = crit_d;
    }
}

class player extends entity {
    constructor(name, class_type, perk, ){
        this.name = name;
        this.resistance = resistance;
        this.metabolism = metabolism;
        this.willpower = willpower;
        this.intelligence = intelligence;
    }

    //Resistance
    healthPoints = 0;
    healthPointsMax = this.resistance / 5;
    physicalResistance = this.resistance / 10;

    //Metabolism
    initiative = this.metabolism;
    physicalDamage = this.metabolism / 5;

    //Intelligence
    criticalChance = this.intelligence / 10;
    criticalDamage = 2;
    spiritResistance = this.intelligence / 10;

    //Willpower
    spiritDamage = this.willpower / 5;
    spiritRegenChance = this.willpower / 10;

    spiritPoints = 0;
    spiritPointsMax = 10;

    getValues(value){
        switch (value){
            case "hp":
                return this.healthPoints;
            case "hpMax":
                return this.healthPointsMax;
            case "sp":
                return this.spiritPoints;
            case "spMax":
                return this.spiritPointsMax;
            case "phyRes":
                return this.physicalResistance;
            case "spRes":
                return this.spiritResistance;
            case "phyDmg":
                return this.physicalDamage;
            case "spDmg":
                return this.spiritDamage;
            case "init":
                return this.initiative;
            case "crt":
                return this.criticalChance;
            case "crtDmg":
                return this.criticalDamage;
            default:
                return null;
        }
    }
}

class passive_skill {
    constructor(name, description, effect){
        this.name = name;
        this.description = description;
        this.effect = effect;
    }
}

class skill {
    constructor(name, dmg, acc, crit_c, crit_d){
        this.name = name;
        this.dmg = dmg;
        this.acc = acc;
        this.crit_c = crit_c;
        this.crit_d = crit_d;
    }
}

class item {
    stack = 1;
    consumable = false;
    stackable = false;
    equipable = typeof weapon;
}

class weapon  extends item{
    constructor(name, dmg, acc, crit_c, crit_d){
        this.name = name;
        this.dmg = dmg;
        this.acc = acc;
        this.crit_c = crit_c;
        this.crit_d = crit_d;
    }
}

class player extends entity  {
    constructor(name, hp, res, dmg, spd, acc, crit_c, crit_d, class_type){
        super(name, hp, res, dmg, spd, acc, crit_c, crit_d);
        class_type = new class_type();
    }

    bag = [];
    weapon_slot = [weapon, weapon];
}

