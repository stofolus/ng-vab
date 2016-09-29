export class Registration {
    public personnummerVuxen: string;
    public barnId: string;
    public papper: boolean;
    public pappadagar: boolean;
    public kanalId: number;

    constructor(personnummerVuxen: string, barnId: string, papper: boolean) {
        this.personnummerVuxen = personnummerVuxen;
        this.barnId = barnId;
        this.papper = papper;
        
        // If we do the assignment in the declaration they won't be included in a
        // serialize version of this object. We should proabably figure out why 
        this.pappadagar = false;
        this.kanalId = 4;
    }
}
