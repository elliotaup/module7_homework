let enabled = false;
class ElectApplience {

    constructor(name, color, lifeTime) {
        this.name = name,
            this.color = color,
            this.lifeTime = lifeTime
    }
    enable() {
        return enabled = true
    }
    disable() {
        return enabled = false
    }
    getPower(volt, resist) {
        return Math.pow(volt, 2) / resist
    }

}

class Vacuum extends ElectApplience {
    type = 'wireless'
    dustCollector(dust) {
        let container = 25;
        if (dust > container) {
            console.log(`Почистите контейнер`)
        } else console.log(`Продолжайте работу`)
    }


}
let vac = new Vacuum('aviato', "red", 2000)
console.log(vac.name)
console.log(vac.getPower(150, 20))
console.log(vac.type)
vac.dustCollector(26)


let autoShut = false;
class Iron extends ElectApplience {
    constructor(name, color, lifeTime, steam, weight) {
        super(name, color, lifeTime)
        this.steam = steam,
            this.weigth = weight
    }
    autoOff(workingHour) {
        if (workingHour > 1) {
            return autoShut = true
        } else return false
    }
}
let iron = new Iron('uber', 'red', 2021, true, 8)
console.log(iron)
console.log(iron.name)
console.log(iron.enable())
console.log(iron.autoOff(5))