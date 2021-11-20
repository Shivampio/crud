import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
       exports: [MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule, MatChipsModule, 
        MatAutocompleteModule, MatIconModule, MatRadioModule, MatCheckboxModule, MatTabsModule, MatTableModule,
        MatButtonModule, MatProgressBarModule, MatSnackBarModule, MatSlideToggleModule, MatMenuModule,MatSortModule,MatProgressSpinnerModule,MatPaginatorModule]
})
export class MaterialModule { }


