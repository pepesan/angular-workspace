# AngularWorkspace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12.

## Biblioteca pepesan-module-lib

```shell
ng build pepesan-module-lib --configuration development
ng test pepesan-module-lib
ng lint pepesan-module-lib
```

### Compilación para producción

```shell
ng build pepesan-module-lib
cd dist/pepesan-module-lib
npm login
npm publish --access public
```
### Instalación de la biblioteca en otro proyecto

```shell
npm install pepesan-module-lib --save
```
### Inclusión del Módulo en el app.module.ts
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PepesanModuleLibModule } from 'pepesan-module-lib';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PepesanModuleLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
``` 
### Inclusión del servicio en el app.module.ts
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PepesanModuleLibService } from 'pepesan-module-lib';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [PepesanModuleLibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
``` 
### Uso en un componente

```typescript
import { Component } from '@angular/core';
import {PepesanModuleLibService} from 'pepesan-module-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-modules';
  constructor(public pepesanModuleLibService: PepesanModuleLibService) {
  }
}
``` 



