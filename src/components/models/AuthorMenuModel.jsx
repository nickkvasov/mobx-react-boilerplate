import {action, makeObservable, observable} from "mobx";

export class AuthorMenuModel {
    activeItem = undefined;
    authoring = {};
    synopsis = undefined;


    constructor() {
        makeObservable(this, {
            activeItem: observable,
            authoring: observable,
            synopsis: observable,
            setActiveItem: action,
            setAuthoring: action,
            setSynopsis: action,
        });
        this.setActiveItem('authorIntentions');
    }

    setActiveItem = (activeItem) => {
        this.activeItem = activeItem;
    };

    setAuthoring = (activeItem, authorDescription) => {
        this.authoring[activeItem] = authorDescription;
    };

    setSynopsis = (synopsis) => {
        this.synopsis = synopsis;
    };


}