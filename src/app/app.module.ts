import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CapitalizePipe } from './capitalize.pipe';
import { BlogBodyComponent } from './blog-body/blog-body.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    CapitalizePipe,
    BlogBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
