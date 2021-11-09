import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { Category } from './../../categories/shared/category.model';
import { CategoryService } from './../../categories/shared/category.service';
import { Entry } from '../shared/entry.model';
import { EntryService } from './../shared/entry.service';
@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
})
export class EntryFormComponent extends BaseResourceFormComponent<Entry> implements OnInit  {

  categories: Array<Category>;

  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ',',
  };
  ptBR = {
    firstDayOfWeek: 0,
    dayNames: [
      'Domingo',
      'lunes',
      'martes',
      'miercoles',
      'jueves',
      'viernes',
      'Sábado',
    ],
    dayNamesShort: ['Dom', 'lun', 'mar', 'mier', 'jue', 'vier', 'Sab'],
    dayNamesMin: ['Do', 'lu', 'ma', 'mi', 'ju', 'vi', 'Sa'],
    monthNames: [
      'enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    monthNamesShort: [
      'ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    today: 'Hoja',
    clear: 'Limpiar',
  };

  typeOptions: Array<any>;

  constructor(
    protected entryService: EntryService,
    protected categorieService: CategoryService,
    protected injector: Injector
  ) {
    super(injector, new Entry(), entryService, Entry.fromJson);
  }

  ngOnInit(): void {
    this.loadCategories();
    this.typeOptions = this.gettypeOptions();
    super.ngOnInit();
  }

  gettypeOptions(): Array<any> {
    return Object.entries(Entry.types).map(([value, text]) => {
      return {
        text: text,
        value: value,
      };
    });
  }

  private loadCategories(): void {
    this.categorieService
      .getAll()
      .subscribe((categories) => (this.categories = categories));
  }

  protected creationPageTitle(): string {
    return 'nuevo producto';
  }

  protected editionPageTitle(): string {
    const entryName = this.resource.name || '';
    return 'Editando producto:' + entryName;
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null],
      type: ['expense', [Validators.required]],
      amount: [null, [Validators.required]],
      date: [null, [Validators.required]],
      paid: [true, [Validators.required]],
      categoryId: [null, [Validators.required]]
    });
  }

}
