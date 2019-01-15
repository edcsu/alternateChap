import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatToolbarModule,
    MatSidenavModule, MatIconModule, MatBadgeModule,
    MatMenuModule, MatListModule, MatGridListModule,
    MatCardModule, MatFormFieldModule, MatDatepickerModule,
    MatTabsModule, MatInputModule, MatCheckboxModule,
    MatNativeDateModule, MatRadioModule, MatProgressSpinnerModule,
    MatTooltipModule, MatBottomSheetModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatBadgeModule,
        MatMenuModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatBottomSheetModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatBadgeModule,
        MatMenuModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatBottomSheetModule
    ]
})
export class MaterialModule { }
