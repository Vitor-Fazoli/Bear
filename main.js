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

class class_type {
    constructor(name, hp, res, crit_c, crit_d, skill_one, skill_two){
        this.name = name;
        this.hp = hp;
        this.res = res;
        this.crit_c = crit_c;
        this.crit_d = crit_d;
        skill_one = new skill();
        skill_two = new skill();
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

