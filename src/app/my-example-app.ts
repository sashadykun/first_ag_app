import { Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
    selector: 'app-root',
    template: `<h1>Hello World</h1>
    <p>A message from Sasha</p>`
    
})
class HelloWorldComponent {

}

@NgModule({
    bootstrap: [HelloWorldComponent],
    declarations: [
        //list all components
        HelloWorldComponent
    ],
    imports: [
        BrowserModule
    ]
})
class AppModule{

}

platformBrowserDynamic().bootstrapModule(AppModule)