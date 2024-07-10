import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CourseModel } from "./course.model";

export class CourseFormModel extends FormGroup{
    constructor(){
        super({
            id : new FormControl(0),
            coursename :new FormControl('',[Validators.required]),
            desc : new FormControl('',[Validators.required,Validators.min(2)]),
            price:new FormControl('')
        })
    }

    //#region GetData
    getFormData():CourseModel{
let model = new CourseModel();
model.id = this.get('id').value ?? 0;
model.coursename= this.get('coursename').value ?? '';
model.desc = this.get('desc').value ?? '';
model.price = this.get('price').value ?? '';
return model;
    }
    //#endregion

    //#region SetData
setFormData(model:CourseModel){
this.get('id').setValue(model.id);
this.get('coursename').setValue(model.coursename);
this.get('desc').setValue(model.desc);
this.get('price').setValue(model.price);
}
    //#endregion
}