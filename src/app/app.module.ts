import { MembersInfoComponent } from './members/components/members-info/members-info.component';
import { SwordplayModule } from './swordplay/swordplay.module';
import { MembersModule } from './members/members.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MembersModule,
    SwordplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
