import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Root Component
import { AppComponent } from './app.component';

// Declared Components
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

// Custom Modules
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
