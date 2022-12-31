export class Jeux {
    id?: string;
    country: string;
    available: boolean;
    pictureLink: string;
    developer: string;
    editor: string;
    releaseDate: string;
    synopsis: string;
    title: string;

    constructor(){
        this.country = '';
        this.available = true;
        this.pictureLink = '';
        this.developer = '';
        this.editor = '';
        this.releaseDate = '';
        this.synopsis = '';
        this.title = '';
    }
}
