import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { LibModule } from 'lib';

import { AppComponent } from './app.component';
import { LeaguesService } from './app.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, ApolloModule, HttpLinkModule, LibModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory(httpLink: HttpLink) {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: 'http://localhost:4202/graphql'
                    })
                };
            },
            deps: [HttpLink]
        },
        LeaguesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
