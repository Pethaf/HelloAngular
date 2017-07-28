import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "jumbotron",
    templateUrl: "jumbotron.component.html"
})

export class JumbotronComponent 
{
    private jbtHeading: string; 
    private jbtText: string;
    private jBtnText: string;
    private jbtBtnUrl: string;
    
    constructor()
     {
        this.jbtHeading = "Hello World";
        this.jbtText = "This is a simple hero unit, a simple jumbotron-style"
        this.jBtnText =  "Read More"
        this.jbtBtnUrl = "/about"
     }
}