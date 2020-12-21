import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromTimingControlFieldModule } from './extensions/7144f84dad386c1b744c7ad4317d8e9c03e3e793d9169e36e367ec1fc584e625/from-timing-control-field';
import { ToTimingControlFieldModule } from './extensions/600f2e8e3dbd81209d2d92a32da3b13ed631bcbaf0fe77a244304677bc4fe589/to-timing-control-field';


@NgModule({
    imports: [CommonModule, FromTimingControlFieldModule, ToTimingControlFieldModule],
})
export class SharedExtensionsModule {}
