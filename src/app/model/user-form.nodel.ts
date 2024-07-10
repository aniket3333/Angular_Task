import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserModel } from "./user.model";

export class UserFormModel extends FormGroup{
    constructor(){
        super({
            id : new FormControl(0),
            email :new FormControl('',[Validators.required,Validators.email]),
            password : new FormControl('',[Validators.required,Validators.min(2)])
        })
    }

    //#region GetData
    getFormData():UserModel{
let model = new UserModel();
model.id = this.get('id').value ?? 0;
model.email= this.get('email').value ?? '';
model.password = this.get('password').value ?? '';
return model;
    }
    //#endregion

    //#region SetData
setFormData(model:UserModel){
this.get('id').setValue(model.id);
this.get('email').setValue(model.email);
this.get('password').setValue(model.password);
}
    //#endregion
}