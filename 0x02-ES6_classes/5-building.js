class Building{
    constructor(sqft){
        if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) 
            throw new Error("Class extending Building must override evacuationWarningMessage");
        if (typeof (sqft) !== 'number') throw TypeError('Sqft must be a number');
        this._sqft = sqft;
    }
    
    get sqft(){
        return this._sqft;
    }
    set sqft(sq){
        if (typeof (sq) !== 'number') throw TypeError('Sqft must be a number');
        this._sqft = sq;
    }
    evacuationWarningMessage() {
        if (this instanceof Building)
            console.log('instnace')    
    }
}

export default Building;