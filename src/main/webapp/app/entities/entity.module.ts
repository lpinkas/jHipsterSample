import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JHipsterSampleRegionModule } from './region/region.module';
import { JHipsterSampleCountryModule } from './country/country.module';
import { JHipsterSampleLocationModule } from './location/location.module';
import { JHipsterSampleDepartmentModule } from './department/department.module';
import { JHipsterSampleTaskModule } from './task/task.module';
import { JHipsterSampleEmployeeModule } from './employee/employee.module';
import { JHipsterSampleJobModule } from './job/job.module';
import { JHipsterSampleJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JHipsterSampleRegionModule,
        JHipsterSampleCountryModule,
        JHipsterSampleLocationModule,
        JHipsterSampleDepartmentModule,
        JHipsterSampleTaskModule,
        JHipsterSampleEmployeeModule,
        JHipsterSampleJobModule,
        JHipsterSampleJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterSampleEntityModule {}
