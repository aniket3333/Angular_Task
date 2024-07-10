import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserModel } from "./user.model";

export class UserFormModel extends FormGroup{
    constructor(){
        super({
            id : new FormControl(0),
            username :new FormControl('',[Validators.required]),
            password : new FormControl('',[Validators.required,Validators.min(2)]),
            role:new FormControl('')
        })
    }

    //#region GetData
    getFormData():UserModel{
let model = new UserModel();
model.id = this.get('id').value ?? 0;
model.username= this.get('username').value ?? '';
model.password = this.get('password').value ?? '';
model.role = this.get('role').value ?? '';
return model;
    }
    //#endregion

    //#region SetData
setFormData(model:UserModel){
this.get('id').setValue(model.id);
this.get('username').setValue(model.username);
this.get('password').setValue(model.password);
this.get('role').setValue(model.role);
}
    //#endregion
}