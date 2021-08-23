import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent} from "./search/search.component";
import { MovieCardComponent } from './movie-card/movie-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { SearchListComponent} from "./search-list/search-list.component";
import { MovieDetailComponent} from "./movie-detail/movie-detail.component";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchComponent,
        MovieCardComponent,
        CardListComponent,
        SearchListComponent,
        MovieDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        FontAwesomeModule,
    ],
    providers: [],
    exports: [
        MovieCardComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
